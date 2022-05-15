import { useQuery } from "@apollo/client";

function QueryWrapper(Query, Component) {

  function QueryHOC(props) {
    const {loading, error, data} = useQuery(Query)

      if (loading) return <h1>LOADING</h1>
      if (error) return <h1>ERROR</h1>
  
      return <Component {...props} data={data}/>
  }
  
  return QueryHOC
} 

export default QueryWrapper;