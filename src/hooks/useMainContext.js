import { useContext } from "react";
import { MainContext } from "../components/main/Main";

export const useMainContext = () => useContext(MainContext);