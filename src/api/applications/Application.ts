import Sparow from "../Sparow";
import { IApplication } from "../interfaces/application";

export default class Application {
  public id: string;
  public title: string;
  public description: string;
  public public_token: string;
  public secret_token: string;
  public created_at: Date = new Date();
  public updated_at: Date = new Date();
  constructor(application: IApplication, private sparow: Sparow) {
    this.id = application.id;
    this.title = application.title;
    this.description = application.description;
    this.public_token = application.tokens.public;
    this.secret_token = application.tokens.secret;
    this.created_at = application.created_at;
    this.updated_at = application.updated_at;
  }

  /**
   * submits all changes on this application
   */
  public commit(): Promise<Application> {
    return this.sparow.editApplication(this.id, {
      title: this.title,
      description: this.description,
    });
  }
  /**
   * deletes this application
   */
  public delete(): Promise<boolean> {
    return this.sparow.deleteApplication(this.id);
  }
  /**
   * converts this object to string
   */
  public toString(): string {
    return `Application(${this.id}) {title: '${this.title}' description: '${this.description}'}`;
  }
}
