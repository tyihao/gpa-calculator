import * as T from "@/feature/optimise/types";

export const defaultState: T.Store = {
  status: {
    optimization: "SUCCESS",
    meta: "SUCCESS",
  },
  skills: ["Python", "Jupyter", "R", "SQL", "AWS"],
};
