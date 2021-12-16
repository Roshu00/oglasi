
// http://api-mobilespecs.azharimm.tk/brands/samsung?page=2&limit=5&sort=brand:desc

export async function getData (brand, search) {
    const response = await fetch(`https://api-mobilespecs.azharimm.tk/search?query=${search}`)
    const data = await response.json()
    return console.log(data)
}