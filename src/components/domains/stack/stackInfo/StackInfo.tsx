import { Infomation } from '@/components/common/Infomation'

interface Props {
  stackName: string
  icon: string
}

const StackInfo = ({stackName, icon} : Props) => {
  return <Infomation name={stackName} icon={icon} iconShape={'circle'} />
}

export default StackInfo