export interface GetCurrentUserResponseType {
  id: string
  name: string
  iconPath: string
}

export interface MutateCurrentUserResponseType {
  id: string
  name: string
  iconPath: string | null
}

export interface MutateCurrentUserVarsType {
  id: string
  name: string
  iconPath: string | null
}