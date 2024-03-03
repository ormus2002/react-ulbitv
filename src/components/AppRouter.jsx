import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import { publicRoutes, privateRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            element={<route.component/>}
            path={route.path}
            key = {route.path}
          />
        )}
        <Route path="/*" element={<Navigate to="/posts" replace />}/>
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            element={<route.component/>}
            path={route.path}
            key={route.path}
          />
        )}
        <Route path="/*" element={<Navigate to="/login" replace />}/>
      </Routes>
  )
}

export default AppRouter;