import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    allRecipes: '/data/recipes?sortBy=_createdOn%20desc',
    allClasses: '/data/classes',
    allGadjets: '/data/tools',

    recipeById: '/data/recipes/',
    classById: '/data/classes/',
    gadjetById: '/data/tools/',

    lastRecipes: '/data/recipes?sortBy=_createdOn%20desc&distinct=category',

    createRecipe: '/data/recipes',
    createClass: '/data/classes',
    createGadjet: '/data/tools',
    
    edit: '/data/recipes/',
    editClass: '/data/classes/',

    delete: '/data/recipes/',
    deleteClass: '/data/classes/',

    createComment: '/data/comments',
    commentsById: '/data/comments/',

    createLike: '/data/likes',
    likesById: '/data/likes/',
}

export async function getAllRecipes() {
    return api.get(endpoints.allRecipes);
}
export async function getAllClasses() {
    return api.get(endpoints.allClasses);
}
export async function getAllGadjets() {
    return api.get(endpoints.allGadjets);
}


export async function getRecipeById(id) {
    return api.get(endpoints.recipeById + id);
}
export async function getClassById(id) {
    return api.get(endpoints.classById + id);
}
export async function getGadjetById(id) {
    return api.get(endpoints.gadjetById + id);
}


// export async function getLastGames() {
//     return api.get(endpoints.lastRecipes);
// }

export async function postCreateRecipe(data) {
    return api.post(endpoints.createRecipe, data)
}
export async function postCreateClass(data) {
    return api.post(endpoints.createClass, data)
}
export async function postCreateGadjet(data) {
    return api.post(endpoints.createGadjet, data)
}



export async function editRecipe(id, data) {
    return api.put(endpoints.edit + id, data)
} 
export async function editClass(id, data) {
    return api.put(endpoints.editClass + id, data)
} 



export async function deleteRecipe(id) {
    return api.del(endpoints.delete + id)
}
export async function deleteClass(id) {
    return api.del(endpoints.deleteClass + id)
}



export async function postCreateCommets(recipeId, comment) {
    return api.post(endpoints.createComment, { recipeId, comment})
}
export async function getCommentsById(recipeId) {
    const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await api.get(`${endpoints.commentsById}$?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;

};
export async function postCreateLikes(id) {
    return api.post(endpoints.createLike, id)
}
export async function getLikesById(id) {
    const searchQuery = encodeURIComponent(`recipeId="${id}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await api.get(`${endpoints.likesById}$?where=${searchQuery}&load=${relationQuery}`);
    // console.log();
    const likes = Object.values(result);

    return likes;
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








