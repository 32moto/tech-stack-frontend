// user
export interface GetUserParamsType {
  id: string
}

interface UserType {
  id: string,
  name: string
  imagePath: string | null
}

export interface GetUserResponseType {
  getUser: UserType
}

export interface GetUserVarsType {
  id: string
}

// user stacks
export interface GetUserStacksParamsType {
  id: string
}

export interface GetUserStacksResponseType {
  getUser: {
    stacks: StackType[]
  }
}

interface StackType {
  id: string,
  name: string
  imagePath: string
}

export interface GetUserStacksVarsType {
  id: string
}