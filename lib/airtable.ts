import { AirtableRecordType } from "@/types";

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  "appw6HX4VnGoJaOwJ"
);

const table = base("games-store");

export async function findRecordByFilter(id: string) {
  const findRecords = await table
    .select({
      filterByFormula: `id=${id}`,
    })
    .firstPage();

  return findRecords.map((record: AirtableRecordType) => {
    return {
      recordId: record.id,
      ...record.fields,
    };
  });
}

async function createGameStore(id: string) {
  const records = await findRecordByFilter(id);
  if (records.length === 0) {
  }
}
