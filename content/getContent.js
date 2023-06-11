import content from './sv.json'


/*Returns the correct content depending on path */
export function getContent(path) {

    if(!path) {
        return content.pages.landingPage
    }

    if(typeof content.pages[path.toLowerCase()] === "undefined" || !content.pages[path.toLowerCase()]) {
        return false
    }

    return content.pages[path.toLowerCase()]
}

export function getAllPaths() {
    return Object.keys(content.pages)
}