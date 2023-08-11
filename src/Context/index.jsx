import { createContext, useEffect, useState } from "react";
// creacion del contexto 
export const GeneralContext = createContext();

// funcion proveedor del contexto 
export const GeneralContextProvider = ({ children }) => {
  // funciones y estados
  // Obtener la fecha actual
  const currentDate = new Date();

  // Extraer los componentes de la fecha (año, mes, día, hora, minutos, segundos)
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
  const day = currentDate.getDate();
    console.log(`fecha actual: ${year}-${month}-${day}`);
  //---------------------------------------- ------------------ -----------------------------------------------
  return (
    <GeneralContext.Provider
      // valores a compartir
      value={{}}
    >
      {children}
    </GeneralContext.Provider>
  );
}

