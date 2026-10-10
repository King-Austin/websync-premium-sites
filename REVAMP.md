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
