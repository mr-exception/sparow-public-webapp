import Sparow from "../Sparow";
import Application from "../applications/Application";
import { ISession } from "../interfaces/session";

export default class Session {
  public id: string;
  public agent: string | undefined;
  public application: Application | undefined;
  public scopes: string[] = [];
  public current: boolean;
  public ip: string;
  public last_request: Date;

  constructor(session: ISession, private sparow: Sparow) {
    this.id = session.id;
    this.agent = session.agent;
    this.scopes = session.scopes;
    this.current = session.current;
    this.last_request = new Date(session.last_request * 1000);
    this.ip = session.ip;
    this.application = session.application
      ? new Application(session.application, sparow)
      : undefined;
  }
  public getIdCheckSum(): string {
    return this.id.substr(this.id.length - 10);
  }
  public getApplicationTitle(): string {
    return this.application ? this.application.title : "direct access";
  }
  public getLastRequestString(): string {
    const Y = this.last_request.getFullYear();
    const M = this.last_request.getMonth();
    const D = this.last_request.getDay();
    const h = this.last_request.getHours();
    const m = this.last_request.getMinutes();
    return `${Y}/${M}/${D} ${h}:${m}`;
  }
  /**
   * converts this object to string
   */
  public toString(): string {
    return `Session(${this.id}) {agent: "${this.agent}", application: "${this.application?.title}"}`;
  }
}
