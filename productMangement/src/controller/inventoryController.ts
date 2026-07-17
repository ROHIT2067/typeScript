import { Express, Request, Response } from "express";
import {
InventoryService
}
from "../services/inventoryService";

export class InventoryController{

constructor(
private service:
InventoryService
){}

async createProduct(req: Request, res: Response){
	try{
		const raw = req.body;
		console.log("Raw body:", raw);

		
		let payload: any = raw;
		if (Array.isArray(raw)){
			if (raw.length === 0){
				return res.status(400).json({ message: "Empty product array" });
			}
			payload = raw[0];
		}

		let { id, name, price, warranty } = payload || {};


		// Coerce numeric strings to numbers (common when coming from forms)
		if (typeof id === 'string' && id.trim() !== '') id = Number(id);
		if (typeof price === 'string' && price.trim() !== '') price = Number(price);

		// Handle optional warranty: default to 0 when not provided or empty
		if (warranty === undefined || warranty === null || (typeof warranty === 'string' && warranty.trim() === '')){
			warranty = 0;
		} else if (typeof warranty === 'string' && warranty.trim() !== ''){
			warranty = Number(warranty);
		}

		console.log(id, name, price, warranty, typeof id, typeof price, typeof warranty);

		if (
			typeof id !== "number" || Number.isNaN(id) ||
			typeof name !== "string" ||
			typeof price !== "number" || Number.isNaN(price) ||
			typeof warranty !== "number" || Number.isNaN(warranty)
		){
			return res.status(400).json({ message: "Invalid product payload" });
		}

		await this.service.createProduct(id, name, price, warranty);

		return res.status(201).json({
			message: "Product created successfully",
			product: { id, name, price, warranty },
		});
	}
	catch(error){
		return res.status(500).json({
			message: "Failed to create product",
			error: error instanceof Error ? error.message : String(error),
		});
	}
}

async getProducts(_req: Request, res: Response){
try{
const products = await this.service.getProducts();
return res.status(200).json(products);
}
catch(error){
return res.status(500).json({
message: "Failed to fetch products",
error: error instanceof Error ? error.message : String(error),
});
}
}

async updateProduct(req: Request, res: Response){
try{
const id = Number(req.params.id);
const { name, price, warranty } = req.body;

if (Number.isNaN(id)){
return res.status(400).json({ message: "Invalid id" });
}

// Coerce numeric strings to numbers
let updatedPrice = price;
let updatedWarranty = warranty;
if (typeof price === 'string' && price.trim() !== '') updatedPrice = Number(price);
if (typeof warranty === 'string' && warranty.trim() !== '') updatedWarranty = Number(warranty);

// Validate provided fields
if (updatedPrice !== undefined && (typeof updatedPrice !== "number" || Number.isNaN(updatedPrice))){
return res.status(400).json({ message: "Invalid price" });
}
if (name !== undefined && typeof name !== "string"){
return res.status(400).json({ message: "Invalid name" });
}
if (updatedWarranty !== undefined && (typeof updatedWarranty !== "number" || Number.isNaN(updatedWarranty))){
return res.status(400).json({ message: "Invalid warranty" });
}

const updates: any = {};
if (name !== undefined) updates.name = name;
if (updatedPrice !== undefined) updates.price = updatedPrice;
if (updatedWarranty !== undefined) updates.warranty = updatedWarranty;

if (Object.keys(updates).length === 0){
return res.status(400).json({ message: "No fields to update" });
}

await this.service.updateProduct(id, updates);
return res.status(200).json({ message: "Product updated successfully" });
}
catch(error){
return res.status(500).json({
message: "Failed to update product",
error: error instanceof Error ? error.message : String(error),
});
}
}

async deleteProduct(req: Request, res: Response){
try{
const id = Number(req.params.id);

if (Number.isNaN(id)){
return res.status(400).json({ message: "Invalid id" });
}

await this.service.delete(id);
return res.status(200).json({ message: "Product deleted successfully" });
}
catch(error){
return res.status(500).json({
message: "Failed to delete product",
error: error instanceof Error ? error.message : String(error),
});
}
}

}