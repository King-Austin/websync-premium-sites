import { ArrowUpRight, Building2, Smartphone, Users, TrendingUp, Boxes, ContactRound, Wifi, Repeat2, Zap } from "lucide-react";
import { Heading } from "./Sections";

const products = [
  {
    name: "RMIS",
    category: "REAL ESTATE OPERATIONS",
    url: "https://rmis.com.ng/",
    icon: Building2,
    headline: "One workspace for your real estate business.",
    description: "Connect your people, sales, properties and clients in one application. Built to help real estate companies keep their operations organised as they grow.",
    stats: [["10+", "real estate companies onboarded"], ["80+", "realtors onboarded"]],
    features: [[Users, "Employee tracking"], [TrendingUp, "Sales tracking"], [Boxes, "Property inventory"], [ContactRound, "Client management"]] as const,
  },
  {
    name: "TOPIT",
    category: "DATA & EVERYDAY UTILITIES",
    url: "https://topit.com.ng/",
    icon: Smartphone,
    headline: "Affordable data. Everyday essentials.",
    description: "Data purchases, recharge automation and basic utility services for students and everyday users. Our aim is to reduce the cost of staying connected as the product scales.",
    stats: [["50+", "users onboarded"]],
    features: [[Wifi, "Affordable data purchases"], [Repeat2, "Recharge automation"], [Zap, "Basic utility services"], [Users, "Built for students & everyday users"]] as const,
  },
];

export default function Products() {
  return (
    <section className="ws-section ha-products" id="products">
      <div className="ws-container">
        <Heading label="EXPLORE OUR PRODUCTS" title="Built by us. Growing with the people who use them." copy="RMIS and TOPIT are independent products under WebSync Digital, each solving a different everyday problem. We’re continuing to build and scale both." />
        <div className="ha-product-cards">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article className="ha-product-card" key={product.name}>
                <div className="ha-product-brand"><Icon size={30} aria-hidden="true" /><span>{product.category}</span></div>
                <h3>{product.name}</h3>
                <h4>{product.headline}</h4>
                <p>{product.description}</p>
                <dl className="ha-product-stats">
                  {product.stats.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                </dl>
                <ul className="ha-product-features">
                  {product.features.map(([Feature, label]) => <li key={label}><Feature size={19} aria-hidden="true" />{label}</li>)}
                </ul>
                <a className="ws-button" href={product.url} target="_blank" rel="noopener noreferrer">Explore {product.name}<ArrowUpRight size={17} /><span className="sr-only"> (opens in a new tab)</span></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
