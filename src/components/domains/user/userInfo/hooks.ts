import { userRepository } from "@/repository/userRepository"

export const useGetUser = ({id}: {id: string}) => {
  // const { data, loading, error } = userRepository().useGetUser({id})
  return {
    data: {
      name: 'yunboo',
      iconPath: 'https://pbs.twimg.com/profile_images/1120701526228340736/wz03UhKQ_400x400.jpg'
    },
    loading: false,
    error: undefined
  }
}