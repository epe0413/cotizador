import useCotizador from "../hooks/useCotizador"
import {MARCAS, PLANES} from '../constants'

const Resultado = () => {
    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos

    const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca))
    const [nombrePlan] = PLANES.filter(p => p.id === Number(plan))

    if(resultado === 0) return null
  
    return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow rounded-md">
        <h2 className="text-gray-600 font-black text-3xl">
            Resultado
        </h2>

        <p className="my-2">
            Marca: <span className="font-bold">{nombreMarca.nombre}</span>
        </p>
        <p className="my-2">
            Plan: <span className="font-bold">{nombrePlan.nombre}</span>
        </p>
        <p className="my-2">
            Año del Auto: <span className="font-bold">{year}</span>
        </p>
        <p className="my-2 text-2xl">
            Total Cotización: <span className="font-bold">{resultado}</span>
        </p>
    </div>
  )
}

export default Resultado