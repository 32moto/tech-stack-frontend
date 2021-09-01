import { Information } from '@/components/common/Information'

interface Props {
  stackName: string
  icon: string
}

const StackInfo = ({stackName, icon} : Props) => {
  return <Information name={stackName} icon={icon} iconShape={'circle'} />
}

export default StackInfo