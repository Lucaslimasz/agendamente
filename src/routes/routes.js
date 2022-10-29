import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PatientsProvider } from "../hooks/usePatients";

import Home from '../pages/Home';
import Auth from '../pages/Auth';
import { AuthGoogleProvider } from "../hooks/useAuthGoogle";
import { PrivateRoutes } from ".";

export const Router = () => {
  return (
    <AuthGoogleProvider>
      <PatientsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Home" element={<PrivateRoutes />}>
              <Route path="/Home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PatientsProvider>
    </AuthGoogleProvider>
  )
}