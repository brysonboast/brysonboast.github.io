const aElements = document.getElementsByTagName("a");

for (aEl of aElements) {
    aEl.addEventListener('click', function(event) {
        removeClasses();
        event.target.className = 'curPos';
    }
    )}


function removeClasses() {
    for (aEl of aElements) {
        aEl.className = '';
    }
}