/* eslint-disable @typescript-eslint/no-explicit-any */
export function mostrarError(component: any, error: any): void {
  const originalError = error.error
  let errorMessage = originalError.message

  console.log(originalError)

  if (originalError.status === 0) {
    errorMessage =
      'No hay conexión con el backend, revise si el servidor remoto está levantado.'
  } else if (originalError.status >= 500) {
    errorMessage =
      'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
  } else if (originalError.status >= 400 && originalError.status < 500) {
    errorMessage =
      error.message ||
      'Se ha producido un error en la solicitud. Por favor, verifique los datos proporcionados y vuelva a intentarlo.'
  }

  console.log(component)

  component.errors.push(errorMessage)

  setTimeout(() => {
    component.errors.length = 0
  }, 5000)
}
