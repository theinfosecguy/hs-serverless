import { MongoClient } from "mongodb";

export default function handler(req, res) {

    if(req.method !== "POST") {
        res.statusCode = 405;
        res.end("Method not allowed");
        return;
    }else{
        const data = req.body;
        const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true });
        client.connect(function(err) {
            if(err) {
                res.statusCode = 500;
                res.end("Internal server error");
                return;
            }
            const db = client.db();
            db.collection("todo").insertOne(data, function(err, result) {
                if(err) {
                    res.statusCode = 500;
                    res.end("Internal server error");
                    return;
                }
                res.statusCode = 200;
                res.json({
                    success: true,
                    message: "Task added successfully"
                });
            });
        });
    }
}