// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");

button.addEventListener('click', function(){
    let elements = document.getElementsByClassName("box");
    
    for (let i=0; i < elements.length; i++) {
        let element = elements[i];
        element.style.backgroundColor = "blue";
    };    
})


 /*
 function myFunction(event) {
    alert(event);
}
*/
