
export const loaderFunction = async ()=>{
   const fetchUrl = 'http://localhost:3000/posts'
   const res = await fetch(fetchUrl ,  {method: "GET", headers: {"Content-type": "application/json;charset=UTF-8"}})
   const data  = await res.json()
   return data;
}


