import StackInfo from '@/components/domains/stack/stackInfo/StackInfo'
import { useGetStack } from './hooks'

interface Props {
  id: string
}

export const StackInfoContainer = ({id} : Props) => {
  const {stack, error, loading} = useGetStack({ id })
  if(error) return <p>error</p>
  if(loading) return <p>loading...</p>
  if(!stack) return null
  return <StackInfo stackName={stack.name} icon={stack.iconPath} />
}