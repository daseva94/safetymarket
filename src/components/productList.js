import React from "react";
class ProductList extends React.Component{
    render(){
        const products = this.props.products;
        const productsRow = products.map((st, index) =>{
          return  <tr key={index}>
                        <td>{st.dni}</td>
                        <td>{st.descripcion}</td>
                        <td>{st.valor}</td>
                        <td>{st.estado}</td>
                        <td><button type="button" onClick={()=>this.props.onEditProduct(st)}>editar</button></td>
                        <td><button type="button" onClick={()=> this.props.onDeleteProduct(st._id)}>eliminar</button></td>
                    </tr>
        })
        return(
            <div className="lista">
            <table>
                <thead>
                <tr>
                    <th>dni</th>
                    <th>descripcion</th>
                    <th>valor</th>
                    <th>estado</th>
        
                </tr>
        
                </thead>
                <tbody>
        
                   {productsRow}
                </tbody>
            </table>
        </div>
        );
    }
}

export default ProductList;