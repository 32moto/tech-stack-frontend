export interface CompanyType {
  id: string
  name: string
  defaultImagePath: string
  stack: CompanyStackType[]
}

export interface GetCompanyParamsType {
  id: string
}

export interface CompanyStackType {
  id: string
  name: string
  defaultImagePath: StaticImageData
}