"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { GA_MEASUREMENT_ID, isAnalyticsEnabled, pageview } from "@/lib/analytics";

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isAnalyticsEnabled) {
      return;
    }

    pageview(pathname);
  }, [pathname]);

  if (!isAnalyticsEnabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
