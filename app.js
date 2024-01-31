let myTextbox = document.querySelector("#myTextbox");
let btn = document.querySelector("#btn");
let myList = document.querySelector("#myList");


btn.addEventListener('click', function() {

    const enteredData = myTextbox.value;

    if (enteredData.trim() == ""){

        alert("Please enter data");

    } else {

        let newElem = document.createElement("li");
        newElem.innerHTML = myTextbox.value.toUpperCase();
        myList.appendChild(newElem);
    }

    myTextbox.value = "";
    
});



