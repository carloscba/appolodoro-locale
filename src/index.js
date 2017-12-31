import axios from 'axios'
import fs from 'fs'

export default function(code, path = './locale'){

    const localePath = `${path}/${code}.json`
    
    try{
        var data = fs.readFileSync(localePath,'utf8')
        return JSON.parse(data);
    }catch(error){
        new Error(error)
    } 
     
};