import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - CallGauge',
    default: 'CallGauge - Track Every Call',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        {/*<link*/}
        {/*  rel="alternate"*/}
        {/*  type="application/rss+xml"*/}
        {/*  title="The Radiant Blog"*/}
        {/*  href="/blogss/feed.xml"*/}
        {/*/>*/}
        <link
          rel="icon"
          href="/favicon.ico?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
