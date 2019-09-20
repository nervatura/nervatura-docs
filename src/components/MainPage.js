import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { conf } from '../config/data/conf'

function MainPage() {
  const [faq, setFaq] = useState("");
  const server = window.location.pathname.startsWith("/docs")
  return (
    <div id="main" >
      <div className="w3-container w3-justify w3-padding-16" style={{ maxWidth: 1000, margin: "auto" }} >
        
        <div className="w3-panel w3-light-grey w3-text-dark-grey w3-padding-xlarge w3-padding-32 w3-round">
          <div className="w3-margin-bottom">
            <span className="bold">Nervatura</span> is a business management framework. It can handle any type 
            of business related information, starting from customer details, up to shipping, 
            stock or payment information.
          </div>
          <div className="w3-row">
            <div className="w3-col s12 m12 l6" style={{paddingRight:32}}>
              <div>The main aspects of its design were:</div>
              <ul>
                <li>simple and transparent structure</li>
                <li>capability of storing different data types of an average company</li>
                <li>effective, easily expandable and secure data storage</li>
                <li>support of several database types</li>
                <li>well documented, easy data management</li>
              </ul>
            </div>
            <div className="w3-col s12 m12 l6 w3-padding" >
              <div className="w3-cell-row" >
                <div className="w3-cell w3-cell-top" style={{width:96}} >
                  <img src={conf.img_ntura_white} style={{width:96}} alt="" />
                </div>
                <div className="w3-cell w3-padding w3-cell-top w3-small" >
                  <div><a href={conf.url_nervatura_home} target="_blank" rel="noopener noreferrer"
                    title="Nervatura Homepage" className="lnk" >www.nervatura.com</a></div>
                  <div><a className="lnk"
                    href={"mailto:"+conf.mail_nervatura}>info@nervatura.com</a></div>
                  <div style={{paddingTop:6}}>Copyright (c) 2011-2019 by <a className="lnk"
                    href={"mailto:"+conf.mail_nervatura} title="Lead Developer">Csaba Kappel</a>.</div>
                  <div>All rights reserved.</div>
                </div>
              </div>
              <div className="w3-margin-top w3-small">
                Developed as open-source project and can be used freely under the scope of <a 
                href={conf.url_licenses} target="_blank"
                rel="noopener noreferrer" className="lnk">LGPLv3 License</a>.
              </div>
              <div className="w3-right">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value={conf.donate_id} />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
                    name="submit" alt="PayPal - The safer, easier way to pay online!" />
                  <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="w3-panel w3-white w3-text-dark-grey w3-padding-xlarge w3-padding-32 w3-round">
          <div>The framework is based on Nervatura Object <Link replace to="/model"
            className="lnk">MODEL</Link> specification. It is a general <span 
            className="bold">open-data model</span>, which can store all information generated 
            in the operation of a usual corporation.
          </div>
          <div className="w3-margin-top">Nervatura <Link replace to="/api" className="lnk">API</Link> is a generic programming 
            interface. Ensures direct access to Nervatura databases at database management level.</div>
          <div className="w3-margin-top">
            Nervatura <a href={(server)?conf.server_report_demo:conf.url_demo} 
            target="_blank" rel="noopener noreferrer"
            className="lnk">REPORT</a> is a client/server side PDF 
            generation library for Node, Go and the browser.</div>
          <div className="w3-margin-top">The framework also includes an <Link 
            replace to="/admin" className="lnk">ADMIN</Link> interface 
            and a <a target="_blank" rel="noopener noreferrer"
            href={(server)?conf.server_client:conf.url_client} className="lnk">CLIENT</a> application.</div>
        </div>

        <div className="w3-panel w3-white w3-text-dark-grey w3-padding-xlarge w3-padding-32 w3-round">
          <div className="lnk" onClick={()=>setFaq((faq === "node")?"":"node")} ><i 
            className={"fas fa-caret-"+((faq === "node")?"down":"right")}></i><span style={{paddingLeft:6}} >Quick Start with Node.js</span>
          </div>
          {(faq === "node")?<div className="w3-padding">
            <div>Nervatura Core Package:</div>
            <div className="w3-section code" >
              $ npm install nervatura --save
            </div>
            <div>Nervatura with Express Framework:</div>
            <div className="w3-section code" >
              <div>$ git clone https://github.com/nervatura/nervatura-express.git nervatura</div>
              <div>$ cd nervatura</div>
              <div>$ npm install</div>
            </div>
            <div><span className="bold">The application uses environment variables to set configuration options.</span> It will 
              be read from the app_dir/.env file (development mode). Set the environment variables as needed!
            </div>
            <div className="w3-section code" >
              $ npm run dev
            </div>
            <div>and <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer" >http://localhost:8080/</a></div>
          </div>:null}

          <div className="bold w3-margin-top" ><i className="fas fa-caret-right"></i><span 
            style={{paddingLeft:6}} >Quick Start with Go</span>
          </div>

          <div className="lnk w3-margin-top" onClick={()=>setFaq((faq === "admin")?"":"admin")} ><i 
            className={"fas fa-caret-"+((faq === "recipes")?"down":"right")}></i><span 
            style={{paddingLeft:6}} >Admin API GUI</span>
          </div>
          {(faq === "admin")?<div className="w3-padding w3-left-align">
            <div><span className="italic bold" ><Link 
              replace to="/api" className="lnk">api</Link>/database</span> - Create a new Nervatura database</div>
            <div style={{paddingLeft:16}}>
              <div className="w3-margin-top">Configure your API-KEY and database connection in your environment variables: <span 
                className="italic" >NT_API_KEY</span> and <span 
                className="italic" >NT_ALIAS_[ALIASNAME]</span>. Connection string form: <span 
                className="italic" >adapter://user:password@host/database</span></div>
              <div>For example: 
                <ul style={{marginTop:0}}>
                  <li><span className="italic" >NT_ALIAS_DEMO=sqlite3://data/database/demo.db</span></li>
                  <li><span className="italic" >NT_ALIAS_PGDEMO=postgres://postgres:admin@localhost:5432/nervatura</span></li>
                </ul>
              </div>
              <div className="w3-margin-top">The SQLite databases are created automatically. Other types of databases must 
                be created manually before. For testing you can fill in the database with some dummy data. If you don't need those later, 
                then you can create a blank database again. <span className="bold" >All data in the database will be destroyed!</span></div>
            </div>

            <div className="w3-margin-top"><span className="italic bold" ><Link 
              replace to="/api" className="lnk">api</Link>/auth/login</span> - Login to the database</div>
            <div style={{paddingLeft:16}}>
              <div className="w3-margin-top">Username: <span className="bold">admin</span></div>
              <div>Password: <span className="bold">Empty password: Please change after the first login!</span></div>
            </div>

            <div className="w3-margin-top">The following operations are currently supported:
              <ul>
                <li><span className="italic bold" ><Link 
                  replace to="/api" className="lnk">api</Link>/auth/password</span> - User (<span className="italic" >employee or customer</span>) password change.</li>
                <li><span className="italic bold" ><Link 
                  replace to="/api" className="lnk">api</Link>/auth/refresh</span> - Refreshes JWT token.</li>
                <li><span className="italic bold" ><Link 
                  replace to="/api" className="lnk">api</Link>/report/list</span> - Returns all installable files from 
                  the <span className="italic" >NT_REPORT_DIR</span> directory (empty value: all available built-in Nervatura Reports)</li>
                <li><span className="italic bold" ><Link 
                  replace to="/api" className="lnk">api</Link>/report/install</span> - Install a report to the database.</li>
                <li><span className="italic bold" ><Link 
                  replace to="/api" className="lnk">api</Link>/report/delete</span> - Delete a report from the database.</li>
              </ul>
            </div>
          </div>:null}  
          
          <div className="lnk w3-margin-top" onClick={()=>setFaq((faq === "client")?"":"client")} ><i 
            className={"fas fa-caret-"+((faq === "client")?"down":"right")}></i><span 
            style={{paddingLeft:6}} >Nervatura Client</span>
          </div>
          {(faq === "client")?<div className="w3-padding">
            <div>Free to use Nervatura PWA Client. <span className="bold">Built-in Help</span> related to a certain function 
              is easily accessible from all interfaces of the program. The program includes a built in <span 
              className="bold">Report Editor</span> which provides the possibility to modify the existing 
              Nervatura Report templates or based on these create new ones.</div>
            <div className="w3-margin-top">
              The Nervatura Client currently supports the following management tasks:
              <ul>
                <li>DOCUMENT: offer, order, worksheet, rental, invoice, receipt</li>
                <li>PAYMENT: bank statement, petty cash</li>
                <li>STOCK CONTROL: delivery, stock transfer, correction, tool movement, production, formula</li>
                <li>RESOURCES: customer, product, employee, tool, project</li>
                <li>ADMIN: default settings, doc. numbering, access rights, menu shortcuts, database log</li>
                <li>DATABASE: additional data, groups, place, currency, tax, company</li>
                <li>USER: program settings, change password</li>
                <li>BUILT-IN report editor, help, barcode (QR code) scan, bookmarks</li>
              </ul>
            </div>
            <div>Try DEMO Database:
              <ul>
                <li>Username: <span className="bold">admin or demo</span></li>
                <li>Password: <span className="bold">leave the field empty, not needed</span></li>
                <li>Database: <span className="bold">demo</span></li>
              </ul>
            </div>

          </div>:null}

          <div className="bold w3-margin-top" ><i className="fas fa-caret-right"></i><span 
            style={{paddingLeft:6}} >Cloud Hosting Services</span>
          </div>

          <div className="lnk w3-margin-top" onClick={()=>setFaq((faq === "recipes")?"":"recipes")} ><i 
            className={"fas fa-caret-"+((faq === "recipes")?"down":"right")}></i><span 
            style={{paddingLeft:6}} >Other Recipes</span>
          </div>
          {(faq === "recipes")?<div className="w3-padding">
            <div className="bold italic" >Bearer Authentication</div>
            <div style={{paddingLeft:16}}>
              <div className="w3-margin-top">Environment variables: <span className="italic" >NT_TOKEN_ISS, 
                NT_TOKEN_KEY, NT_TOKEN_EXP</span></div>
              <div>User authentication is based on the <span className="italic" >employee.username</span> or 
                <span className="italic" >customer.custnumber</span> fields. The identifier can be the following 
                types: username (employee), email, phone number (customer).
              </div>
              <div>Passwords are not stored in the <span className="italic" >employee</span> or <span 
                className="italic" >customer</span> tables. They are anonymized and stored in a 
                unique table with <a href="https://github.com/P-H-C/phc-winner-argon2" 
                target="_blank" rel="noopener noreferrer" >strong encryption</a> (<span 
                className="italic" >NT_HASHTABLE</span>).
              </div>
              <div className="w3-margin-top">External authorization</div>
              <div>Built-in <a 
                href="https://firebase.google.com/docs/auth/admin/verify-id-tokens" 
                target="_blank" rel="noopener noreferrer" >Firebase token verification</a>. Google 
                public keys URL environment variable: <span className="italic" >NT_CERT_GOOGLE</span></div>
            </div>

            <div className="bold italic w3-margin-top" >Customize the appearance</div>
            <div style={{paddingLeft:16}}>
              <div className="w3-margin-top">You can change the following environment setting value: <span className="italic" >NT_START_PAGE</span></div>
              <div>Values: default (Nervatura Docs startpage) or static (custom modification in the www directory). 
                Subdomains: see www/vhost.json file.</div>
            </div>

            <div className="bold italic w3-margin-top" >Sending Emails</div>
            <div style={{paddingLeft:16}}>
              <div className="w3-margin-top" >Configure your email settings in your environment variables:</div>
              <div><i className="fas fa-share-square"></i> SMTP settings: <span className="italic" >NT_SMTP_HOST, NT_SMTP_PORT, NT_SMTP_SECURE, 
                NT_SMTP_USER, NT_SMTP_PASSWORD</span></div>
              <div className="w3-section code" >
                $ npm install nodemailer --save
              </div>
              <div><i className="fas fa-share-square"></i> Mailjet settings: <span className="italic" >NT_MJ_APIKEY_PUBLIC, NT_MJ_APIKEY_PRIVATE</span></div>
              <div className="w3-section code" >
                $ npm install node-mailjet --save
              </div>
              <div className="w3-margin-top">For API examples, see <span className="bold italic" ><Link replace to="/api" 
                className="lnk">api</Link>/function</span> (Call a server-side function)</div>
            </div>

            <div className="bold italic w3-margin-top" >Server-side printing (node.js)</div>
            <div style={{paddingLeft:16}}>
              <div className="w3-margin-top">UNIX-like operating systems: <a href="https://www.cups.org/" 
                target="_blank" rel="noopener noreferrer" >CUPS</a> and node-printer</div>
              <div className="w3-section code" >
                $ npm install printer --save
              </div>
              <div>Google Cloud Print: <a href="https://github.com/simoncadman/CUPS-Cloud-Print" 
                target="_blank" rel="noopener noreferrer" >CUPS-Cloud-Print</a></div>
              <div className="w3-margin-top">For API examples, see <span className="bold italic" ><Link replace to="/api" 
                className="lnk">api</Link>/function</span> (Call a server-side function)</div>
            </div>
          
          </div>:null}
          
        </div>
      </div>    
    </div>
  );
}

export default MainPage;