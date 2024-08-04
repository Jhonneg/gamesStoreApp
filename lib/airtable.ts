import { AirtableRecordType, GameStoreType } from "@/types";

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  "appw6HX4VnGoJaOwJ"
);
const table = base("games-store");

export function getMinifiedRecords(records: Array<AirtableRecordType>) {
  return records.map((record: AirtableRecordType) => {
    return {
      recordId: record.id,
      ...record.fields,
    };
  });
}

export async function findRecordByFilter(id: string) {
  const findRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getMinifiedRecords(findRecords);
}

export async function createGameStore(gameStore: GameStoreType, id: string) {
  const { name, address, voting = 0, imgUrl } = gameStore;

  try {
    if (id) {
      const records = await findRecordByFilter(id);
      if (records.length === 0) {
        const createRecords = await table.create([
          {
            fields: {
              id,
              name,
              address,
              voting,
              imgUrl,
            },
          },
        ]);
        console.log({ createRecords });
        return getMinifiedRecords(createRecords);
      } else {
        console.log("Game store exists");
        return records;
      }
    } else {
      console.error("Store id is missing");
    }
  } catch (err) {
    console.error("Error creating or findind a store", err);
  }
}

export async function updateGameStore(id: string) {
  try {
    if (id) {
      const records = await findRecordByFilter(id);
      if (records.length !== 0) {
        const record = records[0];
        const updatedVoting = record.voting + 1;
        const updateRecords = await table.update([
          {
            id: record.recordId,
            fields: {
              voting: updatedVoting,
            },
          },
        ]);
        console.log({ updateRecords });
        return getMinifiedRecords(updateRecords);
      } else {
        console.log("Game store does not exist");
      }
    } else {
      console.error("Store id is missing");
    }
  } catch (err) {
    console.error("Error updating game store", err);
  }
}
