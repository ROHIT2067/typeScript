"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inventoryRepository_1 = require("./repository/inventoryRepository");
const inventoryService_1 = require("./services/inventoryService");
const inventoryController_1 = require("./controller/inventoryController");
const inventoryRoutes_1 = require("./routes/inventoryRoutes");
async function main() {
    try {
        const repo = new inventoryRepository_1.InventoryRepository();
        const service = new inventoryService_1.InventoryService(repo);
        const controller = new inventoryController_1.InventoryController(service);
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        (0, inventoryRoutes_1.registerInventoryRoutes)(app, controller);
        const port = process.env.PORT || 1818;
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
main();
