export interface GetCompanyParamsType {
  id: string
}

export interface GetCompanyVarsType {
  id: string
}

export interface CompanyStackType {
  id: string
  name: string
  imagePath: string
}

export type GetCompanyResponseType = {
  company: {
    id: string
    name: string
    imagePath: string
    stacks: CompanyStackType[]
  }
}

// 企業の基本情報とstackを一括取得している為、現状使用なし
export type GetCompanyStackResponseType = {
  company: {
    stacks: CompanyStackType[]
  }
}

export interface GetCompanyStackVarsType {
  id: string
}