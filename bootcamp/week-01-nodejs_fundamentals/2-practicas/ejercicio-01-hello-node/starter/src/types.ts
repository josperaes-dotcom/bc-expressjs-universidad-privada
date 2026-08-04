// ============================================
// TYPES — Define las estructuras de datos
// ============================================

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export interface ProductReport {
  totalProducts: number;
  totalValue: number;
  categories: string[];
  lowStockItems: Product[];
}