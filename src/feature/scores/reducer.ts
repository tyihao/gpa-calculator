import * as A from "./actions";
import {getType} from "typesafe-actions";
import produce from "immer";
import {defaultState} from "./defaults";
import AllActions from "../rootAction";

export default (state = defaultState, action: AllActions) =>
    produce(state, (draft) => {
        switch (action.type) {
            case getType(A.updateCredits):
                const moduleNumber = action.payload[0];
                const credit = action.payload[1];
                draft.totalCredits[moduleNumber] = credit;
                break;
            case getType(A.updateGPA):
                const modNum = action.payload[0];
                const moduleCredit = action.payload[1];
                draft.cumulativeTotalGPA[modNum] = moduleCredit;
                break;
        }
    });
