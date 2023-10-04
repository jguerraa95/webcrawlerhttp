function normalizeURL(urlString){
    const urbObjet = new URL(urlString)
    const hostPath = `${urbObjet.hostname}${urbObjet.pathname}`
    if(hostPath.length>0 && hostPath.slice(-1)==='/'){
        return hostPath.slice(0,-1)
    }
    return hostPath
}

module.exports = {
    normalizeURL
}