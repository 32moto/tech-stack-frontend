import StackInfo from '@/components/domains/stack/stackInfo/StackInfo'

interface Props {
  id: number
}

const StackInfoContainer = ({id} : Props) => {
  const stackName = 'React'
  return <StackInfo stackName={stackName} />
}

export default StackInfoContainer