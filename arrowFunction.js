// EX 1:
const addAndMultiply = (x, y, z) => (x + y) * z

console.log(addAndMultiply(4, 8, 5)) // 60


// Also fix the string interpolation using Template Literals

const selfIntro = (name, hobby, count) => `My name is ${name}. I practice ${hobby} ${count} times a day.`

console.log(selfIntro('Shanqyeet', 'Kendama', '18')) // My name is Shanqyeet. I practice Kendama 18 times a day.


// EX 2:
// tips: remove curly braces
let squared = (x) => x * x

console.log(squared(2))


//EX 3:
const prices = [1.00, 2.00, 3.00, 4.00]
const gst = 0.06

const pricesWithTax = prices.map(x => x * (1 + gst)); // Complete this with .map

console.log(pricesWithTax) // you should get [1.06, 2.12, 3.18, 4.24]


//EX 4:

function pricesWithTax2(price) {
    return price * (1 + gst);
}

const calcWithGst = []

prices.forEach(function (p) {
    calcWithGst.push(pricesWithTax2(p))
})

console.log(calcWithGst)
// you should get [1.06, 2.12, 3.18, 4.24]