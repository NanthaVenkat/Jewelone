import Script from "next/script";

const GoogleAdsTag = () => {
    return (
        <>
            {/* Load gtag library */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-16800934630"
                strategy="afterInteractive"
            />

            {/* Init gtag */}
            <Script id="google-ads-gtag" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16800934630');
        `}
            </Script>

            {/* Conversion event (fires once on page load) */}
            <Script id="google-ads-conversion" strategy="afterInteractive">
                {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': 'AW-16800934630/PIULCObtu94bEObVp8s-'
            });
          }
        `}
            </Script>
        </>
    );
};

export default GoogleAdsTag;
