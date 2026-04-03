import { NextResponse } from "next/server";

import { createPayPalOrder, isPayPalConfigured, normalizeCheckoutPayload } from "@/lib/paypal";

export async function POST(request: Request) {
  if (!isPayPalConfigured()) {
    return NextResponse.json({ error: "PayPal is not configured." }, { status: 503 });
  }

  try {
    const payload = await request.json();
    const checkout = normalizeCheckoutPayload(payload);
    const order = await createPayPalOrder(checkout);

    return NextResponse.json({ id: order.id, status: order.status });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected PayPal error." },
      { status: 400 }
    );
  }
}
