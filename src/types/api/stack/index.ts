import { StackCompanyType } from "./company";
import { StackUserType } from "./user";
import { StackType } from "@/types/stack";

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

export interface GetStackAndUsersParamsType {
  id: string
}

export interface GetStackAndUsersResponseType {
  stack: {
    id: string
    name: string
    imagePath: string
    users: StackUserType[]
  }
}

export interface GetStackAndUsersVarsType {
  id: string
}

export interface GetStackAndCompaniesParamsType {
  id: string
}

export interface GetStackAndCompaniesResponseType {
  stack: {
    id: string
    name: string
    imagePath: string
    companies: StackCompanyType[]
  }
}

export interface GetStackAndCompaniesVarsType {
  id: string
}

export interface GetStacksResponseType {
  stacks: StackType[]
}