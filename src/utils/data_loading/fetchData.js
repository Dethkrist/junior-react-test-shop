import { ENDPOINT } from "./endpoints";

export const fetchData = async (query) => {
    const endpoint = ENDPOINT

    const headers = {
      "content-type": "application/json",
      "Authorization": "<token>"
    }

    const graphQLquery = query
    
    const options = {
      "method" : "POST",
      "headers" : headers,
      "body": JSON.stringify(graphQLquery)
    };
  
    const response = await fetch(endpoint, options);
    const result = await response.json();
  
    return result.data
  }
