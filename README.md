# vue-gsheets

Parses a public Google sheets spreadsheet if it follows a basic format of equally structured rows that start with a heading row

e.g. A spreadsheet with the following structure

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

introduction
installation
input
output

## usage/ example

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
