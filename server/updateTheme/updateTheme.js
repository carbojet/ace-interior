import Axios from 'axios';
const themeAPI = 'admin/api/2021-04'
export function updateTheme(shop,accessToken){
    const axios = Axios.create({
        baseURL:`https://${shop}/${themeAPI}`,
        Headers:{
            'Content-Type':"application-json",
            'X-shopify-Access-Token':accessToken
        }
    });
    getThemeId(axios);
}
async function getThemeId(axios){
    const {data} = await axios.get('/themes.json')
    console.log('Themes Found : ',data)
    const mainTheme = data.themes.find(theme => theme.role==='main' )
    if(!mainTheme){
        console.log('no main theme found')
        return
    }
    console.log('the main theme is',mainTheme)
    console.log('The theme id is :',mainTheme.id)
}