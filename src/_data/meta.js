const links = require('./links');
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "http://localhost:8080",
  siteName: "RedwoodJS",
  siteDescription:
    "An opinionated Javascript framework that combines React, GraphQL, Prisma2, SQL, and lots more out of the box.",
  siteImage: "images/opengraph-256.png",
  siteURL: "https://redwoodjs.com",
  twitterHandle: "@redwoodjs",
  siteTwitterTitle: "Bringing full-stack to the Jamstack",
  navLinks: [
    links.docs,
    links.community,
    links.shop,
    links.news,
    links.jobs,
    links.roadmap,
  ],
  iconLinks: [
    links.github,
    links.twitter,
    links.youtube,
    links.community,
    links.discord,
  ],
  authorName: "Stephanie Eckles" // optional
};
