import { useEffect, useState } from 'react'
import axios from 'axios'

const Header = (props) => {
  return (<h2>{props.text}</h2>)
}
const Input = (props) => {
  return (
    <div> {props.text}: <input value={props.value} onChange={props.handleChange} /> </div>
  )
}
const Filter = (props) => {
  return <Input text='filter' value={props.newFilter} handleChange={props.handleFilterChange} />
}
const PersonForm = (props) => {

  return (
    <form onSubmit={props.addName}>
      <Input text='name' value={props.newName} handleChange={props.handleNameChange} />
      <Input text='number' value={props.newNumber} handleChange={props.handleNumberChange} />
      <div> <button type="submit">add</button> </div>
    </form>)

}
const Persons = (props) => {

  return (<div>
    {props.filteredPersons.map(person => {
      return <p key={person.id}>{person.name} {person.number}</p>
    })}
  </div>)
}
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log("effect")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const filteredPersons = newFilter != '' ? persons.filter(value => {
    return value.name === newFilter
  })
    : persons

  const addName = (event) => {
    event.preventDefault()
    //create new person

    const nameObject = {
      name: newName,
      number: newNumber
    }

    axios.post(`http://localhost:3001/persons`, nameObject)
      .then(response => {
        setPersons(persons.concat(nameObject))
        console.log(`added ${nameObject.name}`)
      })
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Header text='Phonebook' />
      <Filter value={newFilter} handleFilterChange={handleFilterChange} />
      <Header text='Add a new' />
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />
      <Header text='Numbers' />
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App