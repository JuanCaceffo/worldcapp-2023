/* eslint-disable @typescript-eslint/no-explicit-any */
export function mostrarError(component: any, error: any): void {
  const originalError = error.error ?? error
  let errorMessage = originalError.message

  if (error.status === 0) {
    errorMessage =
      'No hay conexión con el backend, revise si el servidor remoto está levantado.'
  } else if (error.status >= 400 && error.status <= 500) {
    errorMessage =
      'Se ha producido un error en la solicitud. Por favor, verifique los datos proporcionados y vuelva a intentarlo.'
  } else if (error.status >= 500) {
    errorMessage =
      'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
  }

  component.errors.push(errorMessage)
  setTimeout(() => {
    component.errors.length = 0
  }, 5000)
}
