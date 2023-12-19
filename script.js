let color = prompt('Enter a color:')
let name = prompt('Enter a name:')
 let warm = prompt('Enter a warm country:')
 

 let story=`Once upon a time, a ${color} Snowman named ${name} went for a trip to ${warm}`

 let madLibOutputDiv = document.getElementById('madLibOutput')

 madLibOutputDiv.innerHTML = `<p> ${story} </p>`