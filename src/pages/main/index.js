import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

class Main extends Component {

    state = {
        products: []
    }

    /* 
        Cada vez que algo no state alterar, o método render é executado novamente.
        
    */

    componentDidMount() { // assim que o componente for mostrado em tela
        this.loadProducts()
    }

    loadProducts = async() => {
        const response = await api.get('/products')
        this.setState({ products: response.data.docs })
    }

    render() {

        const {products} = this.state 

        return ( 
        <div className = "product-list" >
            {products.map( (product) => {
                return <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a href="">Acessar</a>
                </article>
            })}

            <div className="actions">
                <button>Anterior</button>
                <button>Próxima</button>
            </div>
        </div>
        )
    }
}

export default Main