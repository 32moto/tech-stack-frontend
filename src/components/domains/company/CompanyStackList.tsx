import styled from 'styled-components'
import Image from 'next/image'
import { CompanyStackType } from "@/types/company";

interface Props {
  stacks: CompanyStackType[]
}

const CompanyStackList = ({stacks}: Props) => {
  // 一旦Mockデータを流す
  return (
    <div>
      <Ul>
        {stacks.map(stack => (
          <Li key={stack.id}>
            <Image src={stack.defaultImagePath} height={45} width={45}></Image>
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
