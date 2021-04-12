import Axios, { AxiosInstance } from "axios";
import { Subject } from "rxjs";
import { plainLogin } from "./login";
import { logout } from "./logout";
import { plainRegsiter } from "./register";
import io from "socket.io-client";
import { subProfile } from "./socket-handlers/profile";
import {
  ICreateParams as IApplicationCreateParams,
  IEditParams as IApplicationEditParams,
  ISearchParams as IApplicationSearchParams,
} from "./interfaces/application";
import { IList } from "./interfaces/general";
import { search as searchApplications } from "./applications/search";
import { create as createApplication } from "./applications/create";
import { edit as editApplication } from "./applications/edit";
import { remove as deleteApplication } from "./applications/delete";
import Application from "./applications/Application";
import { ISearchParams as ISessionSearchParams } from "./interfaces/session";
import { all as allSessions } from "./sessions/all";
import { remove as deleteSession } from "./sessions/remove";
import { removeAll as deleteAllSessions } from "./sessions/removeAll";
import { IPlainRegisterParams, IPlainLoginParams } from "./interfaces/auth";
import Session from "./sessions/Session";
import Profile from "./profile/Profile";
import AuthProfile from "./profile/AuthProfile";
import { IProfile } from "./profile/profile";

export default class Sparow {
  constructor(
    public baseURL: string,
    public borkerURL: string,
    public agent: string
  ) {
    this.axios = Axios.create({ baseURL: this.baseURL });
    this.socket = io.connect(this.borkerURL, {
      transports: ["websocket"],
    });
  }
  public authError$ = new Subject<void>();
  public validationError$ = new Subject<void>();
  public networkError$ = new Subject<void>();
  public profile$ = new Subject<IProfile>();
  // auth token
  public authToken = "";
  // axios object
  public axios: AxiosInstance;
  public socket: any;
  public setProfile(user: Profile, authToken: string): void {
    this.authToken = authToken;
    // subscribe to profile channel
    subProfile(this, user.id);
    this.axios = Axios.create({
      baseURL: this.baseURL,
      headers: { Authorization: "Bearer " + authToken },
    });
  }
  /**
   * logins a new user to sparow as a plain user
   * @param username
   * @param password
   */
  public login(data: IPlainLoginParams): Promise<AuthProfile> {
    return plainLogin(data, this);
  }
  /**
   * registers a new user into sparow as a plain user
   * @param data
   */
  public registerPlain(data: IPlainRegisterParams): Promise<AuthProfile> {
    return plainRegsiter(data, this);
  }
  /**
   * logouts user and terminates its token
   */
  public logout(): Promise<void> {
    return logout(this);
  }
  /**
   * searchs in applications
   */
  public searchApplications(
    query: IApplicationSearchParams
  ): Promise<IList<Application>> {
    return searchApplications(query, this);
  }
  /**
   * creates a new application
   */
  public createApplication(
    data: IApplicationCreateParams
  ): Promise<Application> {
    return createApplication(data, this);
  }
  /**
   * edits an existing application
   */
  public editApplication(
    id: string,
    data: IApplicationEditParams
  ): Promise<Application> {
    return editApplication(id, data, this);
  }
  /**
   * removes an existing application
   */
  public deleteApplication(id: string): Promise<boolean> {
    return deleteApplication(id, this);
  }
  /**
   * gets all sessions
   */
  public allSessions(params: ISessionSearchParams): Promise<IList<Session>> {
    return allSessions(params, this);
  }
  /**
   * deletes a session by id
   */
  public deleteSession(id: string): Promise<boolean> {
    return deleteSession(id, this);
  }
  /**
   * deletes all sessions but the authenticated session
   */
  public deleteAllSessions(): Promise<boolean> {
    return deleteAllSessions(this);
  }
}
