class productManager {
    constructor(){
        this.products = []
    }

    #setId = () => this.products.length + 1;

    #isCodeInUse = (code) => this.products.find(product => product.code === code); 

    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Error. No se pueden dejar campos vacíos al agregar un nuevo producto.')
        }else if (this.#isCodeInUse(code)) console.log('Error. No se pueden ingresar dos productos con el mismo code.')
        else{
            const product = {
                id: this.#setId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(product)
        }
    }

    getProducts(){
        console.log(this.products)
    }

    getProductById(id){
        const productFound = this.products.find(product => product.id === id);
        if (!productFound) console.log('Error. Not found.')
        else console.log(productFound)
    }
}

//              *****************************TESTING*****************************             

const productManagerTester = new productManager();

productManagerTester.getProducts();

productManagerTester.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25);

productManagerTester.getProducts();

productManagerTester.addProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25);

productManagerTester.getProductById(1);

productManagerTester.getProductById(7);