import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './styles.css'

class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    /* 
        Cada vez que algo no state alterar, o método render é executado novamente.
        
    */

    componentDidMount() { // assim que o componente for mostrado em tela
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;

        this.setState({ products: response.data.docs, productInfo, page })
    }


    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page == productInfo.pages) {
            return;
        }

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }

    prevPage = () => {
        const { page } = this.state;

        if (page == 1) {
            return
        }

        const pageNumber = page - 1
        this.loadProducts(pageNumber)
    }

    render() {

        const { products, page, productInfo } = this.state

        return (
            <div className="product-list" >
                {products.map((product) => {
                    return <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product.id}`}>Acessar</Link>
                    </article>
                })
                }

                <div className="actions">
                    <button disabled={page == 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page == productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div >
        )
    }
}

export default Main