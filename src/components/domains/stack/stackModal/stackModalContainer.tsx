import { getStacks } from "@/application/stack/usecase/getStacks";
import StackModal from "@/components/domains/stack/stackModal/stackModal";

const StackModalContainer = () => {
  const { data, loading } = getStacks()
  if(loading) return <p>loading...</p>
  if(!data) return null

  return (
    <StackModal stacks={data.stacks}/>
  )
}

export default StackModalContainer
