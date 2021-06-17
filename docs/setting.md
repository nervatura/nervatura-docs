---
id: setting
title: DEFAULT SETTINGS
sidebar_label: Default settings
hide_table_of_contents: false
---

## Overview

The database settings are not necessarily related to Nervatura Touch program. **Could affect the server's settings, the method of data storage or even operation of other programs!**<br />
For example, the default values set here will be used by the [**Nervatura API**](/api) functions as well.

## Some important settings

### business year
Set the current fiscal year. This as used by [**DOCUMENT NUMBERING**](numberdef) as the value of the Year

### default bank, default petty cash, default warehouse
These will be the default values for new input forms. The value for [**Place No.**](place) should be set in the field.

### default currency
This will be the default value for new input forms. The field should include the [**currency**](currency) code.

### default deadline
Number of days. This will be the basis for calculating the default [**duedate**](document#duedate) field in case of a new invoice. The value can be effected by the [**CUSTOMER**](customer) settings of the invoice.

### default paidtype
This will be the default value for new input forms. A valid element of the [**paidtype**](groups) group should be set in the field.

### default taxcode
This will be the default value for new line items. The field should include the *code* field of the **TAX**.

### default unit
Setting applies to a default unit field of a new [**PRODUCT**](product)
