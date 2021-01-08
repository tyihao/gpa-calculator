import * as A from "./actions";
import { getType } from "typesafe-actions";
import produce from "immer";
import { defaultState } from "./defaults";
import AllActions from "../rootAction";

export default (state = defaultState, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.updateSkills):
        draft.skills = action.payload;
        break;
    }
  });
