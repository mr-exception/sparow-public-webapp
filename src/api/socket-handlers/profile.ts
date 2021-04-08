import Sparow from "../Sparow";
import { IProfile } from "../interfaces/profile";

export const subProfile = (sparow: Sparow, userId: string): void => {
  sparow.socket.emit(
    "join",
    {
      application: "sparow",
      auth_token: sparow.authToken,
      channel: `profile:${userId}`,
    },
    (result: { ok: boolean }) => {
      if (result.ok) {
        sparow.socket.on("profile_update", (profileUpdate: IProfile) =>
          sparow.profile$.next(profileUpdate)
        );
      } else {
        console.error(result);
      }
    }
  );
};
