import { NextApiRequest, NextApiResponse } from "next";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://skyland:skyland123@cluster0.xvulc.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function categoryRun(req: NextApiRequest, res: NextApiResponse) {
  const { categoryName } = req.query;
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection = await client.db("skyland").collection("products");
    if (req.method === "GET") {
      // Process a POST request
      const data = await productCollection
        .find({ category: categoryName })
        .toArray();
      res.send(data);
    } else {
      // Handle any other HTTP method
    }
  } finally {
    // Ensures that the client will close when you finish/error
  }
}

export default categoryRun;
