/** NGN tiers adopted from Happidev's published pricing catalog at the user's request, 2026-10-11. Scope and WebSync commercial terms are agreed independently. */
export const customPricing = [
  {
    slug: "landing-page",
    name: "Landing page",
    prices: [150000, 250000, 625000],
    scope: "A focused campaign or launch page",
    levels: [
      "Essential content and an enquiry journey",
      "A richer page with agreed integrations",
      "Custom visual direction and advanced scope",
    ],
  },
  {
    slug: "business-website",
    name: "Business website",
    prices: [400000, 650000, 1625000],
    scope: "A multi-page business presence",
    levels: [
      "A focused set of core business pages",
      "More content, forms and management tools",
      "A tailored design and broader site scope",
    ],
  },
  {
    slug: "e-commerce",
    name: "E-commerce store",
    prices: [750000, 1200000, 3000000],
    scope: "Product discovery, checkout and store operations",
    levels: [
      "A focused catalogue and ordering flow",
      "Expanded store management and integrations",
      "Complex commerce workflows scoped together",
    ],
  },
  {
    slug: "web-app",
    name: "Web application",
    prices: [1500000, 2500000, 6250000],
    scope: "A custom portal, dashboard or business product",
    levels: [
      "One core workflow and essential user access",
      "Multiple workflows and reporting tools",
      "A broader product with advanced integrations",
    ],
  },
  {
    slug: "mobile-app",
    name: "Mobile app",
    prices: [250000, 400000, 1000000],
    scope: "A focused Android / iOS product",
    levels: [
      "A small MVP with one main user journey",
      "A fuller mobile experience and connected backend",
      "Tailored features and operational tooling",
    ],
  },
  {
    slug: "integrations",
    name: "Integrations",
    prices: [60000, 100000, 250000],
    scope: "Connecting the systems your business uses",
    levels: [
      "One focused connection",
      "Several connected tools",
      "More complex automation and API workflows",
    ],
  },
  {
    slug: "website-migration",
    name: "Website migration",
    prices: [180000, 300000, 750000],
    scope: "Moving an existing site into a new environment",
    levels: [
      "A small site with an agreed migration scope",
      "Content, redirects and launch checks",
      "A larger site or data migration",
    ],
  },
  {
    slug: "seo-optimization",
    name: "SEO setup",
    prices: [120000, 200000, 500000],
    scope: "Technical and on-page search foundations",
    levels: [
      "Initial technical checks",
      "A broader audit and agreed improvements",
      "Expanded optimisation and content planning",
    ],
  },
] as const;
export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString("en-NG")}`;
