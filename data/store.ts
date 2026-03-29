export const storeContact = {
  email: "rodrigokato@gmail.com",
  whatsappNumber: ""
} as const;

export const shippingEstimateTiers = [
  { maxWeightGrams: 250, estimatedYen: 1800 },
  { maxWeightGrams: 500, estimatedYen: 2600 },
  { maxWeightGrams: 1000, estimatedYen: 4200 },
  { maxWeightGrams: 2000, estimatedYen: 6800 }
] as const;
