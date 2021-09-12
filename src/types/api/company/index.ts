export interface GetCompanyParamsType {
  id: string
}

export type GetCompanyResponseType = {
  company: {
    id: string
    name: string
    imagePath: string
    stacks: CompanyStackType[]
  }
}

export type GetCompanyStackResponseType = {
  company: {
    stacks: CompanyStackType[]
  }
}

export interface GetCompanyVarsType {
  id: string
}

export interface GetCompanyStackVarsType {
  id: string
}

export interface CompanyStackType {
  id: string
  name: string
  imagePath: string
}