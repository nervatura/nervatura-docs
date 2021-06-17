---
id: employee
title: EMPLOYEE
sidebar_label: Employee
hide_table_of_contents: false
---

## Input fields

### Employee No.
Unique ID, generated at the first data save. The format and value of the next data in row is taken from the [**DOCUMENT NUMBERING**](numberdef) (code = empnumber) data series.

### Firtsname, Surname
The name of the employee.

### Status, Phone, Mobile, Email
Contact data.

### Start Date, End Date
Employment start and end date.

### Department
An item of the [**department**](groups) group should be set in this field.

### Usergroup
One of the usergroups handled under [**ACCESS RIGHTS**](usergroup). Mandatory.

### Username
Database login name. Should be unique on database level.
:::note

Usernames, passwords and access right settings specified here are also used by other programs of the Nervatura Framework, thus by the [**Nervatura API**](/api)!

:::

### Comment
Remarks field.

## Related data

### [**METADATA**](metadata)
Unlimited number of supplementary data can be added.

### ADDRESS DATA
**Country, State, Zipcode, City, Street, Comment**<br />
Unlimited number of address data can be added.

### [**EVENT**](event)
Unlimited number of events can be added.

## Operations

### CHANGE PASSWORD
Password change possibility for the user on the form.
:::caution

When the username for an employee is created for first time by default no password will be given by the program. **However we highly recommend to set up a temporary password!**<br />
Users can modify their own password at any time, regardless of their other assigned user rights (under Setting/USER/CHANGE PASSWORD).<br />
The user passwords are stored encrypted in the database. In case a password is forgotten it is only possible to change it, but the original one cannot be decrypted.

:::

### REPORT
[**DATA EXPORT**](export)

### BOOKMARK
Set a bookmark for the record. Later can be loaded from bookmarks at any time.
