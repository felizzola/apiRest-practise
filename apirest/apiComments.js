import express from 'express'
import fs from 'fs';
const PORT = 4000;
const app = express();
const PATH = ('./comments.json');

function getComments(){
  // return fs.readFileSync(PATH, 'utf-8');
  let data = fs.readFileSync(PATH, 'utf-8');
  let dataComments = JSON.parse(data);
  return dataComments;
}

const comments = getComments();



app.get('/api/comments', (req, res)=>{
  const postId = req.query.postId;
  res.json(comments.filter(comment => !postId || comment.postId == parseInt(postId)));
  res.end();   
}); 

/* res.json(comments);
res.end(); */
/* app.get('/api/comments', (req, res)=>{
    const postId = req.query.name;
    console.log('Soy POSTID' + postId);
    res.json(comments.filter(comment => comment.name == postId));
    res.end();
});  */


app.listen(PORT, ()=>{
    console.log(`Escuchando puerto: ${PORT}`);
});

/* export {getComments}; */

/**
 * Tomando como datasource a comments.json
 * 3.- Desarrollar una API que:
 *  3.1.- Liste todos los comentarios
 *  3.2.- Liste comentarios de un usuario determinado segun un parametro por QueryString . Ej.
 *         /api/comments?User=4
 *  GET
 */