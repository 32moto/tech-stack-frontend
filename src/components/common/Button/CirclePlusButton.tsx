import styled from "styled-components"
import { COLORS, FONT_SIZES } from "@/constants/Styles"
import { SvgIcon } from "@/components/common/Icon"

interface Props {
  onClick: () => void
}

export const CirclePlusButton = ({ onClick }: Props) => {
  return (
    <AddButton onClick={onClick}>
      <SvgIcon iconType='plus' />
    </AddButton>
  )
}

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 1px;
  width: 60px;
  height: 60px;
  font-weight: bold;
  color: ${COLORS.GRAY[500]};
  font-size: ${FONT_SIZES.FS_20};
`