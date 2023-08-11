import { React, useState } from 'react'
import {useRoutes, BrowserRouter } from 'react-router-dom' 
// rutas
import Home from '../Home'
// componentes
import Layout from '../../Components/Layout'
//estilos globales
import './App.css' 
// contexto de la pagina 
import {GeneralContextProvider} from '../../Context'
// funcion de las rutas
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ])
  return routes;
}
// ----------------------------------------------- ------------------ -----------------------------------------------
function App() {

  return (
    <GeneralContextProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </GeneralContextProvider>
  )
}

export default App
