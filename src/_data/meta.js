const links = require('./links');
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "http://localhost:8080",
  siteName: "TskrBase",
  siteDescription:
    "An opinionated Javascript framework that combines React, GraphQL, Prisma2, SQL, and lots more out of the box.",
  siteImage: "images/opengraph-256.png",
  siteURL: "https://tskr.io/",
  twitterHandle: "@redwoodjs",
  siteTwitterTitle: "Bringing full-stack to the Jamstack",
  navLinks: [
    links.docs,
    links.tutorials,
    links.roadmap,
  ],
  iconLinks: [
    links.github,
    links.twitter,
    links.youtube,
    links.discord,
  ],
  leftNavLinks: [
    links.docs,
    links.tutorials,
    links.cookbooks,
    links.videos,
  ],
  footerLinks: [
    links.logos,
    links.contributing,
    links.github,
    links.twitter,
    links.discord
  ]
};
