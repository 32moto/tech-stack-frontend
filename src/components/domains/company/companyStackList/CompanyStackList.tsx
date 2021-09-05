import styled from 'styled-components'
// import component
import { CompanyStackListItemContainer } from "@/components/domains/company/companyStackListItem/CompanyStackListItemContainer";
// import types
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
            <CompanyStackListItemContainer stack={stack}/>
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
