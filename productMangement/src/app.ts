import express from "express";
import {
InventoryRepository
}
from "./repository/inventoryRepository";

import {
InventoryService
}
from "./services/inventoryService";

import {
InventoryController
}
from "./controller/inventoryController";

import {
registerInventoryRoutes
}
from "./routes/inventoryRoutes";

async function main(){

try{

const repo=
new InventoryRepository();

const service=
new InventoryService(
repo
);

const controller=
new InventoryController(
service
);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

registerInventoryRoutes(app, controller);

const port = process.env.PORT || 1818;
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});

}
catch(error){

console.log(
error
);

}

}

main();