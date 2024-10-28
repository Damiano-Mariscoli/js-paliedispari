// controllare se una parola è palindroma

let text = prompt('inserisci una parola palindroma')
text = text.toLowerCase()
function StringReverse(text){
    newText = ''
    for (let i = 0 ;  i < text.length; i ++) {
        char = (text.at(-i -1))
        newText += char
    }return newText
}
if (reversedString = (StringReverse(text)) === text){
    console.log(`la parola ${text} è palindroma.`)
}else {
    console.log(`la parola ${text} non è palindroma.`)
}




//gioco del pari o dispari

function randomIntFromOneToFive(){
    const randomInt = Math.floor(Math.random() * 5) + 1
    return randomInt
}

function isEven(sum){
    if(sum % 2 == 0){
        return true
    }
}

function isOdd(sum){
    if(sum % 2 == 1){
        return true
    }
}

let evenOdd = prompt('inserisci  "pari" o "dispari"')
evenOdd = evenOdd.toLowerCase()
const numUser = parseInt(prompt('inserisci un numero da 1 a 5'))
const numComputer = randomIntFromOneToFive()
const sum = numUser + numComputer

console.log(`hai scelto: ${evenOdd},`)
console.log(`il tuo numero è: ${numUser},`)
console.log(`il numero del computer è: ${numComputer},`)
console.log(`la somma dei due numeri è: ${sum}.`)

if ((evenOdd === 'pari') && (isEven(sum))){
    console.log('Hai vinto')
}else if ((evenOdd === 'dispari') && (isOdd(sum))) {
    console.log('Hai vinto')
}else {
    console.log('il computer ha vinto')
}