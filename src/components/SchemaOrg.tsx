import Script from "next/script";
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.websyncdigital.com.ng/#organization",
      name: "WebSync Digital",
      legalName: "WebSync Digital Technology Ltd",
      url: "https://www.websyncdigital.com.ng",
      logo: "https://www.websyncdigital.com.ng/icon.png",
      taxID: "9470161",
      description:
        "Business websites, online stores and custom software with ongoing website support.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+2349111719701",
        contactType: "customer service",
        availableLanguage: "en",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressRegion: "Anambra",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.websyncdigital.com.ng/#website",
      name: "WebSync Digital",
      url: "https://www.websyncdigital.com.ng",
      publisher: { "@id": "https://www.websyncdigital.com.ng/#organization" },
    },
  ],
};
export default function SchemaOrg() {
  return (
    <Script
      id="websync-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
