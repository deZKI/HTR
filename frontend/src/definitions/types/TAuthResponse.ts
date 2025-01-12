import {TUserRoles} from "@/definitions/types/TUserRoles";
import {TUser} from "./TUser";

export type TAuthResponse = {
  user: TUser;
  access: string;
  refresh: string;
  role: TUserRoles;
}