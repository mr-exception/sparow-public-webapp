import Sparow from "api/Sparow";
import Profile from "./Profile";
import { IAuthProfile } from "./profile";

export default class AuthProfile extends Profile {
  public access_token: string;
  public expires_at: Date;

  constructor(data: IAuthProfile, sparow: Sparow) {
    super(data, sparow);
    this.access_token = data.access_token;
    this.expires_at = new Date(data.expires_at);
  }
}
