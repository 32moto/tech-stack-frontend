import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

type IconType = 'github' | 'twitter'

interface Props {
  iconType: IconType
}

const getIcon = (type: IconType) => {
  switch(type) {
    case 'github':
      return faGithub
    case 'twitter':
      return faTwitter
  }
}

export const SvgIcon = ({iconType}: Props) => {
  const icon = getIcon(iconType)
  return <FontAwesomeIcon icon={icon} />
}