import { Icon, Props } from "./Icon";

export const UserIcon = ({src, alt, shape, size}: Props) => {
  const iconPath = src || ''
  return (
    <Icon src={iconPath} alt={alt} shape={shape} size={size} />
  )
}