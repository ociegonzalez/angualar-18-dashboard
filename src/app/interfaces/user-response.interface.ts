import { ISuppot, IUser } from "./users.interface";

export interface ISingleUserResponse {
  data: IUser;
  support: ISuppot;
}
