import content from './sv.json'


/*Returns the correct content depending on path */
export function getContent(path) {

    if(typeof content.pages[path] === "undefined" || !content.pages[path]) {
        return false
    }

    return content.pages[path.toLowerCase()]
}

export function getAllPaths() {
    return Object.keys(content.pages)
}