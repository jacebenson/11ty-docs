const links = require('./links');
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "http://localhost:8080",
  siteName: "11ty-Docs",
  siteDescription:
    "An opinionated Javascript framework that combines React, GraphQL, Prisma2, SQL, and lots more out of the box.",
  siteImage: "images/opengraph-256.png",
  siteURL: "https://11ty-docs.netlify.app/",
  twitterHandle: "@jacebenson",
  siteTwitterTitle: "Yay another docs template",
  navLinks: [
    links.docs,
    links.roadmap,
    links.tutorials,
  ],
  iconLinks: [
    links.github,
    links.twitter,
    links.youtube,
    links.discord,
  ],
  leftNavLinks: [
    links.docs,
    links.cookbooks,
    links.videos,
    links.tutorials,

  ],
  footerLinks: [
    links.logos,
    links.contributing,
    links.github,
    links.twitter,
    links.discord
  ]
};
