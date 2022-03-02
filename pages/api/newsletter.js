import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address!" });
      return;
    }
    let client, db;
    try {
      client = await MongoClient.connect(process.env.DB);
      db = client.db();
    } catch (err) {
      res.status(422).json({ message: err.message });
      client.close();
      return;
    }
    try {
      const email = await db
        .collection("registeredEmails")
        .findOne({ email: userEmail });

      if (email === null) {
        await db.collection("registeredEmails").insertOne({ email: userEmail });
        client.close();
        res.status(201).json({ message: "Signed Up!" });
      } else {
        throw new Error("You have already Signed Up!");
      }
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
    client.close();
    return;
  } else {
    res.json({ message: "Heyyyy" });
  }
}
export default handler;
