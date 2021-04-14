import Sparow from "api/Sparow";
import { isEmptyString } from "utils";

export default class Profile {
  public id: string;
  public username: string;
  public first_name: string;
  public last_name: string;
  public phone: string;
  public email: string;
  public phone_is_verified: boolean;
  public email_is_verified: boolean;
  public avatar: string;
  public uploaded_avatar: boolean;

  constructor(data: IProfile, private sparow: Sparow) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.username = data.username;
    this.phone = data.phone.number;
    this.email = data.email.address;
    this.phone_is_verified = data.phone.verified;
    this.email_is_verified = data.email.verified;
    this.avatar = data.avatar;
    this.uploaded_avatar = data.uploaded_avatar;
  }
  /**
   * getter functions. these methods check if the requested property was not found
   * then return an HR string
   */
  public getfullName(): string {
    const parts = [];
    if (!isEmptyString(this.first_name)) parts.push(this.first_name);
    if (!isEmptyString(this.last_name)) parts.push(this.last_name);
    if (parts.length === 0) return "not defined";
    return parts.join(" ");
  }

  public getUsername(): string {
    if (isEmptyString(this.username)) {
      return "not defined";
    }
    return this.username;
  }

  public getEmail(): string {
    if (isEmptyString(this.email)) {
      return "not defined";
    }
    if (this.email_is_verified) return `${this.email} (verified)`;
    return this.email;
  }

  public getPhone(): string {
    if (isEmptyString(this.phone)) {
      return "not defined";
    }
    if (this.phone_is_verified) return `${this.phone} (verified)`;
    return this.phone;
  }

  public jsonObject(): IProfile {
    return {
      id: this.id,
      username: this.username,
      first_name: this.first_name,
      last_name: this.last_name,
      email: {
        address: this.email,
        verified: this.email_is_verified,
      },
      phone: {
        number: this.phone,
        verified: this.phone_is_verified,
      },
      avatar: this.avatar,
      uploaded_avatar: this.uploaded_avatar,
    };
  }
}
