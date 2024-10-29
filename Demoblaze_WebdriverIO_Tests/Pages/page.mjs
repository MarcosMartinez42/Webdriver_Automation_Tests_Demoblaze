import { browser } from '@wdio/globals'

export default class Page {
    constructor() {
        this.title = 'My Page'
    }
    open () {
        browser.url('https://www.demoblaze.com/')
    }
}