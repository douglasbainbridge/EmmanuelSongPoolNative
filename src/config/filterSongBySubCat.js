module.exports = (songs, cat, subcat) => {
    return songs.filter(s => s.flowCategories
        && s.flowCategories.map(a => a.toLowerCase()).includes(cat.toLowerCase())
        && s.flowSubcategories
        && s.flowSubcategories.map(a => a.toLowerCase()).includes(subcat.toLowerCase())
    )
}