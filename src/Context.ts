import Sparow from "api/Sparow";
import { emptyProfile, IProfile } from "api/interfaces/profile";
import { createContext } from "react";
import { Subject } from "rxjs";

export default createContext<IContext>({
  sparow: new Sparow(
    "https://core.sparow.salimon.ir/api",
    "ws://salimon.ir:5003",
    "webapp"
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
