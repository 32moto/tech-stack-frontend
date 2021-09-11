import StackInfo from '@/components/domains/stack/stackInfo/StackInfo'

interface Props {
  stackName: string
  stackImagePath: string
}

export const StackInfoContainer = ({stackName, stackImagePath} : Props) => {
  return <StackInfo stackName={stackName} icon={stackImagePath} />
}