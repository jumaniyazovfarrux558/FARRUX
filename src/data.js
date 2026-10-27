const BASE_PRODUCTS = [
  { id: "456587", name: "Maggi", price: 430, qty: 43, unit: "Packets", threshold: 12, expiry: "11/12/22", status: "In- stock", category: "Instant food" },
  { id: "456588", name: "Bru", price: 257, qty: 22, unit: "Packets", threshold: 12, expiry: "21/12/22", status: "Out of stock", category: "Beverages" },
  { id: "456589", name: "Red Bull", price: 405, qty: 36, unit: "Packets", threshold: 9, expiry: "5/12/22", status: "In- stock", category: "Beverages" },
  { id: "456590", name: "Bourn Vita", price: 502, qty: 14, unit: "Packets", threshold: 6, expiry: "8/12/22", status: "Out of stock", category: "Beverages" },
  { id: "456591", name: "Horlicks", price: 530, qty: 5, unit: "Packets", threshold: 5, expiry: "9/1/23", status: "In- stock", category: "Beverages" },
  { id: "456592", name: "Harpic", price: 605, qty: 10, unit: "Packets", threshold: 5, expiry: "9/1/23", status: "In- stock", category: "Household" },
  { id: "456593", name: "Ariel", price: 408, qty: 23, unit: "Packets", threshold: 7, expiry: "15/12/23", status: "Out of stock", category: "Household" },
  { id: "456594", name: "Scotch Brite", price: 359, qty: 43, unit: "Packets", threshold: 8, expiry: "6/6/23", status: "In- stock", category: "Household" },
  { id: "456595", name: "Coca cola", price: 205, qty: 41, unit: "Packets", threshold: 10, expiry: "11/11/22", status: "Low stock", category: "Beverages" },
];

// 9 ta asosiy mahsulot + 81 ta qo'shimcha = 90 ta (10 sahifa, har sahifada 9 tadan)
const EXTRA_PRODUCTS = Array.from({ length: 81 }, (_, k) => {
  const i = k + 9;
  const base = BASE_PRODUCTS[i % 9];
  const qty = 3 + ((i * 7) % 45);
  const threshold = 4 + ((i * 5) % 10);
  return {
    ...base,
    id: String(456587 + i),
    price: base.price + ((i * 37) % 90) - 40,
    qty,
    threshold,
    expiry: `${1 + ((i * 3) % 28)}/${1 + (i % 12)}/23`,
    status: i % 5 === 0 ? "Out of stock" : qty <= threshold + 2 ? "Low stock" : "In- stock",
  };
});

export const INITIAL_PRODUCTS = [...BASE_PRODUCTS, ...EXTRA_PRODUCTS];
export const PAGE_SIZE = 9;

export const DETAIL_OVERRIDES = {
  "456587": { expiry: "13/4/23", opening: 40, remaining: 34, onTheWay: 15, threshold: 12 },
};

export const STORES = [
  { name: "Sulur Branch", stock: 15 },
  { name: "Singanallur Branch", stock: 19 },
];

export const SUPPLIER = { name: "Ronald Martin", contact: "98789 86757" };

export const NAV = [
  { key: "dashboard", label: "Dashbord", icon: "home" },
  { key: "inventory", label: "Inventory", icon: "inventory" },
  { key: "reports", label: "Reports", icon: "reports" },
  { key: "suppliers", label: "Suppliers", icon: "suppliers" },
  { key: "orders", label: "Orders", icon: "orders" },
  { key: "store", label: "Manage Store", icon: "store" },
];
