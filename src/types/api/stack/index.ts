export interface GetStackParamsType {
  id: string
}

export interface GetStackResponseType {
  getStack: {
    id: string
    name: string
    imagePath: string
  }
}

export interface GetStackVarsType {
  id: string
}