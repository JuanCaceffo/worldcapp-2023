/* esta interfaz nos sirve para mockar la busuqeda que se haria
en el repo de user del backend (se va a ir extendiendo en medida
de lo necesario*/
export interface completeUserMock {
  userID: number
  userName: string
  password: string
}

export const MockedRegistredUsers: completeUserMock[] = [
  {
    userID: 1,
    userName: 'juanchito',
    password: '1234'
  },
  {
    userID: 1,
    userName: 'soledad',
    password: '4321'
  }
]
