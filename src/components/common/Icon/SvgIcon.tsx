import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons'

type IconType = 'github' | 'twitter' | 'pen' | 'plus'

interface Props {
  iconType: IconType
}

const getIcon = (type: IconType) => {
  switch(type) {
    case 'github':
      return faGithub
    case 'twitter':
      return faTwitter
    case 'pen':
      return faPen
    case 'plus':
      return faPlus
  }
}

export const SvgIcon = ({iconType}: Props) => {
  const icon = getIcon(iconType)
  return <FontAwesomeIcon icon={icon} />
}