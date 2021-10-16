import React from "react";
class ProductsForm extends React.Component{
    onDniChange = (evt)=>{
        const products = this.props.products;
        const newProduct = {...products, dni: evt.target.value};
        console.log('cambio el DNI', evt.target.value, products, newProduct);
        this.props.onFormChange(newProduct);
    }
    render(){
        const products = this.props.products;

        return(
            <div className="formulario" onSubmit={this.props.onSaveChange}>
            <form>
                <div><label>dni</label>
                <input type="number" 
                value={products.dni} 
                onChange={this.onDniChange}/></div>

                <div><label>descripcion</label>
                <input type="text"value={products.descripcion} 
                onChange={(evt)=>this.props.onFormChange({...products, descripcion: evt.target.value})}/></div>

                <div><label>valor</label>
                <input type="number"value={products.valor} 
                onChange={(evt)=>this.props.onFormChange({...products, valor: parseInt(evt.target.value)})}/></div>

                <div><label>estado</label>
                <input type="number"value={products.estado} 
                onChange={(evt)=>this.props.onFormChange({...products, estado: parseInt(evt.target.value) })}/></div>

                <input type="submit" value={products._id===-1 ? 'Crear' : 'Editar'} />
                <input type="button" value="limpiar"onClick={this.props.onClearProduct} />
            </form>
        </div>
        );
    }
}

export default ProductsForm;