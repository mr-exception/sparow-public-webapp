import { createContext } from "react";
import { Subject } from "rxjs";
import Sparow from "sparow-api";
import { IProfile, emptyProfile } from "sparow-api/dist/interfaces/profile";

export default createContext<IContext>({
  sparow: new Sparow({ base_url: "not_defined" }),
  user: emptyProfile,
  authChanged: new Subject<void>(),
});
interface IContext {
  sparow: Sparow;
  user: IProfile;
  authChanged: Subject<void>;
}
