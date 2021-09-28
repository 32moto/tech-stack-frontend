import { StackUserType } from "../stack/user";

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

export interface CompanyAndUsersType {
  id: string
  name: string
  imagePath: string
  users: StackUserType[]
}
