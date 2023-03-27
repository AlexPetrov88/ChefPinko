import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/recipes?sortBy=_createdOn%20desc',
    recipeById: '/data/recipes/',
    lastRecipes: '/data/recipes?sortBy=_createdOn%20desc&distinct=category',
    createRecipe: '/data/recipes',
    edit: '/data/recipes/',
    delete: '/data/recipes/',

    createComment: '/data/comments',
    CommentsById: '/data/comments/',
}

export async function getAllRecipes() {
    return api.get(endpoints.all);
}

export async function getRecipeById(id) {
    return api.get(endpoints.recipeById + id);
}
export async function getLastGames() {
    return api.get(endpoints.lastRecipes);
}

export async function postCreateRecipe(data) {
    return api.post(endpoints.createRecipe, data)
}

export async function editRecipe(id, data) {
    return api.put(endpoints.edit + id, data)
} 

export async function deleteRecipe(id) {
    return api.del(endpoints.delete + id)
}



export async function postCreateCommets(recipeId, comment) {
    return api.post(endpoints.createComment, { recipeId, comment})
}

// const baseUrl = 'http://localhost:3030/data/comments';
// export const create = async (gameId, comment) => {
//     const result = await request.post(baseUrl, { gameId, comment });

//     return result;
// };


export async function getCommentsById(recipeId) {
    const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await api.get(`${endpoints.CommentsById}$?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};



// import { requestFactory } from './api';

// const baseUrl = 'http://localhost:3030/data/recipes';

// export const appServiceFactory = (token) => {
//     const request = requestFactory(token);

//     const getAllRecipes = async () => {
//         const result = await request.get(baseUrl);
//         const games = Object.values(result);
//         console.log(games);
//         return games;
//     };
    
//     const getRecipeById = async (recipeId) => {
//         const result = await request.get(`${baseUrl}/${recipeId}`);
    
//         return result;
//     };
    
//     const postCreateRecipe = async (recipeData) => {
//         const result = await request.post(baseUrl, recipeData);
    
//         console.log(result);
    
//         return result;
//     };
    
//     const editRecipe = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data);

//     const deleteRecipe = (recipeId) => request.delete(`${baseUrl}/${recipeId}`);


//     return {
//         getAllRecipes,
//         getRecipeById,
//         postCreateRecipe,
//         editRecipe,
//         deleteRecipe,
//     };
// }








