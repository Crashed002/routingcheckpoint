const express=require('express')
const res = require('express/lib/response')
const app=express()

const port=3000

const rx=(req,res,next)=>{
    const nhar=new Date()
    const wa9t=nhar.getHours()
    const yawm=nhar.getDay();
    (yawm>=1 && yawm<=5 && wa9t>=7 && wa9t<=17)? next():res.send('The web application is only available during working hours (Monday to Friday,  from 9 to 17)')
}

app.use(rx)
app.use('/',require('./aroute'))
app.use(express.static('view'))

app.listen(port,console.log('server is running in port:',port))      