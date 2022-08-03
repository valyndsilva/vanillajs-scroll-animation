const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes(){
    // console.log(window.innerHeight);
    // console.log(window.innerHeight / 5 * 4); //get a value slightly lower than the innerHeight
    const triggerBottom = window.innerHeight / 5 * 4; // which point in the window should it trigger
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; //returns a DOMRect object that provides info about the size of an element and it's position relative to the viewport. top, bottom, right, left values.
        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else{
            box.classList.remove('show');
        }
    })
}