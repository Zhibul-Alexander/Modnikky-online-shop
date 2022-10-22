export default interface Catalog {
  id: string;
  type: string;
  name: string;
  price: {
    currency: string;
    value: string;
  },
  color: {
    name: string;
    hex: string;
  },
  availableSizes: string[];
  description: string;
  images: string[];
}
