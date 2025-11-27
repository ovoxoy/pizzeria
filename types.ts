export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface CartItem extends MenuItem {
  qty: number;
}

export interface Category {
  id: string;
  label: string;
  items: MenuItem[];
}

export type PaymentMethod = 'cash' | 'paypal';

export interface OrderDetails {
  name: string;
  address: string;
  note: string;
  paymentMethod: PaymentMethod;
}