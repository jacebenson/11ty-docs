---
title: Docs and Cookbooks
---
Docs are listed on the left on the `page` template because it's part of a the `meta.leftNavLinks` (see `./src/_data/meta.js` to see that).  All links there will be listed on the left.  If the link is a tag/collection, you'll see the docs for that collection in alphabetical order.

The page template is located `./src/_includes/page.njk`.  This includes the `./src/_includes/leftpagenav.njk` which loops over all collections and lists them.