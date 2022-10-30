import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PatientsProvider } from "../hooks/usePatients";

import Home from '../pages/Home';
import Auth from '../pages/Auth';
import { AuthGoogleProvider } from "../hooks/useAuthGoogle";
import { PrivateRoutes } from "./index";

export const Router = () => {
  console.log(window.location.pathname)
  return (
    <AuthGoogleProvider>
      <PatientsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PatientsProvider>
    </AuthGoogleProvider>
  )
}