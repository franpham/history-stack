// import linkedListGenerator from './linkedList.js';

var linkedList = linkedListGenerator();

function addNote(note) {
  linkedList.insert(note, 0);
}

function showNotes() {
  var str = '';
  while (linkedList.hasNext()) {
    str += ('<div>' + linkedList.next() + '</div>');
  }
  return str;
}