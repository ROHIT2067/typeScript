

export interface Product {
	id: number;
	name: string;
	price: number;
}		//abstraction

export interface ElectronicsProduct extends Product {
	warranty?: number;
} 		//inheritance

