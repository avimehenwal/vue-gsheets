/*
AUTHOR :  avimehenwal
DATED  :  10th-April-2020
PURPOSE:  Make data reusable from public google sheets

Script takes following 3 inputs and returns items variable with all sheet data

Mandatory Inputs Arguments
---------------------
1. SHEETID          - ID of google sheet, kindle refer README on how to fetch it
2. COLUMNS          - Number of colums on given google sheet
3. sheetPageNumber  - Google sheet Page Number, DEFAULT - 1

NOTE: All input variables in BOLD are mandatory to fetch correct data
*/

export const vueGsheets = {
    created () {
      this.fetchData()
    },
    data: () => ({
      items: [],
      headers: [],
      records: null,
      COLUMNS: 3,
      sheetPageNumber: 1,
      SHEETID: '1Yc2esnockqfrNweacmegXnavuPly8PvjaRzqlRzaXTE'
    }),
    computed: {
      getURL () {
        return 'https://spreadsheets.google.com/feeds/cells/' +
        this.SHEETID + '/' + this.sheetPageNumber + '/public/full?alt=json'
      }
    },
    methods: {
      async fetchData () {
        const data = await this.$axios.$get(this.getURL)
        const entry = data.feed.entry
        this.records = (entry.length / this.COLUMNS) - 1
        for (let i = 0; i < this.COLUMNS; i++) {
          this.headers.push(entry[i].content.$t)
        }
        for (let i = this.headers.length; i < entry.length; i += this.COLUMNS) {
          const item = {}
          for (let j = 0; j < this.headers.length; j++) {
          // entry[i].content.$t retrieves the content of each cell
            item[this.headers[j]] = entry[i + j].content.$t
          }
          this.items.push(item)
        }
      }
    }
  }
