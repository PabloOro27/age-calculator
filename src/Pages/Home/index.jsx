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
  // --------------------------------------------------
  // función para enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    useDateDiff();
  };
  // dia limite para el mes
  const [dayLimit, setDayLimit] = useState(31);
  // función para actualizar el estado del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // dia limite para el mes
    if (formData.month === 2) {
      setDayLimit(28);
    }
    if (
      formData.month === 4 ||
      formData.month === 6 ||
      formData.month === 9 ||
      formData.month === 11
    ) {
      setDayLimit(30);
    }
  };
  // año actual
  const currentDate = new Date();

  // --------------------------------------------------
  return (
    <div className="w-8/12 h-5/6 rounded-3xl rounded-br-[200px] bg-white px-20 py-8 flex">
      <div className="w-5/6">
        {/* titulo */}
        <div className="pb-8 border-b-2 w-full">
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
                max={dayLimit}
                value={formData.day || ""}
                onChange={handleChange}
                placeholder="DD"
                className=" border-2 border-gray-300 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
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
                className=" border-2 border-gray-300 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
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
                className=" border-2 border-gray-300 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
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