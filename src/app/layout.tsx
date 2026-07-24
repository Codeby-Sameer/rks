import type { Metadata } from 'next';
import './globals.css';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rksbrainstorm.com'),
  title: {
    default: "RK's Brainstorm | Training • Consulting • Outsourcing",
    template: "%s | RK's Brainstorm",
  },
  description: "RK's Brainstorm is a premier Training, Consulting & Outsourcing organization delivering leadership programs, executive search, finishing school solutions, Q-Tran, and BMS systems across India and global markets.",
  keywords: [
    "RK's Brainstorm",
    "Corporate Training India",
    "Executive Search Consulting",
    "Recruitment Process Outsourcing",
    "Finishing School Programs",
    "Leadership Skills Training",
    "Managerial Skills",
    "Q-Tran App",
    "Business Management System BMS"
  ],
  authors: [{ name: "RK's Brainstorm" }],
  creator: "RK's Brainstorm",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rksbrainstorm.com',
    title: "RK's Brainstorm | Training • Consulting • Outsourcing",
    description: "Impacting qualitative training, executive search & selection, and recruitment process outsourcing for MNCs, corporates, and institutions.",
    siteName: "RK's Brainstorm",
    images: [
      {
        url: '/rkslogo.png',
        width: 1200,
        height: 630,
        alt: "RK's Brainstorm Logo & Brand",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RK's Brainstorm | Training • Consulting • Outsourcing",
    description: "Premier qualitative training, consulting, and workforce outsourcing solutions.",
    images: ['/rkslogo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "RK's Brainstorm",
  url: 'https://www.rksbrainstorm.com',
  logo: 'https://www.rksbrainstorm.com/rkslogo.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8790008824',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-8790008825',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
  ],
  email: 'info@rksbrainstorm.com',
  description: 'RK\'s Brainstorm is a premier Training, Consulting & Outsourcing organization impacting qualitative training programs, finishing schools, executive search, and recruitment process outsourcing.',
  knowsAbout: [
    'Leadership Training',
    'Executive Search & Selection',
    'Recruitment Process Outsourcing',
    'Finishing School Programs',
    'Middle Management Hiring',
    'Q-Tran Training Platform',
    'BMS Business Management System'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-white text-[#2D2D2D]">
        <ScrollRevealInit />
        <AnnouncementBanner />
        <Header />
        <main className="flex-grow">{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
