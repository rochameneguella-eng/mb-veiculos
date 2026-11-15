export type VehicleCategory = "todos" | "suv" | "sedan" | "hatch" | "picape" | "premium";

export interface Vehicle {
  id: string;
  title: string;
  version: string;
  category: VehicleCategory;
  brand: string;
  yearModel: string; // e.g. "2023/2023"
  km: number;
  transmission: "Automático" | "Manual" | "CVT";
  fuel: "Flex" | "Gasolina" | "Diesel" | "Híbrido" | "Elétrico";
  price: number;
  monthlyEstimate: number;
  plateEnd: string;
  color: string;
  engine: string;
  doors: number;
  featuredImage: string;
  gallery: string[];
  badges: string[];
  highlight: string;
  features: string[];
}
