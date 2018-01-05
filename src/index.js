export default function(code, page, path = '../../../locale'){
    try{
        const response = require(`${path}/${code}.js`)
        return response.default[page];
    }catch(error){
        new Error('Appolodoro:' + error)
    }
};