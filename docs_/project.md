---
id: project
title: PROJECT
sidebar_label: Project
hide_table_of_contents: false
---

## Overview

[**OFFER, ORDER, WORKSHEET, RENTAL, INVOICE, RECEIPT**](document) documents could be linked to projects by setting so their Project No. field.

## Input fields

### Project No.
Unique ID, generated at the first data save. The format and value of the next data in row is taken from the [**DOCUMENT NUMBERING**](numberdef) (code = pronumber) data series.

### Description
The name of the project.

### Start Date, End Date
Optional. The project's start and end dates.

### Customer
Optional. The name of the [**customer**](customer) of the project.

### Comment
Remarks field.

## Related data

### [**METADATA**](metadata)
Unlimited number of supplementary data can be added.

### ADDRESS DATA
***Country, State, Zipcode, City, Street, Comment***<br />
Unlimited number of address data can be added. The default report templates will consider the 
first address row being the address.

### CONTACT INFO
***Firtsname, Surname, Status, Phone, Mobile, Other, Email, Comment***<br />
Unlimited number of contact data can be added.

### [**EVENT**](event)
Unlimited number of events can be added.

## Operations

### REPORT
[**DATA EXPORT**](export)

### BOOKMARK
Set a bookmark for the record. Later can be loaded from bookmarks at any time.
