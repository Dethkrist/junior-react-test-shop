import { fetchData } from "./fetchData"

const dataLoader = async (query) => {
    try {
      const result = await fetchData(query);
        return result;
      }
    catch {
        console.log('error');
    }
  }

export default dataLoader;

