const download = require('download-git-repo')
const template = require('../template.json')

const tempUrl = template.admin.url

download(`direct:${tempUrl}`,'./tmp',{clone:true}, err=>{
    console.log('回调函数')
    if(err){
        console.log(err)
    }
})