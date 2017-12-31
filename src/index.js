export default function(code, page, path = '../../../locale'){

    const localePath = `${path}/${code}.js`
    
    try{
        const response = require(localePath)
        const data = response.default
        return data[page] ;
    }catch(error){
        new Error('Appolodoro:' + error)
    } 
     
};