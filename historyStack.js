var addNote = null;
var showNotes = null;

// addNote && showNotes need to be in the global scope IF it's called directly by the button;
window.onload = function() {
  var linkedList = linkedListGenerator();
  // var addNoteBtn = document.getElementById('addNoteBtn');
  // addNoteBtn.addEventListener('click', addNote);

  // var showNotesBtn = document.getElementById('showNotesBtn');
  // showNotesBtn.addEventListener('click', showNotes);

  addNote = function() {
    var note = document.getElementById('notepad').value;
    linkedList.insert(note, 0);
  }

  showNotes = function() {
    var str = '';
    linkedList.reset();
    while (linkedList.hasNext()) {
      str += ('<div>' + linkedList.next() + '</div>');
    }
    document.getElementById('notes').innerHTML = str;
  }
};

