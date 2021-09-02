// import { authRepository } from "@/repository/authRepository"

export const useCurrentUser = () => {
  // const { data } = authRepository().useGetCurrentUser()
  return {
    // currentUser: data
    currentUser: {id: '1', name: 'yunboo', iconPath: 'https://pbs.twimg.com/profile_images/1120701526228340736/wz03UhKQ_400x400.jpg'}
  }
}