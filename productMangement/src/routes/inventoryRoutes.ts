import { Express, Request, Response } from "express";
import { InventoryController } from "../controller/inventoryController";

export function registerInventoryRoutes(
  app: Express,
  controller: InventoryController
) {
  app.post(
    "/products",
    controller.createProduct.bind(controller)
  );

  app.get(
    "/products",
    controller.getProducts.bind(controller)
  );

  app.put(
    "/products/:id",
    controller.updateProduct.bind(controller)
  );

  app.delete(
    "/products/:id",
    controller.deleteProduct.bind(controller)
  );
}
