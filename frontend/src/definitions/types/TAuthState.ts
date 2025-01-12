import {TUser} from "./TUser";

export type TAuthState = {
  user: TUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  role: null | "region_rep" | "fsp_rep"
}