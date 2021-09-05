import { stackRepository } from "@/repository/stackRepository";
import { StackUserType } from "@/types/stack/user";

// TODO apiと接続出来次第削除
const mockUsers: StackUserType[] = [
  {
    id: '1',
    name: 'yun8boo',
    iconPath: 'https://avatars.githubusercontent.com/u/32152877?v=4'
  },
  {
    id: '2',
    name: 'mmoto',
    iconPath: 'https://avatars.githubusercontent.com/u/30223204?v=4'
  },
  {
    id: '3',
    name: 'takuya wakazono',
    iconPath: 'https://avatars.githubusercontent.com/u/54439200?v=4'
  },
  {
    id: '4',
    name: 'Kengo Teshima',
    iconPath: 'https://avatars.githubusercontent.com/u/61037834?v=4'
  },
  {
    id: '5',
    name: 'nanashi',
    iconPath: null
  },
]

interface Props {
  stackId: string
}

export const useGetStackUsers = ({stackId}: Props) => {
  // const { data, error, loading} = stackRepository().useGetStackCompanies({id: stackId})
  return {
    users: mockUsers,
    error: undefined,
    loading: false
  }
}