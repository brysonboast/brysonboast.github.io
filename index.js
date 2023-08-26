const sections = []
sections.push(document.getElementById('home'))
sections.push(document.getElementById('about'))
sections.push(document.getElementById('work'))
sections.push(document.getElementById('contact'))

const aElements = document.getElementById('links').children;

for (let section of sections) {
    section.addEventListener('mouseover', function(event) {
        removeClasses();
        
    }
    )}

function removeClasses() {
    for (let aEl of aElements) {
        aEl.className = '';
    }
}