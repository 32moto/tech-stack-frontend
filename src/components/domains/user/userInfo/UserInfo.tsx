import { Information } from '@/components/common/Information'

interface Props {
  userName: string
  imagePath: string
}

export const UserInfo = ({userName, imagePath} : Props) => {
  return <Information name={userName} icon={imagePath} iconShape={'circle'} isShare={true} />
}