// import Course from './components/Course.jsx'

const Part = (props) => {
  const title = props.title
  const exercises = props.exercises



  return (
    <p>{title} {exercises}</p>
  )
}

const Content = (props) => {
  const parts = props.parts

  return parts.map(part =>
    <p key={part.id}>
    {part.name} {part.exercises}</p>)
}

const Header = (props) => {
  const header = props.header


  return (
    <h1>{header}</h1>

  )
}

const Total = (props) => {
  const parts = props.parts
  const exerciseTotal = parts.reduce((accumulator, part) => {
    return accumulator += part.exercises
  }, 0)
  return (
    <div>
      total of {exerciseTotal} exercises
    </div>
  )
}

const Course = (props) => {
  const course = props.course
  const parts = course.parts


  return (
    <div>
      <Header header={course.name} />
      <Content parts={parts} />
      <Total parts={parts} />

    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>)

}

export default App