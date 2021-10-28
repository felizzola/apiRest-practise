/**
 *  4.- Desarrollar una función que consuma las API de Comentarios desarrollada en la pregunta 3.  
    axios
*/

import axios from "axios";



/* let comments = await axios.request('http://127.0.0.1:4000/api/comments/');
 */
/* let comment = await axios.request('http://127.0.0.1:4000/api/comments/4'); */
let comment = await axios.request('http://127.0.0.1:4000/api/comments?postId=4');

/* console.log(comments); */

console.log(comment);