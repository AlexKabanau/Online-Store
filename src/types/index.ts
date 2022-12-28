interface ProductItemData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
type CallBackType<T> = (data: T) => void;
type TProductsItemData = ProductItemData[];

export { ProductItemData, CallBackType, TProductsItemData };
