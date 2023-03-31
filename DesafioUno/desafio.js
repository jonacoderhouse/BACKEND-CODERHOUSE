

class ProductManager{
    constructor(){
        this.products =  [];
    }

    getProductos(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock){  

        let registroProducto = this.products.find(e => e.code === code);

        if (!registroProducto) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            //id: this.products.length + 1, (OTRA FORMA DE HACER EL ID)
        };

        if (this.products.length === 0) {
            product.id = 1;
        } 
        else {
            product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);
        }
        else {
            console.log("Producto Existente");
        }
    }
    getProductById(id) {
        const product = this.products.find(e => e.id === id);
        if (!product) {
        console.log("no existe el producto");
        } else {
        console.log("producto encontrado");
        return product;
        }
    }
    }

    const nuevoProducto = new ProductManager();

    console.log(nuevoProducto.getProductos()); 

    nuevoProducto.addProduct("playstation 5",
    "Videojuegos",
    200000,
    "sin imagen",
    "abc",
    25);
    nuevoProducto.addProduct("x-box",
    "Videojuegos",
    200,
    "sin imagen",
    "abc1",
    50);


    console.log(nuevoProducto.getProductos());
    nuevoProducto.getProductById(1);

    //PRIMER DESAFIO CODIGO BACKEND CODERHOUSE
    //TUTORIA : NORA PATRICIA SAUCEDO




        




