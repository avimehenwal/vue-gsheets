// Inputs
// 1. Google sheet ID
// 2. Google sheet Page Number
// 3. Number of COLUMNS
// returns items

export const sheetMixin = {
    created () {
      this.fetchData()
    },
    data: () => ({
      SHEETPAGENUMBER: 1,
      COLUMNS: 6,
      records: null,
      items: [],
      headers: [],
      YOURGOOGLESHEETCODE: '1FR9QOFhMZBG6GVcNTbBb3hc8wzG47t0-_BmZuzSBi8U'
    }),
    computed: {
      getURL () {
        return 'https://spreadsheets.google.com/feeds/cells/' +
        this.YOURGOOGLESHEETCODE + '/' + this.SHEETPAGENUMBER + '/public/full?alt=json'
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
