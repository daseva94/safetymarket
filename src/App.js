import './App.css';
import React from 'react';
import axios from 'axios';
import ProductList from './components/productList';
import ProductsForm from './components/productForm';
import fondo from './assets/img/fondo.jpg'

class App extends React.Component {
    constructor(props){
        super(props);
        this.PRODUCTS_URL = 'http://localhost:3001/safetymarket'
        this.emptyProduct = {_id: -1, dni: '', descripcion: '', valor: '', estado: ''};
        
        this.state = {
            products: [],
            selectedProducts: this.emptyProduct

        };
        this.onFormChange = this.onFormChange.bind(this);
        this.onEditProduct = this.onEditProduct.bind(this);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
        this.onClearProduct = this.onClearProduct.bind(this);
        this.onSaveChange = this.onSaveChange.bind(this);
      }
      
        componentDidMount(){
          
            axios.get(this.PRODUCTS_URL).then((resp)=>{
                console.log('este es la respuesta de listar productos', resp);
                this.setState({products: resp.data})
            }).catch(err => {
                console.log('Hubo un error listando los productos');
            });
        }
      

      
    onFormChange(productCurrentState){
        console.log('cambio el formulario', productCurrentState);
        this.setState({selectedProducts: productCurrentState})
    }

    onEditProduct(product){
        console.log('quiero editar un product', product);
        this.setState({selectedProducts: product})
    }

    onDeleteProduct(productId){
        console.log('quiero eliminar un producto', productId)
    }

    onClearProduct(){
        console.log('vamos a limpiar el formulario');
        this.setState({selectedProducts: this.emptyProduct})
    }

    onSaveChange(evt){
        evt.preventDefault();
        const product = this.state.selectedProducts;
        if(product.dni === '' || product.descripcion === '' || product.valor === '' || product.estado === ''){
            alert('hay errores en el formulario');
            return
        }else{
        if(this.state.selectedProducts._id === -1){
            console.log('vamos a hacer un post', this.state.selectedProducts)
            axios.post(this.PRODUCTS_URL, {...product,_id: null}).then((resp)=>{
                console.log('perfect pouest', resp);
                this.setState((state, props) => ({
                    products: [...state.products, resp.data],
                    selectedProducts: this.emptyProduct
                }))    
            }).catch(err=>{
                console.log('error al hacer post', err)
            });
        }else{
            console.log('vamos a hacer un pull', this.state.selectedProducts)
            axios.put(URL, product).then().catch();
        }
        //this.setState({selectedProducts: this.emptyProduct})
    }
    }

    render(){
        return(
    
        <><img className="background_image"> src={fondo} </img><h1 className="titulo">SafetyMarket</h1><div className="container" >
                <ProductList products={this.state.products}
                    onEditProduct={this.onEditProduct}
                    onDeleteProduct={this.onDeleteProduct} />
                <ProductsForm products={this.state.selectedProducts}
                    onFormChange={this.onFormChange}
                    onClearProduct={this.onClearProduct}
                    onSaveChange={this.onSaveChange} />
            </div></>
  )}
}

      
    
export default App;
