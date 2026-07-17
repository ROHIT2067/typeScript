"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInventoryRoutes = registerInventoryRoutes;
function registerInventoryRoutes(app, controller) {
    app.post("/products", controller.createProduct.bind(controller));
    app.get("/products", controller.getProducts.bind(controller));
    app.put("/products/:id", controller.updateProduct.bind(controller));
    app.delete("/products/:id", controller.deleteProduct.bind(controller));
}
