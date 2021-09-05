import StackInfo from '@/components/domains/stack/stackInfo/StackInfo'

interface Props {
  id: number
}

export const StackInfoContainer = ({id} : Props) => {
  const stackName = 'React'
  const icon = 'https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png'
  return <StackInfo stackName={stackName} icon={icon} />
}