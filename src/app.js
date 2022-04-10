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
  const noteObject = document.getElementById("note")
  const note = noteObject.value
  return note
}

function getNoteTitleAndBody(){
  const noteText = getNoteText().split("\n")
  const title = noteText[0]
  const body = noteText.splice(1)
  const bodyFinal = body.join("\n")
  const titleAndBody = [title, bodyFinal]
  return titleAndBody
}

function displayNotes(){
  const noteList = document.querySelector(".notes-list")
  noteList.innerHTML = ""
  for (const note of notes){
    const li = document.createElement("li")
    li.className = "saved-note"
    li.appendChild(document.createTextNode(note.title))
    noteList.appendChild(li)
  }
  document.querySelectorAll(".saved-note").forEach((item) => {
    item.addEventListener("click", viewNote)
  })
}

function resetNote(){
  noteArea.innerHTML = ""
}

function saveNote() {
  const saveButton = document.getElementById("save")
  saveButton.addEventListener("click", (evt) => {
    const titleAndBody = getNoteTitleAndBody()
    notes.push({title: titleAndBody[0], noteBody: titleAndBody[1], id: notes.length+1})
    displayNotes()
    resetNote()
  })
}

function newNote() {
  noteArea.innerHTML = "<textarea rows='20' cols='40' placeholder='Start writing here' id='note'></textarea><button id=save>save</button><button id=delete>delete</button>"
}

function clearNote(){
  const clearButton = document.getElementById("delete")
  clearButton.addEventListener("click", resetNote)
}

function closeNoteView() {
  const viewingArea = document.querySelector(".read-note-area")
  viewingArea.innerHTML = ""
}

function viewNote(evt){
  const viewingArea = document.querySelector(".read-note-area")
  for (const item of notes) {
    if (evt.currentTarget.innerHTML == item.title) {
      const body = item.noteBody
      viewingArea.innerHTML = `<button id=close-view>close</button><p>${body}</p>`
      const closeView = document.getElementById("close-view")
      closeView.addEventListener("click", () =>  {
        closeNoteView()
      })
    }
  }
  
}

function startPage() {
  displayNotes()
}

btn.addEventListener("click", () => {
  if (noteArea.innerHTML.length <= 11){
    newNote()
    clearNote()
    saveNote()
  }
})

startPage()

