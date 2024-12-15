import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => { setNotes(initialNotes) })
  }, [])

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => { setNotes(notes.map(note => note.id === id ? returnedNote : note)) })
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))        
        setNewNote('')
      })
  }
  const handleNoteChange = (e) =>{
    setNewNote(e.target.value)
  }
  const notesToShow = notes.filter(value =>{
    return value.important === true
  })
  return (
    <div>
      <form>
        note<input type='text' onChange={handleNoteChange}></input>
        <button type='submit' onClick={addNote}>submit</button>
      </form>
      {notesToShow.map(note => {
        return <Note
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
        />

      })}
    </div>
  )
}

export default App 