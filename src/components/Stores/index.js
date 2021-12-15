import React, { useEffect, useContext } from 'react'
import StoreContext from './../../context/Store/StoreContext'
import {Link} from 'react-router-dom'

export default function Stores() {

	// ESTADO GLOBAL
	const ctx = useContext(StoreContext)

	const { stores, estado, changeText, getStores } = ctx

	// ESTADO LOCAL
	return (
		<>
			<p>Listado de tiendas</p>
			
 			<p>{ estado }</p>

			<button onClick={ () => { changeText() } }>
				Cambiar texto
			</button>
			
			<button onClick={() => { getStores() } }> Listar tiendas</button>

			<div>
				<h2>Listado de Tiendas</h2>

				<ul>
					{
						stores.map((element) => {
							return (
								<li key={element._id}>
								<Link to={`/stores/${element._id}`}>
									<p>{element.nombre}</p>
									</Link>
									{/*<p>{element.domicilio}</p>
									<p>{element.telefono}</p>*/}
									{/*comentadas para que no muestren la informacion en la pagina
									principal*/}

								</li>
							)
						})
					}
				</ul>

			</div>
		</>
		
	)
}