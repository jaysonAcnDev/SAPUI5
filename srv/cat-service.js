const cds = require('@sap/cds')
const axios = require('axios')
const cloudSDK = require('@sap-cloud-sdk/core')

module.exports = cds.service.impl((srv) => {
    srv.on('test', async (req) => {
        const { TB_CART } = cds.entities
        let query = cds.parse.cql(`SELECT * FROM MY_BOOKSHOP_TB_CART`)
        let response = await cds.run(query)
        return response
        // const response = await cds.read(Items);
        // const response = await cds.read(TB_CART, o =>{
        //     o('*'), o.ORDER('*')
        // }).where({CARTNUMBER : 4})
        // return response;
        // let oDestination = await cloudSDK.getDestination("swapi")
        // let oRequestConfig = await cloudSDK.buildHttpRequest(oDestination)

        // let callPeopleAPI = await axios.get('https://www.swapi.tech/api/people' , {
        //     headers: {}
        // })
        // let callPeopleAPI = await axios.get(oRequestConfig , {
        //     headers: {}
        // })
        // console.log(callPeopleAPI.data)
        // return JSON.stringify(callPeopleAPI.data)
    })
    srv.on('getData', async (req) => {
        const { Items } = cds.entities
        const response = await cds.read(Items);
        return response;

    })

    srv.on('insertData', async (req) => {
        const { TB_CART } = cds.entities
        let data = {
           CARTNUMBER : 4,
           DATE : "02/14/2014",
           OWNER : "Jayson Cabanglan",
           ORDER : [
            {
               ITEM : 'Pencil',
               QUANTITY : 2 
            },
            {
               ITEM : 'Crayon',
               QUANTITY : 2   
            }
           ]
        }
        await cds.insert(data).into(TB_CART)
        return "Successfully Inserted"

    })

    srv.on('updateData', async (req) => {
        const { TB_CART } = cds.entities
        let data = {
           ORDER : [
            {
                ITEM : 'Paper',
                QUANTITY : 5
            }
           ]
        }
        await cds.update(TB_CART, 3).with(data)
        return "Successfully Updated"

    })



})