"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const mongodb_1 = require("mongodb");
class MongoConnection {
    static async connect() {
        if (!this.client) {
            this.client =
                new mongodb_1.MongoClient("mongodb://localhost:27017");
            await this.client.connect();
            console.log("Mongo Connected");
        }
        return this.client
            .db("inventory_db");
    }
}
exports.MongoConnection = MongoConnection;
