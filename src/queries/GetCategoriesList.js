export default async function getCategoriesList() {

  const endpoint = 'http://localhost:4000/'

  const headers = {
    "content-type": "application/json",
    "Authorization": "<token>"
  };

  const graphqlQuery = {
    "query": `
      {
        categories {
          name
        }
      }
    `,
    "variables": {}
  };
  
  const options = {
    "method" : "POST",
    "headers" : headers,
    "body": JSON.stringify(graphqlQuery)
  };

  const response = await fetch(endpoint, options);
  const result = await response.json();

  return result.data.categories
}