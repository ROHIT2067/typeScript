import { MongoClient } from "mongodb";

export class MongoConnection {

private static client:MongoClient;

static async connect(){

if(!this.client){

this.client =
new MongoClient(
"mongodb://localhost:27017"
);

await this.client.connect();

console.log(
"Mongo Connected"
);

}

return this.client
.db("inventory_db");

}

}