# fan-gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad7aef6d-3986-4272-98e3-bb8224f1e638/deploy-status)](https://app.netlify.com/sites/fangallery/deploys)

## ToDO

* [ ] Add anime list
* [ ] Add character details
* https://www.gamevix.com/games/browse/best-rated
* [ ] Add manga details

## Learning

### Parsing data from google sheets

* The JSON retrieves data from each cell starting from the top-left most and then pushes the data one by one into an array.
* [Find the formula for all index belonging to a certain table column](https://medium.com/dali-lab/google-sheets-and-json-easy-backend-e29e9ef3df2)

```
table_header = 1
table_total_records = 5 (4 + 1 header)
table_total_columns = 6
items_1 = 1 + [0..] table_total_columns
1, 7, 13, 19
```

## Resources

* https://www.grapecity.com/blogs/adding-excel-import-and-export-to-your-vue-app