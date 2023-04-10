import ProductManager from './manager/ProductManager.js';

let managers = new ProductManager('./file/productos.json');

const productManager = async() => {

try {

    //Testing: Metodo getProduct - consultar los productos
    let productos = await managers.getProducts();
    console.log(productos);
    
    
    //Testing: Metodo addProduct - agregar un producto
    //await managers.addProduct('Coca Cola', 'Bebida gaseosa', 100, 'https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/coca-cola-bottle.png', 1, 10);
    //await managers.addProduct('Pepsi', 'Bebida gaseosa', 100, 'https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/coca-cola-bottle.png', 2, 10);
    //productos = await managers.getProducts();
    //console.log(productos);

    //Testing: Metodo getProductById - consultar un producto por id
    //productos = await managers.getProductById(2);
    

    //Testing: Metodo updateProduct - actualizar un producto por id
    //productos = await managers.updateProduct(1, 'id', 650);
    //console.log(productos);
    

    //Testing: Metodo deleteProduct - eliminar un producto por id
    //await managers.deleteProduct(7);
    //productos = await managers.getProducts();
    //console.log(productos);
} catch (error) {
    console.log(error); 
}
}

productManager();