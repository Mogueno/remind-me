export const QuotesSchema = {
  name: 'Quotes',
  properties: {
    _id: 'objectId',
    title: 'string',
    author: 'string',
    quoteMaker: 'string[]',
  },
  primaryKey: '_id',
};
