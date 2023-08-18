import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata: Metadata = {
  title: "Bagisoft",
  description: "İnternetin son teknolojisi",
  icons: {
    icon: {
      url: "/bagisoftnobacklogo.png",
      type: "image/png",
    },

  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" min-h-screen font-firstFont  p-0 m-0 box-border">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
