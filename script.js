function loadBoxes() {
    const container = document.querySelector('.container');
    let tempWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    let count = 0;
    while (count < 25) {
        const box = document.createElement('div');
        box.className = 'box';

        if(count != 12) {
            box.textContent = `${tempWords}`; 
        }
        else {
            box.textContent = "Free space!"; 
        }
        container.appendChild(box);
        count++;
    }
}

function clickBoxes () {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = 'green';
            console.log("Box clicked!");
        });
    });
        
    

}