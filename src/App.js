// react
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// pages
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import AuthProvider from './context/AuthProvider';
import Profile from './pages/Profile/Profile';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Base from './pages/Base/Base';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';
import PrivateRoute from './components/ProtectedRoute/PrivateRoute';
import PublicRoute from './components/ProtectedRoute/PublicRoute';

library.add(fab, fas)


function App() {


	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>


					{/* Pages */}
					<Route path="/" element={<Home />} />

					<Route path="base" element={
						<PrivateRoute>
							<Base />
						</PrivateRoute>
					} />

					{/* Admin */}
					<Route path="admin" element={<Admin />} />

					{/* Profile Pages */}
					<Route path="profile" element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					} />
					<Route path="update-profile" element={<UpdateProfile />} />

					{/* Auth Pages */}
					<Route path="signin" element={
						<PublicRoute>
							<SignIn />
						</PublicRoute>
					}
					/>
					<Route path="signup" element={
						<PublicRoute>
							<SignUp />
						</PublicRoute>
					}
					/>

					{/* 404 */}
					<Route path="*" element={<UnderConstruction />} />

				</Routes>

			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
