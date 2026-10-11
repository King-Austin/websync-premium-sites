export const projectCategories = [
  "All work",
  "Commerce",
  "Business & industry",
  "Hospitality & lifestyle",
  "Community",
  "Software",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];
export const projects: {
  slug: string;
  name: string;
  category: ProjectCategory;
  sector: string;
  domain: string;
  description: string;
}[] = [
  {
    slug: "oyabuk",
    name: "OYABUK",
    category: "Commerce",
    sector: "Creative booking marketplace",
    domain: "oyabuk.com",
    description:
      "A place to discover studios, rent production equipment and book creative professionals.",
  },
  {
    slug: "nattybest-marketplace",
    name: "Nattybest Marketplace",
    category: "Commerce",
    sector: "Solar & electronics marketplace",
    domain: "nattybestmarketplace.com",
    description:
      "Product discovery, brand stores and merchant onboarding for a solar and electronics marketplace.",
  },
  {
    slug: "topit",
    name: "Topit",
    category: "Software",
    sector: "Digital recharge services",
    domain: "topit.com.ng",
    description:
      "A digital platform presenting airtime, data, cashback and recharge automation.",
  },
  {
    slug: "nattybest-solar",
    name: "Nattybest Solar",
    category: "Business & industry",
    sector: "Electrical & solar services",
    domain: "nattybestsolargroup.com",
    description:
      "A service-led website for solar installation, electrical wiring, security and smart homes.",
  },
  {
    slug: "felicity-solar",
    name: "Felicity Solar Nigeria",
    category: "Business & industry",
    sector: "Solar products & installation",
    domain: "felicitysolarenergy.org.ng",
    description:
      "A product and service showcase for Felicity solar equipment and installation enquiries.",
  },
  {
    slug: "cworth-solar",
    name: "Cworth Solar Energy",
    category: "Business & industry",
    sector: "Clean energy",
    domain: "cworthsolarenergy.com.ng",
    description:
      "Solar product discovery and installation information with a direct WhatsApp enquiry path.",
  },
  {
    slug: "dynamo-group",
    name: "Dynamo Group",
    category: "Business & industry",
    sector: "Real estate & diversified business",
    domain: "dynamogroup.com.ng",
    description:
      "A corporate presence connecting property developments, agriculture and construction services.",
  },
  {
    slug: "nattybest-autos",
    name: "Nattybest Autos",
    category: "Business & industry",
    sector: "Automotive dealership",
    domain: "nattybestautos.com",
    description:
      "A vehicle showroom designed around inventory discovery and sales enquiries.",
  },
  {
    slug: "mariador",
    name: "Mariador Hotel",
    category: "Hospitality & lifestyle",
    sector: "Hospitality & reservations",
    domain: "mariadorhotel.com.ng",
    description:
      "Room discovery and date selection leading to a WhatsApp reservation conversation.",
  },
  {
    slug: "nattybest-farms",
    name: "Nattybest Farm Industries",
    category: "Business & industry",
    sector: "Agriculture & wholesale supply",
    domain: "nattybestfarmindustries.com",
    description:
      "A business website presenting palm cultivation, processing and bulk supply operations.",
  },
  {
    slug: "trinitino",
    name: "Trinitino Consult",
    category: "Business & industry",
    sector: "Engineering & construction",
    domain: "trinitinoconsult.com.ng",
    description:
      "Engineering, architecture and surveying services supported by project examples and quote enquiries.",
  },
  {
    slug: "maryjane",
    name: "MaryJane Fashion",
    category: "Commerce",
    sector: "Wholesale fashion",
    domain: "mjfashion.com.ng",
    description:
      "A visual wholesale catalogue with collections, bulk pricing and WhatsApp enquiries.",
  },
  {
    slug: "nattybest-oil",
    name: "Nattybest Oil & Gas",
    category: "Business & industry",
    sector: "Petroleum & energy logistics",
    domain: "nattybestoilandgas.com",
    description:
      "A corporate showcase for petroleum supply, distribution and energy logistics.",
  },
  {
    slug: "nattybest-logistics",
    name: "Nattybest Logistics",
    category: "Business & industry",
    sector: "Courier & transport",
    domain: "nattybesttransportgateway.com",
    description:
      "A delivery enquiry funnel with route and package selection before WhatsApp booking.",
  },
  {
    slug: "jazeon",
    name: "Jazeon Dynamic International",
    category: "Business & industry",
    sector: "International business services",
    domain: "jazeondynamicinternational.com",
    description:
      "A unified presentation of real estate, construction, trade and professional services.",
  },
  {
    slug: "icfm",
    name: "ICFM Africa",
    category: "Community",
    sector: "Christian mission & charity",
    domain: "icfmafrica.org",
    description:
      "A mission website connecting youth programmes, community stories and opportunities to support.",
  },
  {
    slug: "deangelika",
    name: "De Angelika Beauty Lounge",
    category: "Hospitality & lifestyle",
    sector: "Beauty & grooming",
    domain: "deangelika.com.ng",
    description:
      "A salon showcase connecting services, client transformations and WhatsApp appointments.",
  },
  {
    slug: "asu",
    name: "Akpu Students Union",
    category: "Community",
    sector: "Student & community association",
    domain: "akpustudentsunion.com.ng",
    description:
      "A community hub for student leadership, programmes, events and shared memories.",
  },
  {
    slug: "rmis",
    name: "RMIS",
    category: "Software",
    sector: "Real estate management software",
    domain: "rmis.com.ng",
    description:
      "A product website explaining property management, client records, commissions and payment tracking.",
  },
];
export const featuredProjects = ["oyabuk", "dynamo-group", "deangelika"];
export const enquiryUrl =
  "https://wa.me/2349111719701?text=Hello%20WebSync%2C%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.";
