import { Information } from '@/components/common/Information'

interface Props {
  userName: string
  icon: string
}

export const UserInfo = ({userName, icon} : Props) => {
  return <Information name={userName} icon={icon} iconShape={'circle'} />
}