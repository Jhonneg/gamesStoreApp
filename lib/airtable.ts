import { Record } from "airtable";

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  "appw6HX4VnGoJaOwJ"
);

const table = base("games-store");

async function findRecordByFilter(id: string) {
  const findRecords = await table
    .select({
      filterByFormula: `id=${id}`,
    })
    .firstPage();

  const allRecords = findRecords.map((record) => {
    return record;
  });
  console.log({ allRecords });
}
