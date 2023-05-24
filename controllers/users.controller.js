const userCollection = require("../mongodb");

exports.getAllUser = async () => {
  const query = {};
  const cursor = userCollection.find(query);
  const users = await cursor.toArray();
  res.send(users);
};

exports.getUserByPhone = async (req, res) => {
  const { phone } = req.params;
  const query = { phone: phone };
  const cursor = userCollection.find(query);
  const users = await cursor.toArray();
  res.send(users);
};

exports.getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const query = { email: email };
  const cursor = userCollection.find(query);
  const users = await cursor.toArray();
  res.send(users);
};

exports.postNewUser = async (req, res) => {
  const user = req.body;
  const result = await userCollection.insertOne(user);
  res.send(result);
};
