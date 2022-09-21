var express = require('express')
var app = express()

app.get('/', (req, res) => res.send(
    "<h2>API NodeJs</h2>" +
    "<p> <a href='./bienvenida'> GET - bienvenida </a> </p>"+
    "<p> Puedes usar Postman para probar esta API:</p>"+
    "<ul>  "+
    "   <li> GET: { server }/bienvenida </li> "+
    "   <li> POST: { server }/login </li> "+
    "   <li> PACTH: { server }/actualizar </li> "+
    "   <li> DELETE:{ server }/borrar </li> "+
    "</ul>"+
    "<h4>Server: localhost:4000 </h4>"
) )

app.get('/bienvenida', (req, res) => res.send("Bienvenida a NodeJs") )
app.post('/login', (req, res) => res.send("Hola, mi nombre es Daniela") )
app.patch('/actualizar', (req, res) => res.send("Usuario actualizado") )
app.delete('/borrar', (req, res) => {
    res.send("Usuario Borrado")
} )

app.listen(4000, () => console.log("Escuchando en el puerto 4000") )