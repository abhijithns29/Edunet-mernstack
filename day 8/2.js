function convert(num){
    const f =(num *9/5)+32
    const k = num + 273.15
    console.log(`farenhit :${f}`)
    console.log(`kelvin :${k}`)
}
module.exports = {convert};