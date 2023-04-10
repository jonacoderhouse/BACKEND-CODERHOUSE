
import ProductManager from "./ProductManager.js";
import  express  from "express";

let managers = new ProductManager("./file/productos.json")
const app = express();


app.get("/bienvenida", (req, res) => {
    res.send(`<h1>Bienvenid@ a mi tercer Desafio</h1>`);
});

app.get("/products", async (request, res) => {
    let products = await managers.getProducts();
    let { limit } = request.query;
    if(!limit){
        res.send(products)
    }else{
        res.send(products.slice(0, limit))
    };
});

app.get('/products/:pid', async (req,res)=> {
    let pid = Number(req.params.pid);
    let product = await managers.getProductById(pid);
    !product ?  res.send({error:'Producto no encontrado'}):res.send(product);
    
})

app.listen(8080,()=>console.log("Listening on 8080"))

// Tercer desafio entregable.
