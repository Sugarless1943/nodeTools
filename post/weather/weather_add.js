const xlsx = require('node-xlsx')
const fs = require('fs')
const { default: axios } = require('axios')
const { Exception } = require('sass')
const { time } = require('console')

const sheets = xlsx.parse('sjs2.xlsx')


let data = []
let row = []
sheets[0].data.forEach((sheet,index) => {
    if(index == 0) {
        row = sheet
    }else {
        // let [timestamp, windSpeed, temperature, humidity] = sheet
        // console.log(timestamp, windSpeed, temperature, humidity)
        // data.push({
        //     "metric":"temperature1",
        //     "timestamp":1644768000000,
        //     "value":"20",
        //     "tags":{
        //         "type":"smart_data_HeatUser_yz",
        //         "uid":"yz_da2221cd-02c7-4b0d-ac39-9cd675140d48"
        //     }
        // })
        // console.log(sheet)
        let obj = {}
        row.forEach((item,index) => {
            obj[item] = sheet[index]
            data.push(obj)
        })
    }
});

// console.log(data)

//weather
let res = []
data.filter(item => item.timestamp != undefined).forEach(item => {
    // console.log(item)
    let {timestamp, windSpeed, temperature, humidity} = item
    let tags = {
        "type":"Weather",
        "uid":"2a957e3a-39fa-38b0-9622-a3a979cfdec3"
    }
    
    for(let i=0;i<60;i++) {
        // res.push({
        //     "metric":"windSpeed",
        //     "timestamp": (timestamp - 0) + (60000 * i),
        //     value: windSpeed,
        //     tags
        // })
        // res.push({
        //     "metric":"temperature",
        //     "timestamp": (timestamp - 0) + (60000 * i),
        //     value: temperature,
        //     tags
        // })
        res.push({
            "metric":"humidity",
            "timestamp": (timestamp - 0) + (60000 * i),
            value: humidity,
            tags
        })  
    }
})
// console.log(res)
let timer = setInterval(() => {
    let buffer = res.splice(0, 500)
    console.log(res.length)
    if(res.length > 0) {
        axios.post("http://proxy.allsmart.abc:42741/api/put", buffer).catch(e => {
            axios.post("http://proxy.allsmart.abc:42741/api/put", buffer).catch(e => {
                console.log(e, buffer)
            })
        })
    }else {
        clearInterval(timer)
    }
}, 50)
// console.log(JSON.stringify(res))
//http://proxy.allsmart.abc:42741/
// axios.post("http://proxy.allsmart.abc:42741/api/put", res)




