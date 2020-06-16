import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from '../Components/Layout'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App() {
    return (
        <BrowserRouter>
        <Layout>
            <Route path="/badges" component={Badges} />
            <Route path="/badges/new" component={BadgeNew} />
            </Layout>
        </BrowserRouter>
    );
}

export default App;