import {
InventoryRepository
}
from "../repository/inventoryRepository";

import {
ElectronicsProduct
}
from "../models/Product";

export class InventoryService{

constructor(

private repo:
InventoryRepository

){}

async createProduct(
id:number,
name:string,
price:number,
warranty:number
){

try{

const product: ElectronicsProduct = {
	id,
	name,
	price,
	warranty,
};

await this.repo.create(product);

}
catch(error){

throw Error(
"Create failed"
);

}

}

async getProducts(){

return await this.repo
.getAll();

}

async updateProduct(
id:number,
updates:any
){

await this.repo
.updateProduct(
id,
updates
);

}

async delete(
id:number
){

await this.repo
.delete(
id
);

}

}