export interface GetStackCompaniesParamsType {
  id: string
}

export interface StackCompanyType {
  id: string
  name: string
  imagePath: string
}

export type GetStackCompaniesResponseType = {
  getStack: {
    companies: StackCompanyType[]
  } 
}

export interface GetStackCompaniesVarsType {
  id: string
}