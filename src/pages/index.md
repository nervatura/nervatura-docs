---
id: home
title: Nervatura
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { conf } from '../config/conf'
import styles from './styles.module.css';

**Nervatura** is a business management framework. It can handle any type of business related information, starting from customer details, up to shipping, stock or payment information.

<div className={`${"row"} ${styles.infoRow}`}>
  <div className="col">
    The main aspects of its design were:
    <ul>
      <li>simple and transparent structure</li>
      <li>capability of storing different data types of an average company</li>
      <li>effective, easily expandable and secure data storage</li>
      <li>support of several database types</li>
      <li>well documented, easy data management</li>
    </ul>
  </div>
  <div className={`${"col"} ${styles.contactCol}`}>
    <div className="row">
      <div className="col col--3" >
        <a href={conf.url_nervatura_home} target="_blank" rel="noopener noreferrer"
           title="Nervatura Homepage" >
           <img src={useBaseUrl('img/ntura_white.jpg')} alt="logo" />
        </a>
      </div>
      <div className="col col--9" style={{paddingTop:6}}>
        Developed as open-source project and can be used freely under the scope of <a 
          href={conf.url_licenses} target="_blank"
          rel="noopener noreferrer" className="lnk">LGPLv3 License</a>.
      </div>
    </div>
    <div className={`${styles.paypal}`}>
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

The framework is based on Nervatura Object [**MODEL**](model) specification. It is a general **open-data model**, which can store all information generated in the operation of a usual corporation.

Nervatura[ **API**](api) is a generic programming interface. Ensures direct access to Nervatura databases at database management level.

Nervatura Report is a basic PDF generation library for creating simple documents (eg. order, invoice, etc.). For more information about the report template, see [**REPORT EDITOR**](docs/editor). Sample templates [**can be found here**](https://github.com/nervatura/report-templates/tree/master/templates). You can install the templates using the [**ADMIN**](#admin-api-gui) interface.

The framework also includes a PWA [**CLIENT**](docs/) application.

## Quick Start with Node.js

Nervatura Core Package:
```
$ npm install nervatura --save
```
Nervatura with Express Framework:
```
$ git clone https://github.com/nervatura/nervatura-express.git nervatura
$ cd nervatura
$ npm install
```
**The application uses environment variables to set configuration options.** It will be read from the app_dir/.env file (development mode). Set the environment variables as needed!<br />
Other configuration files: app.yaml (App Engine), manifest.yml (IBM Cloud), node-settings.config (AWS) or Azure CLI.
```
$ npm run dev
```
and [http://localhost:8080/](http://localhost:8080/)

## Quick Start with Go
To install the package on your system, run
```
$ go get github.com/nervatura/nervatura-go
```
Later, to receive updates, run
```
$ go get -u -v github.com/nervatura/nervatura-go/...
```
Compile and run the demo/server/app.go file and open [http://localhost:8080/](http://localhost:8080/)

More golang examples: test/api_test.go, test/nervastore_test.go, test/npi_test.go<br />
Go documentation: [Nervatura Godoc](https://godoc.org/github.com/nervatura/nervatura-go)

## Admin API GUI

[**api**](api)**/database** - Create a new Nervatura database

Configure your API-KEY and database connection in your environment variables: *NT_API_KEY and NT_ALIAS_[ALIASNAME]*<br />
Connection string form: *adapter://user:password@host/database*<br />
Supported database adapters: *sqlite3, postgres, mysql, mssql*

For examples:
- *NT_ALIAS_DEMO=sqlite3://data/database/demo.db*
- *NT_ALIAS_PGDEMO=postgres://postgres:admin@localhost:5432/nervatura*
- *NT_ALIAS_MYDEMO=mysql://root:admin@localhost:3306/nervatura*
- *NT_ALIAS_MSDEMO=mssql://sa:admin@localhost:1433/nervatura*
- App Engine:<br />
  *NT_ALIAS_AEPG=postgres://[YOUR_SQL_USER]:[YOUR_SQL_PASSWORD]@/cloudsql/[YOUR_INSTANCE_CONNECTION_NAME]/[YOUR_SQL_DATABASE]*
- Azure:<br />
  *NT_ALIAS_AZMY=mysql://[ADMIN_NAME]@[SERVER_NAME]:[ADMIN_PASSWORD]@[SERVER_NAME].mysql.database.azure.com:3306/nervatura*<br />
  *NT_ALIAS_AZPG=postgres://[ADMIN_NAME]@[SERVER_NAME]:[ADMIN_PASSWORD]@[SERVER_NAME].postgres.database.azure.com:5432/postgres*<br />
  *NT_ALIAS_AZMS=mssql://[ADMIN_NAME]@[SERVER_NAME]:[ADMIN_PASSWORD]@[SERVER_NAME].database.windows.net:1433/nervatura*

The SQLite databases are created automatically. Other types of databases must be created manually before. For testing you can fill in the database with some dummy data. If you don't need those later, then you can create a blank database again. **All data in the database will be destroyed!**

[**api**](api)**/auth/login** - Login to the database

Username: **admin**<br />
Password: **Empty password: Please change after the first login!**

The following operations are currently supported:
- [**api**](api)**/auth/password** - User (*employee or customer*) password change.
- [**api**](api)**/auth/refresh** - Refreshes JWT token.
- [**api**](api)**/report/list** - Returns all installable files from the *NT_REPORT_DIR* directory (empty value: all available built-in Nervatura Reports)
- [**api**](api)**/report/install** - Install a report to the database.
- [**api**](api)**/report/delete** - Delete a report from the database.


## Other Recipes

### Bearer Authentication

Environment variables: *NT_TOKEN_ISS, NT_TOKEN_KEY, NT_TOKEN_EXP*<br />
User authentication is based on the *employee.username* or *customer.custnumber* fields. The identifier can be the following types: username (employee), email, phone number (customer).<br />
Passwords are not stored in the employee or customer tables. They are anonymized and stored in a unique table with [strong encryption](https://github.com/P-H-C/phc-winner-argon2) (*NT_HASHTABLE*).

External authorization<br />
Built-in JWK x509 Endpoint verification (see more [Firebase token](https://firebase.google.com/docs/auth/admin/verify-id-tokens)). x509 public keys URL environment variable: *NT_JWK_X509*

### Customize the appearance

You can change the following environment setting value: *NT_START_PAGE*<br />
Values: default (Nervatura Docs startpage) or static (custom modification in the www directory). Subdomains: see www/vhost.json file.

### Sending Emails

Configure your email settings in your environment variables:
- SMTP settings: *NT_SMTP_HOST, NT_SMTP_PORT, NT_SMTP_SECURE, NT_SMTP_USER, NT_SMTP_PASSWORD*
```
$ npm install nodemailer --save
```
- Mailjet settings: *NT_MJ_APIKEY_PUBLIC, NT_MJ_APIKEY_PRIVATE*
```
$ npm install node-mailjet --save
```

For API examples, see [**api**](api)**/function** (Call a server-side function)

### Server-side printing (node.js)

UNIX-like operating systems: CUPS and node-printer
```
$ npm install printer --save
```
Google Cloud Print: [CUPS-Cloud-Print](https://github.com/simoncadman/CUPS-Cloud-Print)

For API examples, see [**api**](api)**/function** (Call a server-side function)