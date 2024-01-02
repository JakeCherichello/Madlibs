let adjective = prompt('Enter an adjective:')
let place = prompt('Enter a location:')
let food = prompt('Enter a food:')
let drink = prompt('Enter a drink:')
let name = prompt('Enter a name:')
let number = prompt(`Enter a number:`)
let emotion = prompt('Enter a emotion:')
let verb = prompt('Enter a verb:')

let story = `On a ${adjective} winter day, I decided to build a snowman! I built it in the middle of ${place} until my snow man was finally done. 
I began to get tired so I made ${food} and drank ${drink}. I named my snowman ${name} he was ${number} feet tall and I loved him! I went to sleep 
thinking of my snowman. When I woke up he was Melted! I felt ${emotion} so that day I stayed at home and ${verb}`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p> ${story} </p>`