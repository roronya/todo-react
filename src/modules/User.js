import User from "../models/User";

const initialState = {
  users: [
    new User({ id: 0, name: "hoshimiya" }),
    new User({ id: 1, name: "kiriya" }),
    new User({ id: 2, name: "shibuki" })
  ]
};

export default (state = initialState, action) => {
  return state;
};
