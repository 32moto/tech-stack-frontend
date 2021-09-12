export interface CompanyType {
  id: string
  name: string
  imagePath: string
  stacks: CompanyStackType[]
}

export interface CompanyStackType {
  id: string
  name: string
  imagePath: string
}