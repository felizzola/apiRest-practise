import express from 'express';
import fs from 'fs';
const PORT = 3000;
const app = express();
const PATH = ('./users.json');

function getUsers(){
  // return fs.readFileSync(PATH, 'utf-8');
  let data = fs.readFileSync(PATH, 'utf-8');
  let dataUser = JSON.parse(data);
  return dataUser;
}

const users = getUsers();

/* datasourse? como puedo tomarlo de otra forma? */

app.get('/api/users', (req, res)=>{
    res.json(users);
    res.end();
});

app.get('/api/users/:id', (req, res)=>{
    const id = req.params.id;
    res.json(users.filter(user => user.id == parseInt(id)));
    res.end();
});

app.listen(PORT, ()=>{
    console.log(`Escuchando puerto: ${PORT}`);
});
 
/**
 * Tomando como datasource users.json
 * 1. Desarrollar una API que permita listar:
 *      1.1. Todos los usuarios 
 *
 *      1.2. Devuelva un usuario por ID, por ejemplo /api/users/4 devuelve el usuario:
 *      {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        }
 */


