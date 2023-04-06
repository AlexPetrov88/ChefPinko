import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useStorage } from '../hooks/useStorage';

import * as appService  from '../services/appService'; 

export const RecipeContext = createContext();

export const RecipeProvider = ({
    children,
}) => {
    const [ recipes, setRecipes ] = useState([]);
    //   const [ editData, setEditDate ] = useState({});
    //   const [ userState, setUserState ] = useState({});
      const navigate = useNavigate();

      useEffect(() => {
        appService.getAllRecipes()
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

    const getRecipe = (recipeId) => {
            return recipes.find(recipe => recipe._id === recipeId);
        };

    const contextValues = {
        recipes,
        onCreateRecipe,
        onEditRecipe,
        onDeleteRecipe,
        getRecipe,
    };

    return (
        <RecipeContext.Provider value={contextValues}>
            {children}
        </RecipeContext.Provider>
    );
};