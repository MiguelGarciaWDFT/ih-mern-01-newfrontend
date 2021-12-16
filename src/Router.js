// ./client/src/Router.js

// 1. IMPORTACIONES
import React, { Profiler } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'
import Guitars from './components/Guitars'
import Single from './components/Guitars/Single'
import CreateGuitar from './components/Guitars/Create'

import GuitarState from './context/Guitar/GuitarState'
import UserState from './context/User/UserState'

import Auth from './routes/Auth'
import Private from './routes/Private'
import Profile from "./components/User/Profile"


// import Public from './routes/Public'

import EditGuitar from './components/Guitars/Single/Edit'

// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
		<UserState>
			<GuitarState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* localhost:3000/ */}
							<Route index element={<Home />} />

							{/* localhost:3000/registro */}
							<Route path="registro" element={<Auth component={Register} />} />
							{/* localhost:3000/iniciar-sesion */}
							<Route path="iniciar-sesion" element={<Auth component={Login} />} />
							{/* localhost:3000/guitarras */}
							{/* <Route path="guitarras" element={<Public component={Guitars} />} /> */}
							<Route path="guitarras" element={<Guitars />} />

							{/* localhost:3000/guitarras/crear */}
							<Route path="guitarras/crear" element={<CreateGuitar />} />
							{/* localhost:3000/guitarras/:id */}
							<Route path="guitarras/:id" element={<Single />} />
							{/* localhost:3000/guitarras/:id/editar */}
							<Route path="guitarras/:id/editar" element={<EditGuitar />} />
							{/* localhost:3000/profile */}
							<Route path="profile" element={<Private component={Profile} />} />


					

						</Route>
					</Routes>
				</BrowserRouter>
			</GuitarState>
		</UserState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router