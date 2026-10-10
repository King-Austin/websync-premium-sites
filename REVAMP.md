# WebSync Digital revamp

Implemented on `revamp/happidev-inspired-websync` in the King-Austin fork.

The homepage uses editorial typography, warm neutral surfaces, layered interface graphics, subtle motion and WebSync's existing blue. The homepage, work and pricing routes share navigation, portfolio data, pricing and FAQs. All 19 client projects use parent domains and locally captured screenshots; company subdomains are excluded.

Fonts are self-hosted with their OFL licenses. Motion respects reduced-motion preferences. The blocking preloader and recurring debugger timer were removed. Static assets and background navigation prefetches bypass the existing page rate limiter.

## Validation

- Production Next.js build passed (35 routes).
- Browser checks passed for homepage, work and pricing; all 19 projects, category filters, FAQ expansion, mobile navigation, image loading and horizontal overflow.
- Reduced-motion mode disables floating animations; no browser runtime errors observed.
- Vercel Analytics' script is unavailable on the local server, as expected.

## Commercial content

The existing subscription starts at NGN 9,999/month, with the existing 36-month commitment and optional NGN 399,000 buyout disclosed beside pricing. Custom project prices are quoted rather than retaining contradictory old fixed prices. These existing terms should receive business review before production publication.

## Deployment

This change does not merge master or promote a production deployment. The connected Vercel project belongs to the WebSync account; a preview for the King-Austin fork has not yet been verified.
