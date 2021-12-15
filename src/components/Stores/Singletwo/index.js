import React, { useContext } from 'react'
import StoreContext from '../../../context/Store/StoreContext'

import {useParams} from 'react-router-dom'

export default function Single() {

	const ctx = useContext(StoreContext)
	const { getStore, singleStore } = ctx

	const params = useParams()
	const id = params.id


	return (
		<div>
			Página individual de tienda	

			<button onClick={() => { getStore(id) }}>
				Obtener tienda individual
			</button>

			<h1>{singleStore.nombre}</h1>
			<p>{singleStore.domicilio}</p>
			<p>{singleStore.telefono}</p>

		</div>
	)
}