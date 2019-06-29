const space = 'nkx4mjs43g1a'
const accessToken = 'AJETm98BuwXsHI85-2o5pHoQLyvGYxSH5tGzfFYVTDM'
const url = `https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=song&limit=1000&access_token=${accessToken}`
module.exports = () => new Promise((resolve, reject) => {
    return fetch(url)
        .then((response) => {
            response.json()
                .then((responseJson) => {
                    return resolve(responseJson);
                })
                .catch((error) => {
                    reject(error);
                });
        })
        .catch((error) => {
            reject(error);
        });
})
