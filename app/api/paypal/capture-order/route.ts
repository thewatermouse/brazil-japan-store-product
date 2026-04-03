import { NextResponse } from "next/server";

import { capturePayPalOrder, isPayPalConfigured } from "@/lib/paypal";

export async function POST(request: Request) {
  if (!isPayPalConfigured()) {
    return NextResponse.json({ error: "PayPal is not configured." }, { status: 503 });
  }

  try {
    const payload = (await request.json()) as { orderId?: string };

    if (!payload.orderId) {
      return NextResponse.json({ error: "orderId is required." }, { status: 400 });
    }

    const order = await capturePayPalOrder(payload.orderId);
    return NextResponse.json({ id: order.id, status: order.status });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected PayPal error." },
      { status: 400 }
    );
  }
}
