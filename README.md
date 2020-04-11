[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

- [vue-gsheets](#vue-gsheets)
  - [Installation](#installation)
  - [Input Arguments](#input-arguments)
  - [How to use in components](#how-to-use-in-components)
  - [How to fetch SHEETID and sheetPageNumber from google sheet?](#how-to-fetch-sheetid-and-sheetpagenumber-from-google-sheet)
  - [Other Information](#other-information)

# vue-gsheets


Parses a public Google sheets spreadsheet if it follows a basic format of equally structured rows that start with a heading row.

e.g. A [published spreadsheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vQLWDoEdzvcFi5lX34b6jnyzbYqymfNXJhP4O6Xzhjsobv7gt3vn40H3fVFUwPpy-hMx0ERLQbZZh08/pubhtml?gid=143173541&single=true) with the following structure

User	| dateStarted |	Role
--------|-------------|------------
John	| 22-01-1999	 | Manager
Bob	    | 17-08-2005	 | Supervisor
Joe	    | 03-12-2008	 | Clerk

will be parsed into the following JSON

```json
[
  {
    "user": "John",
    "dateStarted": "22-01-1999",
    "role": "Manager"
  },
  {
    "user": "Bob",
    "dateStarted": "17-08-2005",
    "role": "Supervisor"
  },
  {
    "user": "Joe",
    "dateStarted": "03-12-2008",
    "role": "Clerk"
  }
]
```


## Installation

```sh
yarn add vue-gsheets

or

npm install --save vue-gsheets
```


## Input Arguments

Set following arguments in `data` of your vue component

Arguments | default values | Description
---------|---------|-------------
SHEETID         | 1Yc2esnockqfrNweacmegXnavuPly8PvjaRzqlRzaXTE | ID of google sheet, kindle refer README on how to fetch it
COLUMNS         | 3 | Number of colums on given google sheet
sheetPageNumber | 1 | Google sheet Page Number, usually 1


NOTE: All input variables in BOLD are mandatory to fetch correct data

## How to use in components

Add this module as a [mixin](https://vuejs.org/v2/guide/mixins.html) to the
component or page which consumes data from published google sheet. Then update the `COLUMNS`, `sheetPageNumber`
and `SHEETID` data values in component to correct values.

Kindly refer this section [How to fetch SHEETID and sheetPageNumber from google sheet?](#how-to-fetch-sheetid-and-sheetpagenumber-from-google-sheet)
to find out `SHEETID` and `sheetPageNumber` info from your google sheet.



```js
<script>
import { vueGsheets } from 'vue-gsheets'

export default {
  mixins: [vueGsheets],
  date: () => ({
    COLUMNS: 3,
    sheetPageNumber: 1,
    SHEETID: '1Yc2esnockqfrNweacmegXnavuPly8PvjaRzqlRzaXTE'
  })
}
</script>
```

All information will be fetched from google sheet, transformed and saved to component
data ready to be comsumed in component template section.

Following data properties are added

1. COLUMNS - number of columns
2. headers - list of header keys
3. items   - array of objects with data fetched
4. records - number of records, 3 in eg.

```html
<tr v-for="item in items" :key="item.dateStarted">
   <td> {{ item.User }}        </td>
   <td> {{ item.dateStarted }} </td>
   <td> {{ item.Role }}        </td>
</tr>
```

A screenshot from `vue-devtools`

![vue-devtools](demo.png)

## How to fetch SHEETID and sheetPageNumber from google sheet?

Open the google sheet you want to import data from in your browser. Make sure its `published`
(if not kindly do so, else this approach will not work).

The URL of google sheet would look something like this,

```
https://docs.google.com/spreadsheets/d/1Yc2esnockqfrNweacmegXnavuPly8PvjaRzqlRzaXTE/edit#gid=143173541
```

**SHEETID** = `1Yc2esnockqfrNweacmegXnavuPly8PvjaRzqlRzaXTE`

**sheetPageNumber** = `1` unless there are multiple pages on spreadsheet

---

## Other Information

* [Got a bug, kindly report it here](https://github.com/avimehenwal/vue-gsheets/issues)
* [Let me know if you got a feature request, or support for other framework](https://github.com/avimehenwal/vue-gsheets/issues)
* Contact me for contributions via [twitter](https://twitter.com/avimehenwal)
* [Test Repo](https://github.com/avimehenwal/vue-sheets)
* [NPM Package](https://www.npmjs.com/package/vue-gsheets)

<!-- Markdown link & img dfn's -->
[npm-url]: https://www.npmjs.com/package/vue-gsheets
[npm-image]: https://img.shields.io/npm/v/vue-gsheets.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/vue-gsheets.svg?style=flat-square



<a href="https://www.buymeacoffee.com/F1j07cV" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

 Spread Love :hearts: and not :no_entry_sign: hatred   [![Twitter Follow](https://img.shields.io/twitter/follow/avimehenwal.svg?style=social)](https://twitter.com/avimehenwal)