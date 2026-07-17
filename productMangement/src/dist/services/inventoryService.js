"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
class InventoryService {
    constructor(repo) {
        this.repo = repo;
    }
    async createProduct(id, name, price, warranty) {
        try {
            const product = {
                id,
                name,
                price,
                warranty,
            };
            await this.repo.create(product);
        }
        catch (error) {
            throw Error("Create failed");
        }
    }
    async getProducts() {
        return await this.repo
            .getAll();
    }
    async updateProduct(id, updates) {
        await this.repo
            .updateProduct(id, updates);
    }
    async delete(id) {
        await this.repo
            .delete(id);
    }
}
exports.InventoryService = InventoryService;
