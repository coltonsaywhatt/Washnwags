/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://washnwags.co",
  generateRobotsTxt: true,
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
