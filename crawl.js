const {JSDOM} = require('jsdom')
const { json } = require('stream/consumers')

function getURLsFromHTML(htmlBody,baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElemets = dom.window.document.querySelectorAll('a')
    for(const l of linkElemets){
        if(l.href[0] === '/'){
            try{

                const urlObjt = new URL(`${baseURL}${l.href}`)
                urls.push(urlObjt.href)

            }catch(err){
                console.log(`Error with relative URL: ${err.message}`)
            }
        }else{
            try{
                const urlObjt = new URL(l.href)
                urls.push(urlObjt.href)

            }catch(err){
                console.log(`Error with relative URL: ${err.message}`)
            }
            
        }
    }
    return urls
    
}

function normalizeURL(urlString){
    const urbObjet = new URL(urlString)
    const hostPath = `${urbObjet.hostname}${urbObjet.pathname}`
    if(hostPath.length>0 && hostPath.slice(-1)==='/'){
        return hostPath.slice(0,-1)
    }
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}