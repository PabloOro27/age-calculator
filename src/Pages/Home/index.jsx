import React from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';

const Home = () => {
  // estado del fomulario
  const [formData, setFormData] = React.useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  // función para actualizar el estado del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // estilo input
  const inputStyle = {
    margin: "0",
    /* Aplicar estilos específicos para ocultar flechas en navegadores WebKit */
    WebkitAppearance: "none",
    MozAppearance: "textfield" /* Para Firefox */,
  }; 

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
                min={0}
                value={formData.day || ""}
                onChange={handleChange}
                placeholder="DD"
                className=" border-2 border-gray-300 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                style={inputStyle}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-light">MES</label>
              <input
                type="number"
                name="month"
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
                value={formData.year || ""}
                onChange={handleChange}
                placeholder="YYYY"
                className=" border-2 border-gray-300 rounded-lg w-36 h-12 text-3xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>
          </form>
        </div>
        {/* calculo */}
        <div></div>
      </div>
      <button 
        onClick={handleSubmit}
        className='rounded-full w-24 h-24 bg-purple-500 mt-16 text-white flex items-center justify-center hover:bg-purple-700'
      >
          <RxDoubleArrowDown size={54} />
      </button>
    </div>
  );
};

export default Home;