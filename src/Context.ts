import { createContext } from "react";
import { Subject } from "rxjs";
import Sparow from "sparow-api";
import { IProfile, emptyProfile } from "sparow-api/dist/interfaces/profile";

export default createContext<IContext>({
  sparow: new Sparow(
    "http://core.sparow.salimon.ir/api",
    "ws://salimon.ir:5003"
  ),
  user: emptyProfile,
  authChanged: new Subject<void>(),
  unauthorize: () => {
    console.log("unauthorize");
  },
});
interface IContext {
  sparow: Sparow;
  user: IProfile;
  authChanged: Subject<void>;
  unauthorize: () => void;
}
