export default async function getProducts(input) {

  const endpoint = 'http://localhost:4000/'

  const headers = {
    "content-type": "application/json",
    "Authorization": "<token>"
  };

  const graphqlQuery = {
    "query": `
    {
      category(input:{ title: "${input}" }) {
        products {
          id 
          name
          gallery
          inStock
          category
          prices {
            currency {
              label
              symbol
            }
            amount
          }
        }
      }
    }
    `
  };
  
  const options = {
    "method" : "POST",
    "headers" : headers,
    "body": JSON.stringify(graphqlQuery)
  };

  const response = await fetch(endpoint, options);
  const result = await response.json();

  return result.data.category.products
}