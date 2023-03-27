import { getUserData, setUserData, clearUserData } from './util.js' 

const host = 'http://localhost:3030';

async function request(url, options) {
  try {
    const response = await fetch(host + url, options);
    if (response.ok !== true) {
      if (response.status === 403) {
        clearUserData();
      }
      const error = await response.json();
      throw new Error(error.message);
    }
    if (response.status === 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

function createOptions(method = 'get', data) {
  const options = {
    method,
    headers: {}
};
  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
}
  const userData = getUserData();
  if (userData != null) {
    options.headers['X-Authorization'] = userData.token;
  }
  return options;
}

export async function get(url) {
  return request(url, createOptions());
}
export async function post(url, data) {
  return request(url, createOptions('post', data));
}
export async function put(url, data) {
  return request(url, createOptions('put', data));
}
export async function del(url) {
  return request(url, createOptions('delete'));
}

export async function login(email, password) {
  const result = await post('/users/login', { email, password });
  const userData = {
  email: result.email,
  id: result._id,
  token: result.accessToken
  };
  setUserData(userData);
  return userData;
}

export async function register(email, password) {
  const result = await post('/users/register', {email, password});
  const userData = {
  email: result.email, 
  id: result._id, 
  token: result.accessToken,
  };
  setUserData(userData);
  return userData;
}

export async function logout() {
  await get('/users/logout'); 
  clearUserData();
}



//  const request = async(method, url, data) => {

//     const options = {};
//     if (method !== 'GET') {
//         options.method = method;

//         if (data) {
//             options.headers = {
//                 'content-type': 'application/json',
//             }
//             options.body = JSON.stringify(data);
//         }

//     }

//     const response = await fetch(url, options);

//     try {
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         return {};
//     }
// }

//  const get = request.bind(null,'GET');
//  const post = request.bind(null,'POST');
//  const put = request.bind(null,'PUT');
//  const patch = request.bind(null,'PATCH');
//  const remove = request.bind(null,'DELETE');

//  export {
//      get,
//      post,
//      put,
//      patch,
//      remove
//  }