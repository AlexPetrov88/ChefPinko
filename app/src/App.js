import { Routes, Route, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

import { GlobalProvider } from './contexts/GlobalContext';

import * as appService from "./services/appService";
import { getAllRecipes } from "./services/appService";

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

function App() {
      const [ recipes, setRecipes ] = useState([]);
    //   const [ editData, setEditDate ] = useState({});
    //   const [ userState, setUserState ] = useState({});
      const navigate = useNavigate();

      useEffect(() => {
        getAllRecipes()
        .then(result => {
          setRecipes(result)
        })
      }, []);


  const onCreateRecipe = async (data) => {
        // create newGame on server
        const newRecipe = await appService.postCreateRecipe(data);

        // update App state
        setRecipes(state => [...state, newRecipe])

        // redirect to catalog
        navigate('/catalog');
    }

  const onEditRecipe = async (id, data) => {
      // edit data on server
      const editRecipe = await appService.editRecipe(id, data); 

      // upDate state
      setRecipes(state => state.map(r => r._id === id ? editRecipe : r));

      navigate(`/catalog/${id}`);
    }


  const onDeleteRecipe = async (detailsId) => {
      const choice = window.confirm('Are you sure you want to delete this!');

      if (choice) {
          // Delet from server
          await appService.deleteRecipe(detailsId);

          // Delete from State
          setRecipes(state => state.filter(r => r._id !== detailsId));
          navigate('/catalog')
        }
    }

  return (
      <GlobalProvider>
      <div id="box">
          <Header />

          <main id="main-content">
              <Routes>
                  <Route path='/' element={<Home />} /> 
                  <Route path='/login' element={<Login />} /> 
                  <Route path='/register' element={<Register />} /> 
                  <Route path='/logout' element={<Logout />} /> 
                  <Route path='/aboutUs' element={<AboutUs recipes={recipes} />} /> 
                  <Route path='/createPage' element={<CreatePage onCreateRecipe={onCreateRecipe}/>} /> 
                  <Route path='/catalog' element={<Catalog recipes={recipes}/>} /> 
                  <Route path='/catalog/:detailsId' element={ <Details onDeleteRecipe={onDeleteRecipe} />} /> 
                  <Route path='/catalog/:detailsId/editPage' element={ <EditPage onEditRecipe={onEditRecipe}/>} /> 
              </Routes>
          </main>

          <Footer /> 
      </div>
      </GlobalProvider>
  );
}

export default App;
