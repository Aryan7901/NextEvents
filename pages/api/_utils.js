import { MongoClient, ObjectId } from "mongodb";
export async function eventsSearch(query) {
  let client;
  let events;
  try {
    client = await MongoClient.connect(process.env.DB);
    const db = client.db();

    events = await db
      .collection("events")
      .find(query)
      .sort({ _id: -1 })
      .toArray();
    for (let event of events) {
      event._id = event._id.toHexString();
    }

    client.close();
  } catch (err) {
    console.log(err.message);
    client.close();
  }
  return events;
}
