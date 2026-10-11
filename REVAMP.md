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

This change does not merge master or promote a production deployment. A preview for the King-Austin fork was created in the connected WebSync Vercel project. See pull request #2 for its current status and review URL. The live custom domains remain on their existing production deployment.

## Reference alignment pass

The second pass follows the reference composition and geometry: 1480px containers, 60px desktop / 36px mobile hero typography, pill controls, a dotted device stage with floating dark panels, benefit/client marquees, eight keyboard-accessible service tabs, integration bands, a 19-project horizontal showcase, a numbered process and a searchable two-column FAQ. The footer includes contact actions, copyable email, Lagos-time clock, service/company/legal navigation and an outlined WebSync wordmark.

The visual shell also covers About, Contact, Pricing, Work, the journal and article pages, the founder profile and existing legal pages. Added eight service-detail routes and a startups/product-build page. Existing policy and article body content is retained. The contact brief prepares a WhatsApp message for the visitor to review and send; it does not pretend to store an enquiry. No newsletter subscription or Happidev-specific guarantees are represented as WebSync services.

Alignment validation: production build passed; all 19 marketing/service route checks and representative font/project asset checks returned HTTP 200 locally. Automated component tests cover service tabs and keyboard navigation, FAQ filtering, all 19 client domains and category filtering, mobile menu state, WhatsApp brief preparation and email copying. A full deployed browser comparison remains blocked by Vercel sign-in; automatic approval review rejected creating a shareable bypass link. Preview protection is retained.

## Homepage expansion

The footer wordmark now uses solid WebSync blue, and the hero has visible blue grid lines. The homepage includes both founder profiles, subscription/custom pricing with a link to the full pricing page, and a CAC registration section with an expandable view of the existing redacted certificate. The CAC asset is explicitly included in the deployment file trace and loaded directly in the browser to preserve the existing referrer protection.

The user-reported total is presented as **30+ clients served**, separately from the **19 selected projects** in the portfolio. No additional domains or unsupported customer testimonials were invented. Production build (44 generated routes) and the six existing interaction tests passed. Deployed visual review remains blocked by Vercel Authentication.

## Authenticated navigation review

Vercel sign-in now allows live preview review. The original Services anchor lands at approximately 105px below the viewport top. Founder images and the expandable CAC certificate loaded successfully on the deployment. The browser exposed a sticky-header failure on deep scroll: `overflow-x: hidden` on the body creates an unintended ancestor scroll container. Replaced that rule with `clip`, preserving horizontal clipping without intercepting sticky positioning.

Homepage Work, Pricing and About navigation now targets their homepage sections; detail pages remain available through section CTAs and footer links. The mobile menu focuses its first link when opened, closes after selection, and returns focus to its toggle on Escape. The existing navigation test now checks those behaviors. True mobile viewport visual verification remains pending: the available cloud browser does not expose a viewport resize control.

## Continued navigation refinement

Authenticated desktop verification on the navigation-fix deployment confirmed the header stays at y=0 after scrolling to the founders, with the target section at roughly 105px. Added active-section highlighting while scrolling, on both desktop and mobile navigation. Small-phone header rules now reduce spacing and logo width below 390px, preserve a 44px menu target and CTA, and fit the mobile menu to the 72px header. Seven interaction tests pass, including active-section transitions, mobile Escape/focus and selection; the production build passes. These mobile layout rules have been reviewed in code, but a true phone-width visual check remains outstanding because the available browser API has no viewport resize control.
