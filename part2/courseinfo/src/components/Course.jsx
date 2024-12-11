
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
  export default Course