import { OptType } from "@/feature/optimise";
import { LoginState } from './account/types'

export type RootState = {
  opt: OptType.Store,
  login: LoginState,
};
