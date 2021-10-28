/**
 * 2.- Desarrollar una función/cliente que consuma, por cualquier metodo, la API desarrollada en la pregunta 1. 
 ej: axios (es un cliente)*/
 
 // 1ro. AXIOS
 //      axios entrega promesas y me permite conectarme y consumir una API (json en internet) y puedo hacer request a apis externas
 //----------------------------------------------------------------------------------------------- 
import axios from "axios";

let users = await axios.request('http://127.0.0.1:3000/api/users/'); 

/* let user = await axios.request('http://127.0.0.1:3000/api/users/4'); */

console.log(users); 
/* console.log(user); */