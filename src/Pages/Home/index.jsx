import {React, useContext, useState} from 'react';
// context
import { GeneralContext } from '../../Context';
import { RxDoubleArrowDown } from 'react-icons/rx';

const Home = () => {
  // context
  const {
    formData,
    setFormData,
    fechaActual,
    fechaResultado,
    setFechaResultado,
    useDateDiff,
  } = useContext(GeneralContext);
  // año actual
  const currentDate = new Date();
  //datos invalidos para el formulario
  const [invalidYear, setInvalidYear] = useState(false);
  const [invalidMonth, setInvalidMonth] = useState(false);
  const [invalidDay, setInvalidDay] = useState(false);
  // --------------------------------------------------
  const datoInvalido = () => {
    return <p className="text-xs text-center text-red-600">Dato Invalido</p>;
  }  
  // función para enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const invalidMessages = {
      year:
        formData.year < currentDate.getFullYear() + 1 || formData.year > 5000,
      month: formData.month < 1 || formData.month > 12,
      day:
        formData.day < 1 ||
        (formData.month === 2 &&
          ((formData.year % 4 === 0 && formData.year % 100 !== 0) ||
          formData.year % 400 === 0
            ? formData.day > 29
            : formData.day > 28)) ||
        ((formData.month === 4 ||
          formData.month === 6 ||
          formData.month === 9 ||
          formData.month === 11) &&
          formData.day > 30) ||
          formData.day > 31,
    };

    setInvalidYear(invalidMessages.year);
    setInvalidMonth(invalidMessages.month);
    setInvalidDay(invalidMessages.day);

    if (
      !invalidMessages.year &&
      !invalidMessages.month &&
      !invalidMessages.day
    ) {
      useDateDiff();
    }
  };
  // función para actualizar el estado del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // --------------------------------------------------
  return (
    <div className="w-8/12 h-5/6 rounded-3xl rounded-br-[200px] bg-white px-20 py-8 flex">
      <div className="w-5/6">
        {/* titulo */}
        <div className="pb-8 border-b-2 w-full box-content">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-left w-full gap-16 appearance-none"
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-light">DIA</label>
              <input
                type="number"
                name="day"
                min={1}
                max={31}
                value={formData.day || ""}
                onChange={handleChange}
                placeholder="DD"
                className={`${invalidDay ? "border-red-600" : "border-gray-300"}
                  border-2 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
              />
              {invalidDay && datoInvalido()}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-light">MES</label>
              <input
                type="number"
                name="month"
                min={1}
                max={12}
                value={formData.month || ""}
                onChange={handleChange}
                placeholder="MM"
                className={`${
                  invalidMonth ? "border-red-600" : "border-gray-300"
                }
                  border-2 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
              />
              {invalidMonth && datoInvalido()}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-light">AÑO</label>
              <input
                type="number"
                name="year"
                min={currentDate.getFullYear() + 1}
                max={5000}
                value={formData.year || ""}
                onChange={handleChange}
                placeholder="YYYY"
                className={`${
                  invalidYear ? "border-red-600" : "border-gray-300"
                }
                  border-2 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
              />
              {invalidYear && datoInvalido()}
            </div>
          </form>
        </div>
        {/* calculo */}
        <div>
          <h2 className="text-7xl font-extrabold mt-8 flex gap-5">
            <span className="text-purple-700 font-extrabold">
              {fechaResultado.year}
            </span>
            años
          </h2>
          <h2 className="text-7xl font-extrabold mt-5 flex gap-5">
            <span className="text-purple-700 font-extrabold">
              {fechaResultado.month}
            </span>
            meses
          </h2>
          <h2 className="text-7xl font-extrabold mt-5 flex gap-5">
            <span className="text-purple-700 font-extrabold">
              {fechaResultado.day}
            </span>
            dias
          </h2>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="rounded-full w-24 h-24 bg-purple-500 mt-16 text-white flex items-center justify-center hover:bg-purple-700"
      >
        <RxDoubleArrowDown size={54} />
      </button>
    </div>
  );
};

export default Home;