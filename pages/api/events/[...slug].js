import { eventsSearch } from "../_utils";
export default async function filterByDate(req, res) {
  if (req.method === "GET") {
    const filterData = req.query.slug;
    const year = +filterData[0];
    const month = +filterData[1];
    if (
      isNaN(year) ||
      isNaN(month) ||
      year > 2030 ||
      year < 2021 ||
      month < 1 ||
      month > 12
    ) {
      return res.status(422).json({ message: "Invalid Inputs" });
    }
    let regExp;
    if (month < 10) regExp = `^${year}-0${month}`;
    else regExp = `^${year}-${month}`;
    const filteredEvents = await eventsSearch({ date: new RegExp(regExp) });
    if (typeof filteredEvents === "string")
      return res.status(422).json({ message: filteredEvents });
    else return res.json(filteredEvents);
  }
}
