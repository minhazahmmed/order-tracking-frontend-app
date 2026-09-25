// Ordered list of the 4 statuses the app currently supports.
export const ORDER_STATUS_STEPS = [
  { key: "processing", label: "Processing" },
  { key: "shipped", label: "Shipped" },
  { key: "out_for_delivery", label: "Out for Delivery" },
  { key: "delivered", label: "Delivered" },
];

const now = new Date();
const hoursFromNow = (h) => new Date(now.getTime() + h * 60 * 60 * 1000).toISOString();
const hoursAgo = (h) => new Date(now.getTime() - h * 60 * 60 * 1000).toISOString();

// Every order shares the same shape so components never branch on structure,
// only on the "scenario" field.
export const mockOrders = {
  // 1) Normal / happy path — currently out for delivery, on schedule.
  "ORD-1001": {
    id: "ORD-1001",
    scenario: "normal",
    status: "out_for_delivery",
    placedAt: hoursAgo(30),
    estimatedDelivery: hoursFromNow(3),
    deliveredAt: null,
    trackingAvailable: true,
    stepTimestamps: {
      processing: hoursAgo(30),
      shipped: hoursAgo(20),
      out_for_delivery: hoursAgo(1),
      delivered: null,
    },
    items: [
      { id: 1, name: "Wireless Headphones", qty: 1, price: 59.99 },
      { id: 2, name: "USB-C Cable (2m)", qty: 2, price: 8.5 },
    ],
    shippingAddress: "House 12, Road 4, Chattogram, Bangladesh",
    paymentMethod: "Cash on Delivery",
    support: { phone: "+880 1234-567890", email: "support@shopfast.com" },
  },

  // 2) Delayed order — estimated time has already passed.
  "ORD-1002": {
    id: "ORD-1002",
    scenario: "delayed",
    status: "out_for_delivery",
    placedAt: hoursAgo(50),
    estimatedDelivery: hoursAgo(6), // in the past -> delayed
    deliveredAt: null,
    trackingAvailable: true,
    stepTimestamps: {
      processing: hoursAgo(50),
      shipped: hoursAgo(40),
      out_for_delivery: hoursAgo(18),
      delivered: null,
    },
    items: [{ id: 1, name: "Mechanical Keyboard", qty: 1, price: 74.0 }],
    shippingAddress: "Flat 3B, Agrabad, Chattogram, Bangladesh",
    paymentMethod: "Visa **** 4821",
    support: { phone: "+880 1234-567890", email: "support@shopfast.com" },
  },

  // 3) Delivered, but the customer says they never received it.
  "ORD-1003": {
    id: "ORD-1003",
    scenario: "not_received",
    status: "delivered",
    placedAt: hoursAgo(80),
    estimatedDelivery: hoursAgo(10),
    deliveredAt: hoursAgo(9),
    trackingAvailable: true,
    stepTimestamps: {
      processing: hoursAgo(80),
      shipped: hoursAgo(60),
      out_for_delivery: hoursAgo(11),
      delivered: hoursAgo(9),
    },
    items: [
      { id: 1, name: "Desk Lamp", qty: 1, price: 22.99 },
      { id: 2, name: "Notebook Set", qty: 3, price: 4.25 },
    ],
    shippingAddress: "House 7, GEC Circle, Chattogram, Bangladesh",
    paymentMethod: "bKash",
    support: { phone: "+880 1234-567890", email: "support@shopfast.com" },
  },

  // 4) Tracking not available yet — order exists but has no tracking info.
  "ORD-1004": {
    id: "ORD-1004",
    scenario: "tracking_unavailable",
    status: "processing",
    placedAt: hoursAgo(1),
    estimatedDelivery: null,
    deliveredAt: null,
    trackingAvailable: false,
    stepTimestamps: {
      processing: hoursAgo(1),
      shipped: null,
      out_for_delivery: null,
      delivered: null,
    },
    items: [{ id: 1, name: "Bluetooth Speaker", qty: 1, price: 39.99 }],
    shippingAddress: "House 9, Khulshi, Chattogram, Bangladesh",
    paymentMethod: "Cash on Delivery",
    support: { phone: "+880 1234-567890", email: "support@shopfast.com" },
  },
};

export const mockOrderIds = Object.keys(mockOrders);
