import { StackType } from "./stack";

export interface CurrentUserType {
  id: string
  name: string
  imagePath: string | null
}

export interface UserType {
  id: string
  name: string
  imagePath: string | null
  stacks: StackType[]
}