export type UserType = {
  id: number
  name: string
  gender: string
  occupation: string
}

export const users: UserType[] = [
  {
    id: 1,
    name: 'Giwa Jossy',
    gender: 'Male',
    occupation: 'Software Engineer'    
  },
  {
    id: 2,
    name: 'Giwa Rachael',
    gender: 'Female',
    occupation: 'Data Scientist'    
  }
]