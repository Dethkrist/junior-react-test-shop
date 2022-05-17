import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client"
import QueryWrapper from './queries/QueryWrapper';
import { CATEGORIES_LIST } from './queries/QueriesList';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
const AppWithQuery = QueryWrapper(CATEGORIES_LIST, App);

root.render(
<ApolloProvider client={client}>
    <AppWithQuery/>
</ApolloProvider>    
);
