import {
MongoConnection
}
from "../config/database";

import {
ElectronicsProduct
}
from "../models/Product";

export class InventoryRepository{

async create(
product:
ElectronicsProduct
){

const db =
await MongoConnection
.connect();

await db
.collection(
"products"
)
.insertOne(
product
);

}

async getAll(){

const db =
await MongoConnection
.connect();

const products = await db
.collection(
"products"
)
.find()
.toArray();

return products.map((product: any) => ({
	id: product.id,
	name: product.name,
	price: product.price,
	warranty: product.warranty || 0,
}));

}

async updateProduct(
id:number,
updates:any
){

const db =
await MongoConnection
.connect();

await db
.collection(
"products"
)
.updateOne(

{ id },

{
$set: updates
}

);

}

async delete(
id:number
){

const db =
await MongoConnection
.connect();

await db
.collection(
"products"
)
.deleteOne(
{ id }
);

}

}