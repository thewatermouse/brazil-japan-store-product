export type CartLine = {
  slug: string;
  quantity: number;
};

export type CheckoutCustomer = {
  name: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  city: string;
  notes: string;
};

export const emptyCheckoutCustomer: CheckoutCustomer = {
  name: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  postalCode: "",
  city: "",
  notes: ""
};
