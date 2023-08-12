import { createContext, useEffect, useState } from "react";
// creacion del contexto 
export const GeneralContext = createContext();

// funcion proveedor del contexto 
export const GeneralContextProvider = ({ children }) => {
  // funciones y estados
  const [formData, setFormData] = useState({});
  const [fechaActual, setFechaActual] = useState("");
  const [fechaResultado, setFechaResultado] = useState({
    year: "--",
    month: "--",
    day: "--",
  });
  // Obtener la fecha actual
  const currentDate = new Date();

  useEffect(() => {
    // Extraer los componentes de la fecha (año, mes, día, hora, minutos, segundos)
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
    const day = currentDate.getDate();
    setFechaActual(`${year}-${month}-${day}`);
  }, []);
  // FUNCION DE CALCULO DE FECHAS 
  const useDateDiff = () => {
    let fechaDiff =
      new Date(
        `${formData.year}-${formData.month}-${formData.day}`
      ) - new Date(fechaActual);
    // resultado de año
    let fechaDiffYear = Math.floor(fechaDiff / (1000 * 60 * 60 * 24 * 365));
    // resultado de mes
    let fechaDiffMonth;
    if (fechaDiffYear > 0) {
      fechaDiff -= fechaDiffYear * (1000 * 60 * 60 * 24 * 365);
      fechaDiffMonth = Math.floor(fechaDiff / (1000 * 60 * 60 * 24 * 30));
    } else {
      fechaDiffMonth = Math.floor(fechaDiff / (1000 * 60 * 60 * 24 * 30));
    }
    // resultado de dia
    fechaDiff -= fechaDiffMonth * (1000 * 60 * 60 * 24 * 30);
    let fechaDiffDay = Math.floor(fechaDiff / (1000 * 60 * 60 * 24));
    
    let fechaResult = {
      year: fechaDiffYear,
      month: fechaDiffMonth,
      day: fechaDiffDay,
    };
    setFechaResultado(fechaResult);
  };
  //---------------------------------------- ------------------ -----------------------------------------------
  return (
    <GeneralContext.Provider
      // valores a compartir
      value={{
        formData,
        setFormData,
        fechaActual,
        fechaResultado,
        setFechaResultado,
        useDateDiff,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

