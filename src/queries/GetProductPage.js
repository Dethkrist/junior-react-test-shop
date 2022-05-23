export default async function getProductPage(id) {

  const endpoint = 'http://localhost:4000/'

  const headers = {
    "content-type": "application/json",
    "Authorization": "<token>"
  };

  const graphqlQuery = {
    "query": `
    {
      product (id: "${id}") {
        id 
        name
        gallery
        inStock
        category
        description
        brand
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
  }
    `,
    "variables": {id : id}
  };
  
  const options = {
    "method" : "POST",
    "headers" : headers,
    "body": JSON.stringify(graphqlQuery)
  };

  const response = await fetch(endpoint, options);
  const result = await response.json();

  return result.data.product
}