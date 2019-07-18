
function getapikey(){
let apikey = '0c5f1408ad9d4716b67b707c99c3d77f'
return apikey;}
function getApiUrl(){
let apiurl = 'http://api.football-data.org/v2/competitions/PD/';
return apiurl;
}
function selectLeague(path) {
    switch (path) {
        case "/lfp" : return "PD"; break;
        case "/equipas" : return "PPL"; break;
        case "/premier" : return "PL"; break;
        case "/calcio" : return "SA"; break;
        case "/fusball" : return "BL1"; break;
        case "/equipes" : return "FL1"; break;
        case "/eredivisie" : return "DED"; break;






    }
}

module.exports = {
    selectLeague,
    getapikey,
    getApiUrl
}