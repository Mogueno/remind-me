export const LibrarySchema = {
  name: 'Library',
  properties: {
    _id: 'objectId',
    quotes: 'Quotes[]',
  },
  assignee: {
    type: 'linkingObjects',
    objectType: 'User',
    property: 'library',
  },
  primaryKey: '_id',
};
