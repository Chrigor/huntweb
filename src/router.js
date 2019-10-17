import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)

export default Routes;

// BrowserRouter define rotas atraves do browser
// Switch permite que apenas uma rota seja chamada ao mesmo tempo
// Route, se a URL iniciar com o path ele ja para, por isso o exact, para ele ir somente se for exatamente igual