import { ServerApiVersion, MongoClient } from 'mongodb'
import dotenv from "dotenv"
dotenv.config()


const uri = process.env.MONGO;
const mongo = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	},
});

const connect = async () => {
	try {
		await mongo.connect();
		await mongo.db("webware").command({ping: 1});
		console.log("Pinged db");
	} catch (err) {
		console.log(err);
	}
}

const database = () => {
	return mongo.db("webware");
}

export { connect as default, database };
