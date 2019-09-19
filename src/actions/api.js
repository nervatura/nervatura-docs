
const fetchData = (params, _callback) => {
  let status = "Loading..."
  let input = {
    method: params.method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  if(params.token){
    input.headers["Authorization"] = "Bearer " + params.token
  }
  if(params.api_key){
    input.headers["x-api-key"] = params.api_key
  }
  if((params.method === "post") && params.data){
    input.body = JSON.stringify(params.data)
  }
  fetch(params.path, input)
    .then((results) => {
      status = results.status
      if ((results.status === 200) || (results.status === 400)) {
        return results.json()
      } else {
        return results
      }
    })
    .then((results) => {
      if (status === 200) {
        _callback({ path: params.path, status: status, data: results })
      } else if (status === 400) {
        _callback({ 
          path: params.path, status: status, 
          data: (results.data)?JSON.stringify(results.data, null, '  '):results.message 
        })
      } else if (status === 204) {
        _callback({ path: params.path, status: status, data: "OK" })
      } else {
        _callback({ path: params.path, status: status, data: results.statusText})
      }
    })
    .catch(
      (error) => {
        _callback({
          path: params.path,
          status: "Error",
          data: error.message
        })
      });
}

export const requestMethod = (params, _callback) => {
  var query = new URLSearchParams();
  if(params.query){
    Object.keys(params.query).forEach(key => {
      query.append(key, params.query[key])
    });
    params.path += "?" + query.toString()
  }
  fetchData(params, (result) => {
    _callback(result)
  })
}