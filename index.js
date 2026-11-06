const btn = document.querySelector('.button');
const btn1 = document.querySelector('.button1');
const input = document.getElementById("input1");
const list = document.getElementById('list');
const btn2 = document.querySelector('.button2');

function print() {
    if (input.value.trim() === "") return;

    let newItem = document.createElement('li');
    newItem.textContent = input.value;

    list.appendChild(newItem);

    input.value = ""; // Clear the input after adding
}

btn1.addEventListener('click', print);

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        print();
    }
});

function remove() {
    list.textContent = "";
}

btn2.addEventListener('click', remove);

function download(){
    // Add anything typed in the box that hasn't been added yet
    print();

    const links = Array.from(list.querySelectorAll('li')).map(li => li.textContent);

    if (links.length === 0) {
        alert("Add at least one link first.");
        return;
    }

    // Save the links as a text file
    const blob = new Blob([links.join('\n') + '\n'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'ezplaylist.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}
btn.addEventListener('click', download);
