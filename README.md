# fan-gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/0cb96c66-4baa-4eb2-bc20-ae8616ac584d/deploy-status)](https://app.netlify.com/sites/fangallery/deploys)

## Demo

![Demo homepage](/demo/Screenshot_20200409_183322.png)
![Google Tag Manager](/demo/Screenshot_20200410_004900.png)
---

## ToDO

* [ ] Add anime list
* [ ] Add character details
* https://www.gamevix.com/games/browse/best-rated
* [ ] Add manga details
* [ ] Add data transform Mixin
* [ ] Add google analytics

## Learning

* Image lazy loading
* force client side rendering
* Google blocks CORS requests
  * Who can access what resource from whome


## Issues

* https://stackoverflow.com/questions/5881139/how-to-block-iframe-call
* https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json


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