import React, { Component } from 'react'
import api from '../../services/api'

class Main extends Component {

    state = {
        products: []
    }

    componentDidMount() { // assim que o componente for mostrado em tela
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/products')
       this.setState({products: response.data.docs})
    }

    render() {
        return (
            <h3>Quantidade produtos {this.state.products.length}</h3>
        )
    }
}

export default Main
