import { Routes, Route} from "react-router-dom";

import { GlobalProvider } from './contexts/GlobalContext';
import { RecipeProvider } from './contexts/RecipeContext';
import { ClassProvider } from './contexts/ClassContext';


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
import { RecipeOwner } from "./components/Guards/OwnerGuard";
import { Classes } from "./components/Classes/Classes";
import { DetailsClass } from "./components/DetailsClass/DetailsClass";
import { ShopAndGadjets } from "./components/ShopAndGadjets/ShopAndGadjets";
import { EditClassPage } from "./components/EditClassPage/EditClassPage";
import { CreateClassPage } from "./components/CreateClassPage/CreateClassPage";
// import { ShoppingBasket } from "./components/ShoppingBasket/ShoppingBasket";
import { BasketProvider } from "./contexts/BasketContext";
import { CreateShopGadjet } from "./components/CreateShopGadjet/CreateShopGadjet";

function App() {
  

  return (
      <GlobalProvider>
        <RecipeProvider>
          <ClassProvider>
            <BasketProvider>
          <div id="box">
              <Header />

              <main id="main-content">
                  <Routes>
                      <Route path='/' element={<Home />} /> 
                      <Route path='/login' element={<Login />} /> 
                      <Route path='/register' element={<Register />} /> 

                      <Route path='/aboutUs' element={<AboutUs />} /> 

                      {/* <Route path='/shoppingBasket' element={<ShoppingBasket />} />  */}

                      <Route path='/catalog' element={<Catalog />} /> 
                      <Route path='/catalog/:detailsId' element={ <Details />} /> 
                      <Route path='/classes' element={<Classes />} /> 
                      <Route path='/classes/:detailsId' element={ <DetailsClass />} /> 
                      <Route path='/tools' element={<ShopAndGadjets />} />
                      
                      
                      <Route element={<RouteGuard />}>
                      <Route path='/catalog/:detailsId/editPage' element={
                          <RecipeOwner>
                               <EditPage />
                          </RecipeOwner>
                          } /> 
                          <Route path='/createPage' element={<CreatePage />} /> 
                          
                          <Route path='/classes/:detailsId/editClassPage' element={
                            <RecipeOwner>
                               <EditClassPage />
                          </RecipeOwner>
                          } /> 
                          <Route path='/createClassPage' element={<CreateClassPage />} /> 

                          <Route path='/createShopGadjet' element={<CreateShopGadjet />} /> 

                          <Route path='/logout' element={<Logout />} /> 
                      </Route>
                  </Routes>
              </main>

              <Footer /> 
          </div>
            </BasketProvider>
          </ClassProvider>
        </RecipeProvider>
      </GlobalProvider>
  );
}

export default App;
