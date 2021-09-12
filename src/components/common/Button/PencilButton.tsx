import styled from "styled-components"
import { COLORS } from "@/constants/Styles"
import { SvgIcon } from "@/components/common/Icon"

interface Props {
  onClick: () => void
}

export const PencilButton = ({ onClick }: Props) => {
  return (
    <EditButton onClick={onClick}>
      <SvgIcon iconType='pen' />
    </EditButton> 
  )
}

const EditButton = styled.button`
  position: absolute;
  top: -16px;
  right: 0;
  color: ${COLORS.GRAY[500]};
`