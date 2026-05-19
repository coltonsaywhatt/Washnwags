import { NextRequest, NextResponse } from "next/server";

const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/api/v1/users/web_profile_info/?username=washnwags.co";

interface InstagramProfileResponse {
  data?: {
    user?: {
      edge_owner_to_timeline_media?: {
        edges?: Array<{
          node?: {
            shortcode?: string;
            display_url?: string;
          };
        }>;
      };
    };
  };
}

async function getInstagramImageUrl(shortcode: string) {
  const response = await fetch(INSTAGRAM_PROFILE_URL, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://www.instagram.com/washnwags.co/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      "x-ig-app-id": "936619743392459"
    },
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as InstagramProfileResponse;
  const edges = payload.data?.user?.edge_owner_to_timeline_media?.edges ?? [];
  const match = edges.find(({ node }) => node?.shortcode === shortcode);

  return match?.node?.display_url ?? null;
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ shortcode: string }> }
) {
  const { shortcode } = await context.params;
  const imageUrl = await getInstagramImageUrl(shortcode);

  if (!imageUrl) {
    return NextResponse.json(
      { error: "Instagram image not found." },
      { status: 404 }
    );
  }

  const imageResponse = await fetch(imageUrl, {
    headers: {
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://www.instagram.com/washnwags.co/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
    },
    next: { revalidate: 3600 }
  });

  if (!imageResponse.ok || !imageResponse.body) {
    return NextResponse.json(
      { error: "Unable to load Instagram image." },
      { status: 502 }
    );
  }

  return new NextResponse(imageResponse.body, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": imageResponse.headers.get("Content-Type") ?? "image/jpeg"
    }
  });
}
