import axios from "axios";

let api = axios.create({
  baseURL: "http://go-groove-backend.vercel.app/products",
});

export let getData = () => {
  return api.get("/allProducts");
};

export let getDataById = (id) => {
  return api.get(`/findProduct/${id}`);
};

export let searchProduct =(keys)=>{
  console.log('from axios'+keys+'axios')
  return api.get("/searchProducts",{params:keys});

}

// For User
let userAPi = axios.create({
  baseURL: "http://go-groove-backend.vercel.app/user",
});

export let postUser = (user) => {
  return userAPi.post("/createUser", user);
};

export let userLogin = (user) => {
  return userAPi.post("/userLogin", user);
};



