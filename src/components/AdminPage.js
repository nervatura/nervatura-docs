import React, { useState } from 'react';

import { requestMethod } from '../actions/api'

function AdminPage() {
  const [url, setUrl] = useState(window.location.origin+"/api");
  const [apiKey, setApiKey] = useState("");
  const [alias, setAlias] = useState("demo");
  const [demo, setDemo] = useState("false");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [database, setDatabase] = useState("");
  const [token, setToken] = useState(null);
  const [reportkey, setReportkey] = useState("");
  const noserver = (window.location.pathname.startsWith("/docs"))?"":"disabled"
  return (
    <div id="main" className="w3-opacity-min" >
      <div className="w3-container w3-padding-32" style={{ maxWidth: 800, margin: "auto" }} >
        <div className="w3-card w3-black w3-opacity-min w3-padding-16 w3-round">
          {(!token)?<div className="w3-cell-row w3-container">
            <div className="w3-cell w3-padding-small">
              <label>Server</label>
              <input type="text" className="w3-input w3-round" disabled={noserver}
                value={url} onChange={(e)=>{ setUrl(e.target.value) }} />
            </div>
          </div>:null}
          {(loading)?<div className="w3-cell-row w3-container">
            <div className="w3-cell w3-padding-small w3-center">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>
          </div>:null}
          {(response && !loading)?<div className="w3-cell-row w3-container">
            <div className="w3-cell w3-padding-small">
              <label>Server response</label>
              <textarea rows="5" readOnly={true} className="w3-input w3-round w3-border w3-sand w3-small" 
                value={"Path: "+response.path+"\nStatus: "+response.status+"\nResult: "+response.data} />
            </div>
          </div>:null}
          {(!token)?<div className="w3-cell-row w3-section w3-sand w3-container w3-padding">
            <div className="w3-cell">
              <label>Create a database</label>
            </div>
          </div>:null}
          {(!token)?<div className="w3-section w3-container">
            <div className="w3-cell w3-padding-small">
              <label>API-KEY</label>
              <input type="text" className="w3-input w3-round"
                value={apiKey} onChange={(e)=>{ setApiKey(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small w3-mobile">
              <label>Alias name</label>
              <input type="text" className="w3-input w3-round"
                value={alias} onChange={(e)=>{ setAlias(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small">
              <label>DEMO database</label>
              <select className="w3-select w3-white"
                value={demo} onChange={ (e) => { setDemo(e.target.value) }}>
                  <option value="false" >false</option>
                  <option value="true" >true</option>
              </select>
            </div>
            <div className="w3-cell w3-padding-small w3-cell-bottom">
              <button className="w3-button w3-black w3-border w3-round"
               disabled={noserver}  onClick={()=>{
                  setLoading(true);
                  requestMethod({ 
                    path: url+"/database",
                    method: "post",
                    api_key: apiKey,
                    query: {
                      alias: alias,
                      demo: demo
                    },
                    data: {}
                  }, (result) => {
                    setLoading(false);
                    if(result.status === 200){
                      result.data = JSON.stringify(result.data, null, '  ')
                    }
                    setResponse(result);
                  })}} >Execute</button>
            </div>
          </div>:null}
          <div className="w3-cell-row w3-section w3-sand w3-container w3-padding">
            <div className="w3-cell">
              <label>User login</label>
            </div>
            {(token)?<div style={{width:100}} className="w3-cell w3-right-align">
              <button className="w3-button w3-black w3-border w3-round"
                onClick={()=>{ setToken(null); setResponse(null); }} >Logout</button>
            </div>:null}
          </div>
          {(!token)?<div className="w3-section w3-container">
            <div className="w3-cell w3-padding-small">
              <label>Username</label>
              <input type="text" className="w3-input w3-round"
                value={username} onChange={(e)=>{ setUsername(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small w3-mobile">
              <label>Password</label>
              <input type="password" className="w3-input w3-round"
                value={password} onChange={(e)=>{ setPassword(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small w3-mobile">
              <label>Alias/database</label>
              <input type="text" className="w3-input w3-round"
                value={database} onChange={(e)=>{ setDatabase(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small w3-cell-bottom">
              <button className="w3-button w3-black w3-border w3-round"
                disabled={(database === "") || noserver}
                onClick={()=>{
                  setLoading(true);
                  requestMethod({ 
                    path: url+"/auth/login",
                    method: "post",
                    data: {
                      username: username,
                      password: password,
                      database: database
                    }
                  }, (result) => {
                    setLoading(false);
                    if(result.status === 200){
                      setToken(result.data.token)
                      setPassword("")
                      result.data = JSON.stringify(result.data, null, '  ')
                    }
                    setResponse(result);
                  })}} >Login</button>
            </div>
          </div>:null}
          {(token)?<div className="w3-cell-row w3-container">
            <div className="w3-cell w3-padding-small">
              <label>Server token</label>
              <textarea rows="2" readOnly={true} className="w3-input w3-round w3-border w3-sand w3-small" 
                value={token} />
            </div>
            <div style={{width:60}} className="w3-cell w3-padding-small w3-cell-middle">
              <button className="w3-button w3-black w3-border w3-round"
                onClick={()=>{
                  setLoading(true);
                  requestMethod({
                    path: url+"/auth/refresh",
                    method: "get",
                    token: token,
                    data: {}
                  }, (result) => {
                    setLoading(false);
                    if(result.status === 200){
                      setToken(result.data.token)
                      result.data = JSON.stringify(result.data, null, '  ')
                    }
                    setResponse(result);
                  })}} ><i className="fas fa-sync"></i></button>
            </div>
          </div>:null}
          {(token)?<div className="w3-cell-row w3-section w3-sand w3-container w3-padding">
            <div className="w3-cell">
              <label>Password change</label>
            </div>
          </div>:null}
          {(token)?<div className="w3-section w3-container">
            <div className="w3-cell w3-padding-small">
              <label>Username</label>
              <input type="text" className="w3-input w3-round"
                value={username} onChange={(e)=>{ setUsername(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small w3-mobile">
              <label>Password</label>
              <input type="password" className="w3-input w3-round"
                value={password} onChange={(e)=>{ setPassword(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small w3-mobile">
              <label>Confirm</label>
              <input type="password" className="w3-input w3-round"
                value={confirm} onChange={(e)=>{ setConfirm(e.target.value) }} />
            </div>
            <div className="w3-cell w3-padding-small w3-cell-bottom">
              <button className="w3-button w3-black w3-border w3-round"
                onClick={()=>{
                  setLoading(true);
                  requestMethod({ 
                    path: url+"/auth/password",
                    method: "post",
                    token: token,
                    data: {
                      username: username,
                      password: password,
                      confirm: confirm
                    }
                  }, (result) => {
                    setLoading(false);
                    if(result.status === 204){
                      setPassword("")
                      setConfirm("")
                    }
                    setResponse(result);
                  })}} >Change</button>
            </div>
          </div>:null}
          {(token)?<div className="w3-cell-row w3-section w3-sand w3-container w3-padding">
            <div className="w3-cell">
              <label>Report</label>
            </div>
          </div>:null}
          {(token)?<div className="w3-section w3-container">
            <div className="w3-cell w3-padding-small">
              <label>Report Key</label>
              <input type="text" className="w3-input w3-round"
                value={reportkey} onChange={(e)=>{ setReportkey(e.target.value) }} />
            </div>
            <div className="w3-cell w3-cell-bottom w3-padding-small">
              <button style={{marginRight:12}} className="w3-button w3-black w3-border w3-round"
                onClick={()=>{
                  setLoading(true);
                  requestMethod({ 
                    path: url+"/report/list",
                    method: "get",
                    token: token
                  }, (result) => {
                    setLoading(false);
                    if(result.status === 200){
                      result.data = JSON.stringify(result.data, null, '  ')
                    }
                    setResponse(result);
                  })}} >List</button>
              <button style={{marginRight:12}} className="w3-button w3-black w3-border w3-round"
                disabled={((reportkey)==="")}
                onClick={()=>{
                  setLoading(true);
                  requestMethod({ 
                    path: url+"/report/install",
                    method: "post",
                    query: {
                      reportkey: reportkey
                    },
                    token: token
                  }, (result) => {
                    setLoading(false);
                    if(result.status === 200){
                      result.data = JSON.stringify(result.data, null, '  ')
                    }
                    setResponse(result);
                  })}} >Install</button>
              <button className="w3-button w3-black w3-border w3-round"
                disabled={((reportkey)==="")}
                onClick={()=>{
                  setLoading(true);
                  requestMethod({ 
                    path: url+"/report/delete",
                    method: "delete",
                    query: {
                      reportkey: reportkey
                    },
                    token: token
                  }, (result) => {
                    setLoading(false);
                    setResponse(result);
                  })}} >Delete</button>
            </div>
          </div>:null}
        </div>
      </div>
      
    </div>
  );
}

export default AdminPage;