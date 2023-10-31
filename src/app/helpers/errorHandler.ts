/* eslint-disable @typescript-eslint/no-explicit-any */
export function mostrarError(component: any, error: any): void {
  console.log(error)
  let errorMessage = ''
  if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = error.message ?? ''
  }
  if (error.status === 0) {
    errorMessage =
      'No hay conexión con el backend, revise si el servidor remoto está levantado.'
  } else if (error.status >= 500) {
    errorMessage =
      'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
  } else if (error.status >= 400) {
    errorMessage =
      errorMessage ||
      'Se ha producido un error en la solicitud. Por favor, verifique los datos proporcionados y vuelva a intentarlo.'
  }
  component.errors.push(errorMessage)

  setTimeout(() => {
    component.errors.length = 0
  }, 5000)
}
