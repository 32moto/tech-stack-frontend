export interface GetStackCompaniesParamsType {
  id: string
}

interface StackCompanies {
  id: string
  name: string
  imagePath: string
}

export type GetStackCompaniesResponseType = {
  getStack: {
    companies: StackCompanies[]
  } 
}

export interface GetStackCompaniesVarsType {
  id: string
}