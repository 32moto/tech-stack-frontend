import styled from 'styled-components'
import Image from 'next/image'
import { CompanyStackType } from "@/types/company";

interface Props {
  stacks: CompanyStackType[]
}

const CompanyStackList = ({stacks}: Props) => {

  return (
    <div>
      <Ul>
        {stacks.map(stack => (
          <Li key={stack.id}>
            <img src={stack.defaultImagePath} height={45} width={45}></img>
            <div>{stack.name}</div>
          </Li>
        ))}
      </Ul>
    </div>
  )
}

export default CompanyStackList

const Ul = styled.ul`
  display: flex;
  margin: 0px 40px;
`

const Li = styled.li`
  width: 100px;
`
