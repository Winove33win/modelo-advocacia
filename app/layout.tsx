import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seuescritorio.com"),
  title: {
    default: "Seu Escritório | Advocacia empresarial de alta performance",
    template: "%s | Seu Escritório",
  },
  description:
    "Consultoria jurídica estratégica para empresas e famílias que buscam segurança e resultados comprovados.",
  keywords: [
    "advocacia",
    "consultoria jurídica",
    "direito empresarial",
    "escritório de advocacia",
  ],
  openGraph: {
    title: "Seu Escritório | Advocacia empresarial de alta performance",
    description:
      "Consultoria jurídica estratégica com 35+ anos de experiência e 95% de êxito em disputas complexas.",
    url: "https://www.seuescritorio.com",
    siteName: "Seu Escritório",
    images: [
      {
        url: "https://www.seuescritorio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipe de advogados em reunião estratégica",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@seuescritorio",
    creator: "@seuescritorio",
    title: "Seu Escritório | Advocacia empresarial de alta performance",
    description:
      "Consultoria jurídica estratégica com 35+ anos de experiência e 95% de êxito em disputas complexas.",
    images: [
      {
        url: "https://www.seuescritorio.com/og-image.jpg",
        alt: "Equipe de advogados em reunião estratégica",
      },
    ],
  },
  alternates: {
    canonical: "https://www.seuescritorio.com",
  },
  category: "Legal",
};

export const viewport: Viewport = {
  themeColor: "#0C1B2A",
  colorScheme: "dark",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona a primeira consulta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A primeira reunião é dedicada a entender o seu caso em profundidade e orientar sobre os próximos passos jurídicos, sem compromisso.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês atendem empresas de quais portes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nossa equipe atua com startups, médias empresas e grupos consolidados que buscam uma assessoria jurídica estratégica.",
      },
    },
    {
      "@type": "Question",
      name: "O escritório atua em outras cidades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos clientes em todo o território nacional, com presença local em São Paulo e rede de parceiros em capitais estratégicas.",
      },
    },
    {
      "@type": "Question",
      name: "Quais são os diferenciais do escritório?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Combinação de equipe multidisciplinar, abordagem preventiva, tecnologia proprietária e mais de 95% de êxito em disputas relevantes.",
      },
    },
    {
      "@type": "Question",
      name: "Como é estruturada a remuneração?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabalhamos com modelos flexíveis que combinam honorários mensais, êxito e pacotes customizados conforme a necessidade.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês oferecem consultoria preventiva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, atuamos na criação de políticas, contratos e governança para reduzir riscos e fortalecer a tomada de decisão.",
      },
    },
  ],
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Seu Escritório",
  url: "https://www.seuescritorio.com",
  logo: "https://www.seuescritorio.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-4000-1234",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["Portuguese", "English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/seuescritorio",
    "https://www.instagram.com/seuescritorio",
  ],
};

const legalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Seu Escritório",
  serviceType: [
    "Direito Empresarial",
    "Direito Civil",
    "Consultoria Jurídica",
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Brasil",
  },
  provider: {
    "@type": "Organization",
    name: "Seu Escritório",
  },
  hasCredential: "OAB/SP 12345",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paulista, 1000",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01310-100",
    addressCountry: "BR",
  },
};

const reviewsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Camila Andrade",
      },
      reviewBody:
        "Excelência técnica e atenção constante. Conseguimos encerrar uma disputa societária complexa com total segurança.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LegalService",
        name: "Consultoria Societária",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Fernando Lima",
      },
      reviewBody:
        "Equipe extremamente preparada e disponível. A atuação preventiva reduziu drasticamente nossos passivos trabalhistas.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LegalService",
        name: "Direito Trabalhista",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Juliana Costa",
      },
      reviewBody:
        "Transparência em cada etapa e comunicação impecável. Recomendo para quem precisa de apoio estratégico.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LegalService",
        name: "Direito Empresarial",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = [
    organizationStructuredData,
    legalServiceStructuredData,
    faqStructuredData,
    reviewsStructuredData,
  ];

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        {children}
        {structuredData.map((schema, index) => (
          <Script
            key={index}
            id={`schema-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </body>
    </html>
  );
}
