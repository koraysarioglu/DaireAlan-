const arguments = process.argv.slice(2)
var yarıçap
function alanhesabı(yarıçap){
var alan = Math.PI * yarıçap * yarıçap
var çıktı = `Yarıçapı ${yarıçap} olan dairenin alanı:  ${alan}`
console.log(çıktı)
}
alanhesabı(arguments[0]);