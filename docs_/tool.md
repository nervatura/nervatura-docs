---
id: tool
title: TOOL
sidebar_label: Tool
hide_table_of_contents: false
---

## Overview

The stock inventory list shows the availability of goods by quantities. However in some cases it might be needed to have the possibility to follow up a certain item individually. In this case it gets a unique identifier, specific data can be connected to it through additional data, events can be assigned, and [**also its move can be tracked**](waybill).
:::tip

A typical example could be the management of company cars, which requires recording of many different data types and events. Similarly to laptops and mobile phones, in which case it is possible to track also which user owns the phone at a certain time, and not only have the static recording of the characteristics of the device.

:::

## Input fields

### Serial
The unique identifier of the TOOL. Can be set when the new TOOL is created, before first save. Cannot be modified later. If left empty, the program will automatically generate one before saving. The format and value of the next data in row is taken from the [**DOCUMENT NUMBERING**](numberdef) (code = serial) data series.

### Description
The name of the TOOL or a brief description.

### Group
In this field a valid element of [**toolgroup**](groups) group should be given.

### Product No.
The [**product type**](product#product-type) of the TOOL. Mandatory.

### Comment
Remarks field.

## Related data

### [**METADATA**](metadata)
Unlimited number of supplementary data can be added.

### [**EVENT**](event)
Unlimited number of events can be added.

:::tip

The Nervatura Framework supports **server-side printing**. Of course, printers could be located anywhere, 
only the connection is established through a server.  The program uses this function when the [**REPORT QUEUE**](printqueue) **SERVER PRINT** button is activated.<br />
The printers must be set as TOOLs and also their settings can be specified here. See below some specific settings.
- **Serial**: The name of the printer or its network ID.
- **Description**: Any kind, this name will appear in the drop down list.
- **Group**: printer (special, automatically created {goPage("groups","toolgroup")}).
- **Product No.**: printer (Generic printer, automatically created [**product**](product) ).
- **Additional Data**
  - ***Printer type***: local, network (Linux or Windows server printer), mail (HP ePrint via Email) 
  - ***Printer mail smtp, Printer mail sender, Printer mail login, Printer mail address***: required HP ePrint via Email
  - ***Printer mail subject, Printer mail message***: optional HP ePrint via Email

:::

## Operations

### REPORT
[**DATA EXPORT**](export)

### BOOKMARK
Set a bookmark for the record. Later can be loaded from bookmarks at any time.
