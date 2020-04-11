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

NOTE: only tested with [nuxt framework](https://nuxtjs.org/)

## Installation

```sh
yarn add vue-gsheets

or

npm install --save vue-gsheets
```

### Input Arguments

Set following arguments in `data` of your vue componet

Argument | default | Description
---------|---------|-------------
SHEETID         | 1Yc2esnockqfrNweacmegXnavuPly8PvjaRzqlRzaXTE | ID of google sheet, kindle refer README on how to fetch it
COLUMNS         | 3 | Number of colums on given google sheet
sheetPageNumber | 1 | Google sheet Page Number, usually 1

NOTE: All input variables in BOLD are mandatory to fetch correct data

## usage/ example

### How to fetch sheet ID and othre input variables?.

```
import parseGoogleSheet from 'google-sheet-parser-web';

const parsedData = await parseGoogleSheet(mySheetUrl);
```

report bugs
request features
contribute
donate

## Related

* https://www.npmjs.com/package/google-sheet-parser-web
