function getValueOfParamInUrl(param){
    const urlFind = new URL(window.location.href);
    const params = new URLSearchParams(urlFind.search);
    return params.get(param);
}

export default getValueOfParamInUrl;