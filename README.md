# Sagar Gurav - Engineering Folio

Static editorial portfolio for AI engineering, backend systems and developer tools. Warm paper, oversized typography, original concept diagrams and six source-linked project exhibits. Plain HTML/CSS/JavaScript, no API keys, application cookies or backend. Visitor counts use Vercel Web Analytics. Contact links open email, GitHub or LinkedIn.

## Preview
The site is self-contained in index.html. Run `python3 -m http.server` from this directory and open the local address. All project links point to source repositories. Simulation results and project limitations are labeled. Artwork is conceptual, not a product screenshot.

## Accessibility and motion
Keyboard focus styles and a skip link are included. Scroll reveals and line drawing are enhancement-only. All content remains visible without JavaScript. Reduced-motion preferences disable animation and smooth scrolling. Fonts are embedded in index.html. Their license is FONT-LICENSE.txt; original OTF bytes are base64-encoded in font-sources.json.

## Deployment configuration
The included Vercel configuration serves a static site with security headers. Use the Other framework preset, no build command and no environment variables. Published as a new project after the owner approved the editorial v3 and visitor analytics. Existing sites and domains are separate.

## Design references
- https://dennissnellenberg.com/ - bold identity and negative space
- https://dennissnellenberg.com/work - editorial work hierarchy
- https://rauno.me/ - distinctive composition and interaction
- https://emilkowal.ski/ - restrained typography and readable content

These informed the design direction. No source code, illustrations or site layouts were copied.

## Visitor counts
Open the Vercel project and select Analytics. The Hobby plan includes 50,000 events/month shared across projects, with a one-month reporting window; collection pauses at the limit without charging overages.

## Font redistribution
URW fonts and the converted WOFF files retain their AGPL-3 font license in FONT-LICENSE.txt. Original OTF bytes are in font-sources.json. Decode each value with base64, then use fontTools.ttLib.TTFont, set flavor to woff and save to reproduce the embedded WOFF files. Site source is separate from these third-party font assets; no additional site-code license is granted.

Live site: https://sagar-portfolio-silk-six.vercel.app/
Visitor dashboard: https://vercel.com/sagar-grvs-projects/sagar-portfolio/analytics
