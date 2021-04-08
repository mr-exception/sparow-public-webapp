import Sparow from "../Sparow";
import Application from "../applications/Application";
import { IRedirectUrl } from "../interfaces/redirect_url";

export default class RedirectUrl {
  public id: string;
  public application: Application;
  public url: string;
  constructor(redirect_url: IRedirectUrl, private sparow: Sparow) {
    this.id = redirect_url.id;
    this.url = redirect_url.url;
    this.application = new Application(redirect_url.application, this.sparow);
  }
}
