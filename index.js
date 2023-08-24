
const aElements = document.getElementsByClassName('tag');

const resetClasses = function() {
    for (el of aElements) {
        el.className = 'closed tag';
    }
}

for (el of aElements) {
    el.addEventListener('click', (event) => {
        resetClasses();
        event.target.className = 'open tag';
    })
}

