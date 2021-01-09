import { ScoreAction } from "./scores";
import { ActionType } from "typesafe-actions";

type AllActions = ActionType<typeof ScoreAction>;

export default AllActions;
