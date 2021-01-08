import { OptAction } from "./optimise";
import { ActionType } from "typesafe-actions";

type AllActions = ActionType<typeof OptAction>;

export default AllActions;
