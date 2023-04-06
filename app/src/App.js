import { Routes, Route} from "react-router-dom";

import { GlobalProvider } from './contexts/GlobalContext';
import { RecipeProvider } from './contexts/RecipeContext';


import { AboutUs } from "./components/AboutUs/AboutUs"
import { Catalog } from "./components/Catalog/Catalog";
import { CreatePage } from "./components/CreatePage/CreatePage";
import { Details } from "./components/Details/Details";
import { EditPage } from "./components/EditPage/EditPage";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./components/Logout/Logout";
import { RouteGuard } from "./components/Guards/RouteGuard";
import { GameOwner } from "./components/Guards/OwnerGuard";

function App() {
  

  return (
      <GlobalProvider>
        <RecipeProvider>
          <div id="box">
              <Header />

              <main id="main-content">
                  <Routes>
                      <Route path='/' element={<Home />} /> 
                      <Route path='/login' element={<Login />} /> 
                      <Route path='/register' element={<Register />} /> 
                      <Route path='/aboutUs' element={<AboutUs />} /> 
                      <Route path='/catalog' element={<Catalog />} /> 
                      <Route path='/catalog/:detailsId' element={ <Details />} /> 
                      
                      <Route element={<RouteGuard />}>
                      <Route path='/catalog/:detailsId/editPage' element={
                          <GameOwner>
                               <EditPage />
                          </GameOwner>
                          } /> 
                          <Route path='/createPage' element={<CreatePage />} /> 
                          <Route path='/logout' element={<Logout />} /> 
                      </Route>
                  </Routes>
              </main>

              <Footer /> 
          </div>
        </RecipeProvider>
      </GlobalProvider>
  );
}

export default App;
