interface Props {
  stackName: string
}

const StackInfo = ({stackName} : Props) => {
  return (
    <div>
      <p>{stackName}</p>
    </div>
  )
}

export default StackInfo