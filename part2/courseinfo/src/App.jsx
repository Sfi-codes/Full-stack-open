const Part = (props) => {
  const title = props.title
  const exercises = props.exercises


  
  return (
    <p>{title} {exercises}</p>
  )
}

const Content = (props) => {
  const parts = props.parts
  
  return (
    <Part title = {parts[0].name} exercises = {parts[0].exercises}/>
    
  )
}

const Header = (props) => {
  const header = props.header

  
  return (
    <h1>{header}</h1>
    
  )
}

const Course = (props) => {
  const course = props.course
  const parts = course.parts

  
  return (
    <div>
    <Header header = {course.name} />
    <Content parts = {parts}/>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App