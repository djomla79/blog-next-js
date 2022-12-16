import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.fdy8bdl.mongodb.net/?retryWrites=true&w=majority`;

export async function connectToMongoDB() {
  return await MongoClient.connect(connectionString);
}

export async function insertDocument(client, database, collection, document) {
  const db = client.db(database);
  return await db.collection(collection).insertOne(document);
}
