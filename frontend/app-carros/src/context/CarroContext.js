import { createContext, useState } from "react";

export const CarroContext = createContext()

export default function CarroProvider({ children }) {

    const [carrosContext, setCarrosContext] = useState([])

    return (
        <CarroContext.Provider value={{ carrosContext, setCarrosContext}}>
            {children}
        </CarroContext.Provider>
    )
}