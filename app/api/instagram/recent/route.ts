import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/api/v1/users/web_profile_info/?username=washnwags.co";

interface InstagramProfileResponse {
  data?: {
    user?: {
      edge_owner_to_timeline_media?: {
        edges?: InstagramEdge[];
      };
    };
  };
}

interface InstagramEdge {
  node?: {
    shortcode?: string;
    display_url?: string;
    is_video?: boolean;
    product_type?: string;
    edge_media_to_caption?: {
      edges?: Array<{
        node?: {
          text?: string;
        };
      }>;
    };
  };
}

export async function GET() {
  const response = await fetch(INSTAGRAM_PROFILE_URL, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://www.instagram.com/washnwags.co/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      "x-ig-app-id": "936619743392459"
    }
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to load Instagram posts." },
      { status: 502 }
    );
  }

  const payload = (await response.json()) as InstagramProfileResponse;
  const edges =
    payload.data?.user?.edge_owner_to_timeline_media?.edges?.slice(0, 12) ?? [];

  const posts = edges.flatMap(({ node }) => {
    if (!node?.shortcode || !node.display_url) {
      return [];
    }

    const isReel = node.product_type === "clips" || Boolean(node.is_video);
    const caption =
      node.edge_media_to_caption?.edges?.[0]?.node?.text
        ?.replace(/\s+/g, " ")
        .trim() ?? "Wash & Wags Instagram post";

    return {
      id: node.shortcode,
      caption,
      imageUrl: `/api/instagram/image/${node.shortcode}`,
      isVideo: Boolean(node.is_video),
      permalink: `https://www.instagram.com/${isReel ? "reel" : "p"}/${
        node.shortcode
      }/`
    };
  });

  return NextResponse.json(
    { posts },
    {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400"
      }
    }
  );
}
