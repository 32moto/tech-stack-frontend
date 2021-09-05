// user
export interface GetUserParamsType {
  id: string
}

export interface GetUserResponseType {
  id: string,
  name: string
  iconPath: string | null
}

export interface GetUserVarsType {
  id: string
}

// user stacks
export interface GetUserStacksParamsType {
  id: string
}

export interface GetUserStacksResponseType {
  stacks: StackType[]
}

interface StackType {
  id: string,
  name: string
  iconPath: string | null
}

export interface GetUserStacksVarsType {
  id: string
}