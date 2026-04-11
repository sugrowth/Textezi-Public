# Textezi Public

<div align="center">
  <img src="assets/site-logo.png" alt="Textezi Logo" width="120">

  <h3>Textezi (Text Easy)</h3>

  <p><strong>Keep the language. Read it in English letters.</strong></p>

  <p>
    This repository contains the public-facing website for Textezi.
    It powers the product site, public pages, public assets, and search-facing metadata.
  </p>
</div>

---

## What this repo is

This is the repository for the **Textezi website**, not the Android app itself.

If someone lands here for the first time, the important context is:

- **Textezi** is pronounced **Text Easy**
- the product keeps the same language while showing supported text in **English letters**
- the product is about **script conversion / readability**, not translation
- this repo contains the **public site**, **support/legal pages**, **blog pages**, and **website assets**

## What this repo is not

This repo does **not** contain the main Android application source.

The app code lives in the separate **Textezi** repository. This repo exists so the public website can be managed independently from the product codebase.

## What this website communicates

The public site is responsible for explaining:

- what Textezi does
- what it does not do
- who it is for
- how to understand the current feature set
- privacy and terms
- public support entry points

The website should read like a product site, not like internal notes or a repo reference page.

## Public links

- **Website**: [textezi.com](https://textezi.com)
- **GitHub repo**: [sugrowth/Textezi-Public](https://github.com/sugrowth/Textezi-Public)
- **Issues**: [Open an issue](https://github.com/sugrowth/Textezi-Public/issues/new)

## Repo structure

- `index.html`: main landing page
- `features.html`: product capability and workflow page
- `who-is-this-for.html`: audience and use-case page
- `faq.html`: public FAQ
- `about.html`: product story and public context
- `support.html`: public support page
- `privacy.html`: privacy page
- `terms.html`: terms page
- `blog.html`: blog index
- `blogs/`: blog templates and published articles
- `assets/site.css`: shared website styling
- `assets/site.js`: small site interactions
- `assets/site-logo.png`: primary website logo mark
- `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`: favicon set derived from the website logo
- `social-preview.png`: public preview image used by social / metadata surfaces
- `robots.txt`, `sitemap.xml`, `CNAME`, `site.webmanifest`: public web and SEO infrastructure

## Current website direction

The site is intentionally:

- static and lightweight
- product-first in language
- separate from app implementation details
- built for GitHub Pages style hosting with a custom domain
- designed so branding, copy, and SEO can be updated without touching the app repo

## How to work in this repo

When making changes here:

- update the relevant page HTML directly
- keep shared styling in `assets/site.css`
- keep branding assets consistent across `assets/site-logo.png`, favicon files, and `social-preview.png`
- keep titles, descriptions, canonicals, and schema aligned when public messaging changes
- treat the site as the public face of the product, not as engineering documentation

## New visitor summary

If you only read one paragraph:

**Textezi-Public is the repo for the Textezi website.**

It contains the public landing pages, support/privacy/terms pages, blog content, brand assets, favicon/social images, and SEO/domain configuration that together power the public face of Textezi at [textezi.com](https://textezi.com). The Android app itself lives in a separate repository.

## Legal

Copyright © 2026 Sugrowth. All rights reserved.
