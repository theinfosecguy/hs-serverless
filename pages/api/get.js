import { MongoClient } from "mongodb";

export default function handler(req, res) {
  if(req.method !== "GET") {
    res.statusCode = 405;
    res.end("Method not allowed");
    return;
  } else {
    const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true });
    client.connect(function(err) {
      if(err) {
        res.statusCode = 500;
        res.end("Internal server error");
        return;
      }
      const db = client.db();
      db.collection("todo").find({}).toArray(function(err, result) {
        if(err) {
          res.statusCode = 500;
          res.end("Internal server error");
          return;
        }
        res.statusCode = 200;
        res.json(result);
      });
    });
  }
}