const noteArea = document.querySelector(".write-note-area")
const btn = document.querySelector(".icons")

const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

function getNoteText(){
  const noteObject = document.getElementsById("note")
  const note = noteObject.value
  return note
}

function getNoteTitle(){
  const noteText = getNoteText()
  return (noteText.split("\n"))[0]
}

function saveNote() {

}

function newNote() {
  noteArea.innerHTML = "<textarea rows='20' cols='40' placeholder='Start writing here' id='note'></textarea><button id=save>save</button><button id=delete>delete</button>"
}

function clearNote(){
  const clearButton = document.getElementById("delete")
  clearButton.addEventListener("click", newNote())
}

btn.addEventListener("click", (evt) => {
  if (noteArea.innerHTML.length == 11){
    newNote()
  }
})


