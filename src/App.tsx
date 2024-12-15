// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import AddNewCredential from './pages/AddNewCredential';
import AddNewCE from './pages/AddNewCE';
import AddNewAssociation from './pages/AddNewAssociation';
import ViewCurrentCredentials from './pages/ViewCurrentCredentials';
import ViewCurrentAssociations from './pages/ViewCurrentAssociations';
import ViewCurrentCE from './pages/ViewCurrentCE';
import ProfilePage from "./pages/ProfilePage";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const [credentialsList, setCredentialsList] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const addCredential = (newCredential: any) => {
    setCredentialsList((prev) => [...prev, newCredential]);
  };
  
  const deleteCredential = (index: number) => {
    setCredentialsList((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  
  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/add-new-credential" element={<AddNewCredential addCredential={addCredential}/>} />
        <Route path="/add-new-ce" element={<AddNewCE />} />
        <Route path="/add-new-association" element={<AddNewAssociation />} />
        <Route path="/view-current-credentials" element={<ViewCurrentCredentials credentials={credentialsList} deleteCredential={deleteCredential}/>} />
        <Route path="/view-current-ce" element={<ViewCurrentCE />} />
        <Route path="/view-current-associations" element={<ViewCurrentAssociations />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
