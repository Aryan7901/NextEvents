import { MongoClient } from "mongodb";
async function handler(req, res) {
  const eventId = req.query.eventId;
  let client, db;
  try {
    client = await MongoClient.connect(process.env.DB);
    db = client.db();
  } catch (err) {
    res.status(422).json({ message: err.message });
    client.close();
    return;
  }
  if (req.method === "POST") {
    const { email, name, text } = JSON.parse(req.body);
    console.log(email, name, text);
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input!" });
      client.close();
      return;
    }

    try {
      const newComment = {
        email,
        name,
        text,
        eventId,
      };
      const result = await db.collection("comments").insertOne(newComment);
      newComment.id = result._id;
      res.status(201).json(newComment);
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
    client.close();
    return;
  }
  if (req.method == "GET") {
    try {
      const comments = await db
        .collection("comments")
        .find({ eventId: eventId })
        .sort({ _id: -1 })
        .toArray();

      res.status(200).json(comments);
      client.close();
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
    client.close();
  }
}
export default handler;
