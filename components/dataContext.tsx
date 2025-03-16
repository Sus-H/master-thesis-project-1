import { createContext } from "react";
import * as Model from "components/model";

export interface DataContextType {
    data: Model.Simulation
}

export let DataContext = createContext<DataContextType | undefined>({ data: {scenarios: [], persons: [], vehicles: []}});

// export function 