export type GameStoreType = {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
  voting: number;
};

export type MapboxType = {
  id: string;
  properties: {
    address: string;
  };
  text: string;
};

export type AirtableRecordType = {
  id: string;
  recordId: string;
  fields: GameStoreType;
};

export type ServerParamsType = {
  params: { id: string };
  searchParams: { id: string };
};
