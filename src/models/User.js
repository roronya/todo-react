import Immutable from "immutable";

const UserRecord = Immutable.Record({
  id: undefined,
  name: undefined
});

export default class User extends UserRecord {}
