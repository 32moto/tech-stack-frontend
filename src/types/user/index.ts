import { StackType } from "./stack";

export interface UserType {
  id: string
  name: string
  imagePath: string | null
  stacks: StackType[]
}