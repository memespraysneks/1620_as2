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
  const noteText = getNoteText
  return (noteText.split("\n"))[0]
}

const noteArea = document.querySelector(".write-note-area")
const btn = document.querySelector(".icons")
btn.addEventListener("click", (evt) => {
  noteArea.innerHTML = "<textarea rows='20' cols='40' id='note'></textarea><button id=save>save</button><button id=delete>delete</button>"
})

