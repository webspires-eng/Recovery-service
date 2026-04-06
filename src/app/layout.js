import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Breakdown Recovery - ABZ Recovery Service",
  description: "Arrive in less than 15 mins",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rubik.className} h-full antialiased`}
    >
      <head>
        {/* Google Analytics & Ads Global Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16752004182"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16752004182');

              window.gtag_report_conversion = function(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-16752004182/pDAvCPKt-ZYcENaY_bM-',
                    'value': 1.0,
                    'currency': 'GBP',
                    'event_callback': callback
                });
                return false;
              };
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
              })(document);
              smartlook('init', '8c98766d5ea81fbc70c12433b0f2cb67361ccd36', { region: 'eu' });
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
