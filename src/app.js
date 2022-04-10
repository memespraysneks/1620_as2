const notes = [
{ 
  title: "first note", 
  noteBody: "this is an example note",
  id: 1 
}
]

const newNoteArea = document.querySelector(".write-note-area")
const button = document.querySelector(".icons")
button.addEventListener("click", (evt) => {
  newNoteArea.innerHTML = "<textarea></textarea>"
  console.log(newNoteArea.innerHTML)
})