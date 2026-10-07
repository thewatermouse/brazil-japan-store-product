export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export const isAnalyticsEnabled = Boolean(GA_MEASUREMENT_ID);
export const isPixelEnabled = Boolean(META_PIXEL_ID);

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function gaEvent(name: string, params: Record<string, unknown>) {
  if (!isAnalyticsEnabled || typeof window === "undefined" || !window.gtag) {
    return;
  }
  window.gtag("event", name, params);
}

function pixelTrack(event: string, params: Record<string, unknown> = {}) {
  if (!isPixelEnabled || typeof window === "undefined" || !window.fbq) {
    return;
  }
  window.fbq("track", event, params);
}

export function pageview(url: string) {
  if (isAnalyticsEnabled && typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
  }
}

export function pixelPageview() {
  pixelTrack("PageView");
}

// Generic GA event. If it maps to a Meta standard event, fires that too.
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  gaEvent(name, params);

  if (name === "generate_lead") {
    pixelTrack("Lead", {
      value: params.value,
      currency: params.currency ?? "JPY"
    });
  }
}

export type PurchaseItem = {
  item_id: string;
  item_name: string;
  quantity: number;
  price: number;
};

export function trackViewContent(input: {
  itemId: string;
  itemName: string;
  value: number;
  currency?: string;
}) {
  const currency = input.currency ?? "JPY";
  gaEvent("view_item", {
    currency,
    value: input.value,
    items: [{ item_id: input.itemId, item_name: input.itemName, price: input.value }]
  });
  pixelTrack("ViewContent", {
    content_ids: [input.itemId],
    content_name: input.itemName,
    content_type: "product",
    value: input.value,
    currency
  });
}

export function trackPurchase(input: {
  transactionId: string;
  value: number;
  shipping?: number;
  currency?: string;
  items: PurchaseItem[];
}) {
  const currency = input.currency ?? "JPY";
  gaEvent("purchase", {
    transaction_id: input.transactionId,
    value: input.value,
    shipping: input.shipping ?? 0,
    currency,
    items: input.items
  });
  pixelTrack("Purchase", {
    value: input.value,
    currency,
    content_type: "product",
    contents: input.items.map((item) => ({ id: item.item_id, quantity: item.quantity }))
  });
}
