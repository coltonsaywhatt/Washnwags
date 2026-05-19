/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://washnwags.co",
  generateRobotsTxt: true,
  autoLastmod: false,
  sourceDir: process.env.NEXT_DIST_DIR || ".next",
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ]
  }
};
