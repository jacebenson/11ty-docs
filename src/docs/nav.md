---
title: Navigation
---

There's three templates for navigation:

- Header
- Sidebar
- Footer

The Header and footer are always present, but the sidebar is only present when using the `./src/_includes/page.njk` template.

Each of these sections [links](/docs/links) are controlled by the `./src/_data/meta.js` file.  That file lists which section gets what links.

Those links are defined in `./src/_data/links.js` and are used throughout the site.

Below I'll go over each template.

## Header

The header is the top of the page.  It's always present.  It consists of the following;

- Logo and site name
- Left Navigation (navLinks)
- Version
- Stargazers
- Right Navigation (iconLinks)

### Logo and site name

This expects a `/images/logo.svg` to render.  The siteName is defined in `./src/_data/meta.js`.

### Left Navigation

These links are defined in `./src/_data/links.js` under `navLinks`.

### Version

Releases are versioned on Github.

We pull the latest version number at build time from GitHub.

If you run this locally we instead use a number of v.0.99.9+

This code is defined in `./src/_data/release.js`.  The result of that code is what is rendered here.  Today the only way to remove this is to remove it from the `./src/_includes/nav.njk` template.

### Stargazer Count

Stargazers are people who have starred the repository.

We pull this number at build time from GitHub.

If you run this locally we instead use a number of 9000+.

This code is defined in `./src/_data/stargazers.js`.  The result of that code is what is rendered here.  Today the only way to remove this is to remove it from the `./src/_includes/nav.njk` template.

### Right Navigation

These links are defined in `./src/_data/links.js` under `iconLinks` and will require a SVG icon code to render.

## Sidebar


The side bar is only present on the `./src/_includes/page.njk` template.  It's the left side of the page.

### Links

This set of links is controlled by the `./src/_data/meta.js` file.  That file lists which section gets what links.

### Collections

When a link is also the name of a tag/collection, it will render the files in that collection below the link alphabetically.

That is defined in the `./src/_includes/leftpagenav.njk` file.

## Footer

The footer is the bottom of the page.  It's always present.  It consists of the following;

- License
- Hosted on
- Footer Links

### License

This is defined in the `./src/_data/links.js` file as it is just a link to the license.

### Hosted on

This is defined in the `./src/_data/links.js` file as it is just a link to the hosting provider.

### Footer Links

These links are defined in `./src/_data/links.js` under `footerLinks`.