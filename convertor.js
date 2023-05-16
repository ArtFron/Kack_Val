const RATES = {
    usd: 0.014,
    eur: 0.013,
};
function convert(rub,val) {
    if(!RATES[val]){
        return null;
    }
    return rub * RATES[val] ;

}