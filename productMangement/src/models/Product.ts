

export interface Product {
	id: number;
	name: string;
	price: number;
}

export interface ElectronicsProduct extends Product {
	warranty?: number;
} 

