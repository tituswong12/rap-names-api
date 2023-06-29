const express = require('express')
const app = express()
const PORT  = 8000


const rappers ={

'21 savage': {
    'age':29,
    'brithName':'Lebron James' ,
    'location': 'London, England'
},'chance the rapper': {
    'age':29,
    'brithName':'Chancelor Bennet' ,
    'location': 'Chicago, Illinois'
},'steph curry': {
    'age':33,
    'brithName':'baby assasin' ,
    'location': 'Charlette, North Carolina'
}, 'unknown': {
    'age':0,
    'brithName':'?' ,
    'location': '?'
}

}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
    
})

app.listen(PORT,()=>{
    console.log(`The server is now runnig on port ${PORT}!`)
})