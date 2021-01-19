---
id: place
title: PLACE
sidebar_label: Place
hide_table_of_contents: false
---

## Overview

In Nervatura those logistic points where our own or someone else’s assets and resources are recorded or physically stored, belong to a special group called PLACE. These are the warehouses, but also the petty cash, where cash is stored and even a virtual place like the bank account belong to this group.

## Input fields

### Place No.
Unique ID, generated at the first data save. The format and value of the next data in row is taken from the [**DOCUMENT NUMBERING**](numberdef) (code = planumber) data series.

### Type
bank, cash, warehouse

### Description
Short description.

### Currency
The elements of [**CURRENCY**](currency). Only for *bank* and *cash* types, appears after first save. Its default value is taken from [**DEFAULT SETTINGS**](setting) *default currency*.

### Address data
**Zipcode**, **City**, **Street**

### Comment
Remarks field.

## Related data

### [**METADATA**](metadata)
Unlimited number of supplementary data can be added.

### CONTACT INFO
***Firtsname, Surname, Status, Phone, Mobile, Other, Email, Comment***<br />
Unlimited number of contact data can be added.

## Operations

### REPORT
[**DATA EXPORT**](export)

### BOOKMARK
Set a bookmark for the record. Later can be loaded from bookmarks at any time.
