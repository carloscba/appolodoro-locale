import fs from 'fs'

export default function(code, page, path = './locale'){

    const localePath = `${path}/${code}.json`
    
    try{
        const response = fs.readFileSync(localePath,'utf8')
        const data = JSON.parse(response)
        return data[page] ;
    }catch(error){
        new Error(error)
    } 
     
};