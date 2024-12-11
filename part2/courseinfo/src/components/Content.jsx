const Content = (props) => {
    const parts = props.parts
  
    return parts.map(part =>
      <p key={part.id}>
      {part.name} {part.exercises}</p>)
  }