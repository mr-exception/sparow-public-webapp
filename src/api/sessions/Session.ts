import Sparow from "../Sparow";
import Application from "../applications/Application";
import { ISession } from "../interfaces/session";

export default class Session {
  public id: string;
  public agent: string | undefined;
  public application: Application | undefined;
  public scopes: string[] = [];
  public current: boolean;

  constructor(session: ISession, private sparow: Sparow) {
    this.id = session.id;
    this.agent = session.agent;
    this.scopes = session.scopes;
    this.current = session.current;
    this.application = session.application
      ? new Application(session.application, sparow)
      : undefined;
  }
  /**
   * deletes this session
   */
  public delete(): Promise<boolean> {
    if (this.id) return this.sparow.deleteSession(this.id);
    else return new Promise(() => false);
  }
  /**
   * converts this object to string
   */
  public toString(): string {
    return `Session(${this.id}) {agent: "${this.agent}", application: "${this.application?.title}"}`;
  }
}
