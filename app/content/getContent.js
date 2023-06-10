import content from './sv.json'


/*Returns the correct content depending on path */
export function getContent(path) {

    const currentPath = path ? path : window?.location?.pathname?.substring(1)

    if(!currentPath) {
        return content.pages.landingPage
    }

    if(typeof content.pages[currentPath] === "undefined" || !content.pages[currentPath]) {
        return false
    }

    return content.pages[currentPath.toLowerCase()]
}

export function getAllPaths() {
    return Object.keys(content.pages)
}