import axios from 'axios'

const getAll = () => {
    const url = `http://localhost:3001/persons`
    return (axios
        .get(url)
        .then(response => {
            return response.data
        }))
}

const addAll = (nameObject) => {
    const url = `http://localhost:3001/persons`

    return (axios.post(url, nameObject)
        .then(response => {
            return response.data
        }))
}

export default { 
    getAll: getAll, 
    addAll: addAll 
  }