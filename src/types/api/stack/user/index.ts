export interface GetStackUsersParamsType {
  id: string
}

interface StackUser {
  id: string
  name: string
  imagePath: string
}

export type GetStackUsersResponseType = {
  getStack: {
    users : StackUser[]
  }
}

export interface GetStackUsersVarsType {
  id: string
}