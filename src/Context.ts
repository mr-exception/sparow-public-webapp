import { createContext } from "react";
import Sparow from "sparow-api";

export default createContext<IContext>({
    sparow: undefined,
})
interface IContext {
    sparow?: Sparow
}