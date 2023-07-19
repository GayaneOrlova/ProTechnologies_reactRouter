// import { Outlet, Navigate } from 'react-router-dom'

// const PrivateRoutes = () => {
//     let auth = {'token':true}
//     return(
//         auth.token ? <Outlet/> : <Navigate to="/"/>
//     )
// }

// export default PrivateRoutes

import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = (props) => {
    const auth = useAppSelector(state => state.user);
    const location = useLocation()

    if (!auth) {
        return <Navigate to="/login" state={{from: location}} />
    }

    return props.children
}

export default RequireAuth