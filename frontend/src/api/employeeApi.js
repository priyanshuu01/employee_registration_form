import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:5000/api"

});



export const createEmployee=(data)=>{


return API.post(

"/employees",

data,

{

headers:{

"Content-Type":
"multipart/form-data"

}

}

);


};