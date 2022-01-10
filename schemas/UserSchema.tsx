export const UserSchema = {
  name: 'User',
  properties: {
    _id: 'objectId',
    name: 'string',
    email: 'string',
    library: 'Library[]',
  },
  primaryKey: '_id',
};
