const cds = require('@sap/cds')
const axios = require('axios')
const cloudSDK = require('@sap-cloud-sdk/core')

module.exports = cds.service.impl((srv) => {
    srv.on('test', async (req) => {
        // let oDestination = await cloudSDK.getDestination("swapi")
        // let oRequestConfig = await cloudSDK.buildHttpRequest(oDestination)

        let callPeopleAPI = await axios.get('https://www.swapi.tech/api/people' , {
            headers: {}
        })
        // let callPeopleAPI = await axios.get(oRequestConfig , {
        //     headers: {}
        // })
        console.log(callPeopleAPI.data)
        return JSON.stringify(callPeopleAPI.data)
    })

})