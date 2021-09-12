export interface GetStackUsersParamsType {
  id: string
}

export interface StackUserType {
  id: string
  name: string
  imagePath: string
}

export type GetStackUsersResponseType = {
  getStack: {
    users : StackUserType[]
  }
}

export interface GetStackUsersVarsType {
  id: string
}