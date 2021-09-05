import { Information } from '@/components/common/Information'

interface Props {
  userName: string
  imagePath: string | null
}

const defaultUserImg = 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'

export const UserInfo = ({userName, imagePath} : Props) => {
  return <Information name={userName} icon={imagePath || defaultUserImg} iconShape={'circle'} isShare={true} />
}