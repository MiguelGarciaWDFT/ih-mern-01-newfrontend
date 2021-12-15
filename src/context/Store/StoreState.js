
import { useReducer } from 'react'
import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'
import axiosClient from './../../config/axios'

const StoreState = (props) => {

	// 1. INITIAL STATE (ESTADO INICIAL)
	const initialState = {
		stores: [],
		singleStore:{
			_id:"",
			nombre:"",
			domicilio:"",
			telefono:""
		},
		estado: "Tienda abierta"
	}

	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
	// REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
	const [globalState, dispatch] = useReducer(StoreReducer, initialState)

	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	const changeText = () => {

		dispatch({
			type: "CAMBIAR_TEXTO",
			payload: "Tienda cerrada." 	
		})
	}

	const getStores = async () => {

		const res = await axiosClient.get("stores/readall")
	

		console.log("Obteniendo tiendas...")
	
		const list = res.data.data
	

		dispatch({
			type: "GET_STORES",
			payload: list
		})

	}

	const getStore = async (storeId) => {
		
		const res = await axiosClient.get(`stores/readone/${storeId}`)

		const selectedStore = res.data.data

		dispatch({
			type: "GET_STORE",
			payload: selectedStore
		})

		console.log(res)

	}


	// 4. RETORNO
	return (
		<StoreContext.Provider
			value={{
				stores: globalState.stores,
				estado: globalState.estado,
				singleStore:globalState.singleStore,
				changeText,
				getStores,
				getStore
			}}
		>
			{props.children}
		</StoreContext.Provider>
	)


}

export default StoreState