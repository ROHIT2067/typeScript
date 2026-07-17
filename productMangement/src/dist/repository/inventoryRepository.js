"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRepository = void 0;
const database_1 = require("../config/database");
class InventoryRepository {
    async create(product) {
        const db = await database_1.MongoConnection
            .connect();
        await db
            .collection("products")
            .insertOne(product);
    }
    async getAll() {
        const db = await database_1.MongoConnection
            .connect();
        const products = await db
            .collection("products")
            .find()
            .toArray();
        return products.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            warranty: product.warranty || 0,
        }));
    }
    async updateProduct(id, updates) {
        const db = await database_1.MongoConnection
            .connect();
        await db
            .collection("products")
            .updateOne({ id }, {
            $set: updates
        });
    }
    async delete(id) {
        const db = await database_1.MongoConnection
            .connect();
        await db
            .collection("products")
            .deleteOne({ id });
    }
}
exports.InventoryRepository = InventoryRepository;
