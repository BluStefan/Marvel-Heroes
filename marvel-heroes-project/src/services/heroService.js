const dataUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b88668d3d955b6aa2ada65acc5e8cf0f&hash=d609d164ba4b097ea9a25747e96879ad";

export const HeroService = () => {
    return fetch (dataUrl)
    .then(response =>{
        return response.json()
    })
    .then(heroes => {
        return heroes.data.results.map(hero => {
            return {
                id:hero.id,
                image:`${hero.thumbnail.path}.${hero.thumbnail.extension}`,
                name: hero.name,
                description: hero.description
            }
        })
    })
}