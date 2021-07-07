---
id: home
title: Nervatura
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { conf } from '../config/conf'
import styles from './styles.module.css';

## Overview

Nervatura is a business management framework based on **open-data principle**. It can handle any type of business related information, starting from customer details, up to shipping, stock or payment information. Developed as open-source project and can be used freely under the scope of [LGPLv3 License](http://www.gnu.org/licenses/lgpl.html).

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
    <div className={`${styles.paypal}`}>
      <a href={conf.url_nervatura_home} target="_blank" rel="noopener noreferrer"
          title="Nervatura Homepage" >
          <img src={useBaseUrl('img/ntura_white.jpg')} alt="logo" className={`${styles.logo}`} />
      </a>
    </div>
    <div className={`${styles.paypal}`}>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value={conf.donate_id} />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_FI/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  </div>
</div>

The framework is based on Nervatura Object [**MODEL**](model) specification. It is a general **open-data model**, which can store all information generated in the operation of a usual corporation.

The Nervatura service is small and fast. A single ~5 MB file/image contains all the necessary dependencies.
The framework includes:
- [**CLI API**](#cli-api) (command line interface)
- standard HTTP [**RESTful API**](api) for client communication
- HTTP/2-based [**gRPC API**](grpc) for server-side communication
- JWT generation, external token validation, SSL/TLS support and other HTTP security [settings](#configuration-options)
- built-in database drivers for postgres, mysql, sqlite databases
- a basic report generation library for creating simple PDF documents (eg. order, invoice, etc.) 
or CSV data files
- sample report templates and [**REPORT EDITOR**](docs/editor) GUI
- PWA [**CLIENT**](docs/) application and a basic [**ADMIN**](#admin-api-gui) interface

The client and report interface supports [multilingualism](#customize-the-appearance). The framework can be easily extended with additional interfaces and functions in the [supported languages](https://grpc.io/docs/languages/): 
C#, C++, Dart, Go, Java, Kotlin, Node, Objective-C, PHP, Python, Ruby

## Installation

### **Docker** image
```
$ docker pull nervatura/nervatura:latest
```

### **Snap** package (Linux daemon)

```
$ sudo snap install --beta nervatura
```

Checking service status and last logs:

```
$ systemctl status -l snap.nervatura.nervatura.service
```

Default snap data and http.log path:  `/var/snap/nervatura/common`

### Node.js **NPM**
```
$ npm install --save nervatura
```
```
$ npm update nervatura
```

### Prebuild binaries

[Linux and Windows x64](https://github.com/nervatura/nervatura-service/releases/latest)

### Other platforms
```
$ git clone https://github.com/nervatura/nervatura-service.git
$ cd nervatura-service
$ CGO_ENABLED=0 GOOS=$(OS_NAME) GOARCH=$(ARCH_NAME) \
  go build -tags "$(TAGS)" -ldflags="-w -s -X main.Version=$(VERSION)" \
  -o $(APP_NAME) main.go
```
See more: [Building Applications in GoLang](https://golangdocs.com/building-applications-in-golang)

## Configuration Options

The application uses environment variables to set configuration options. It will be read from the [.env.example](https://github.com/nervatura/nervatura-service/blob/master/.env.example) file. Set the environment variables as needed!

## Quick Start

1. Create a new demo database
### Docker

Create a Docker container and set some options
```
$ mkdir data
$ docker run -i -t --rm --name nervatura \
  -e NT_API_KEY=DEMO_API_KEY \
  -p 5000:5000 -v "$(pwd)"/data:/data nervatura/nervatura:latest
```
In a new command window:
```
$ docker exec -i nervatura /nervatura \
  -c DatabaseCreate -k DEMO_API_KEY \
  -o "{\"database\":\"demo\",\"demo\":true}"
```
### Snap
```
$ sudo NT_API_KEY=DEMO_API_KEY \
  NT_ALIAS_DEMO="sqlite://file:/var/snap/nervatura/common/demo.db?cache=shared&mode=rwc" \
  /snap/nervatura/current/nervatura -c DatabaseCreate \
  -k DEMO_API_KEY -o "{\"database\":\"demo\",\"demo\":true}"
```

### Windows

Open a PowerShell and set the (temporary) variables:
```
$env:NT_API_KEY="DEMO_API_KEY"
$env:NT_ALIAS_DEMO="sqlite://file:///C:/YOUR_DATA_PATH/demo.db"
```
The "C:/YOUR_DATA_PATH" is an existing and writable directory, e.g. `$env:NT_ALIAS_DEMO="sqlite://file:///C:/mydata/demo.db"` The SQLite database are created automatically.

Launch nervatura CLI (in the same command window!), and create a database:
```
nervatura -c DatabaseCreate -k DEMO_API_KEY -o '{\"database\":\"demo\",\"demo\":true}'
```

Launch nervatura server (in the same command window!):
```
nervatura
```
Of course, the environment variables can also be set permanently (see more SystemPropertiesAdvanced.exe). In this case, the server can be started from anywhere, not just in the session.

### Node.js

See [Node.js sample application](https://github.com/nervatura/nervatura-express)

### Python

[Python gRPC packages](https://pypi.org/project/nervatura/)

See [Python sample application](https://github.com/nervatura/nervatura-fastapi)
### Admin GUI

You can use the [**ADMIN GUI**](http://localhost:5000/admin/) Database section:

API-KEY: **DEMO_API_KEY**<br />
Alias name: **demo**<br />
Demo database: **true**

2. Login to the database: [**Nervatura Client**](http://localhost:5000/client/)

Username: **admin**<br />
Password: **Empty password: Please change after the first login!**<br />
Database: **demo**

## CLI API

Full command line API. Program usage:
```
$ docker exec -i nervatura /nervatura -h
```
Without Docker:
```
$ ./nervatura -h
```
Example:
```
$ docker exec -i nervatura /nervatura \
  -c UserLogin -o "{\"username\":\"admin\",\"database\":\"demo\"}"
```
For more examples, see 
- [Node.js sample application](https://github.com/nervatura/nervatura-express)
- [Python sample application](https://github.com/nervatura/nervatura-fastapi)

## Create a new Nervatura database

Configure your API-KEY and database connection in your environment variables: 
```NT_API_KEY``` and ```NT_ALIAS_[ALIASNAME]``` <br />
Connection string form: *adapter://user:password@host/database*<br />
Supported database adapters: *sqlite3, postgres, mysql*

For examples:
- *NT_ALIAS_DEMO=sqlite3://data/database/demo.db*
- *NT_ALIAS_PGDEMO=postgres://postgres:admin@localhost:5432/nervatura*
- *NT_ALIAS_MYDEMO=mysql://root:admin@localhost:3306/nervatura*

Create a new database:
```
$ ./nervatura -c DatabaseCreate -k [YOUR_API_KEY] \
  -o "{\"database\":\"[your_lowercase_alias_name]\",\"demo\":false}"
```
You can use the [**ADMIN GUI**](http://localhost:5000/admin/) Database section:

API-KEY: **YOUR_API_KEY**<br />
Alias name: **your_lowercase_alias_name**<br />
Demo database: **false**

The SQLite databases are created automatically. Other types of databases must be created manually before. For testing you can fill in the database with some dummy data (demo=true). If you don't need those later, then you can create a blank database again. **All data in the database will be destroyed!**

Optional: Install Nervatura Report templates to the database
- Login to the database: [**ADMIN GUI**](http://localhost:5000/admin/) <br />
Username: **admin**<br />
Password: **Empty password: Please change after the first login!**<br />
Database: **your_lowercase_alias_name**
- List reports: Returns all installable files from the ```NT_REPORT_DIR``` directory (empty value: all built-in Nervatura Report templates)
- Install a report to the database

## Customize the appearance

1. Nervatura Client language translation
- Create a file based on the [client_config.json](https://github.com/nervatura/nervatura/tree/master/dist) file. All subtitles [can be found here](https://github.com/nervatura/nervatura-client/blob/dev/src/config/locales.js).
- Set ```NT_CLIENT_CONFIG``` environment variable value to *YOUR_CLIENT_CONFIG_FILE_PATH*
- Docker container: mount local folder to the container

2. Nervatura Client custom remote functions: [**MENU SHORTCUTS**](docs/uimenu)

3. Custom PDF Report font
- Set ```NT_FONT_FAMILY``` environment variable value to *YOUR_FONT_FAMILY_NAME*
- Set ```NT_FONT_DIR``` environment variable value to *YOUR_FONTS_PATH*
- Valid font type and filename form: FAMILY_NAME-Regular.ttf, FAMILY_NAME-Italic.ttf, FAMILY_NAME-Bold.ttf, FAMILY_NAME-BoldItalic.ttf
- Docker container: mount local folder to the container

4. Modify installed Nervatura report definitions: [**REPORT EDITOR**](docs/editor)

## Bearer Authentication

Environment variables: [.env.example](https://github.com/nervatura/nervatura-service/blob/master/.env.example)<br />
User authentication is based on the *employee.username* or *customer.custnumber* fields. The identifier can be the following types: username (employee), email, phone number (customer).<br />
Passwords are not stored in the employee or customer tables. They are anonymized and stored in a unique table with [strong encryption](https://github.com/P-H-C/phc-winner-argon2).

External authorization: ```NT_TOKEN_PUBLIC_KEY_TYPE```, ```NT_TOKEN_PUBLIC_KEY_URL```

## Other Recipes

- [![GoDoc](https://godoc.org/github.com/nervatura/nervatura-service?status.svg)](https://godoc.org/github.com/nervatura/nervatura-service)
- [gRPC API proto file](https://github.com/nervatura/nervatura/tree/master/dist)
- [Python gRPC packages](https://pypi.org/project/nervatura/)
- [Report templates files](https://github.com/nervatura/nervatura-service/tree/master/pkg/utils/static/templates)
- [Node.js sample application](https://github.com/nervatura/nervatura-express)
- [Python sample application](https://github.com/nervatura/nervatura-fastapi)