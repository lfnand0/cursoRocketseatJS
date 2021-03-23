/*
    if and else

if(true) {

} else{

}
*/

let temperature

temperature = 36.5
if (temperature >= 37){
    console.log('febre')
} else {
    console.log('saudável')
} //prints saudável

temperature = 38
if(temperature >= 37.5) {
    console.log('febre alta')
} else if(temperature >= 37 && temperature < 37.5) {
    console.log('febre moderada')
} else {
    console.log('saudável')
} //prints febre alta

temperature = 37.3
highTemperature = temperature >= 37.5
mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('febre alta')
} else if(mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('saudável')
} //prints febre moderada