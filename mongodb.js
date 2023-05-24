const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://defaultUsername:lkD21yKbQvrE5mbH@cluster0.gw0op.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const userCollection = client.db("Rentaxo").collection("users");

module.exports = userCollection;
