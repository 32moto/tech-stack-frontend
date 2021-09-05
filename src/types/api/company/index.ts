export type GetCompanyResponseType = {
  company: {
    id: string
    name: string
    defaultImagePath: string
    stacks: CompanyStackType[]
  }
}

export interface GetCompanyVarsType {
  id: string
}

export interface CompanyStackType {
  id: string
  name: string
  defaultImagePath: string
}