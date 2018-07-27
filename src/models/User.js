import Immutable from "immutable";

const UserRecord = Immutable.Record({
  name: undefined
});

export default class User extends UserRecord {}
