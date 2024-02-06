const cds = require('@sap/cds')
const axios = require('axios')

module.exports = cds.service.impl((srv) => {
    srv.on('test', async (req) => {
        let my_array = ['1', '2']
        return 'Hello World';
    })
})