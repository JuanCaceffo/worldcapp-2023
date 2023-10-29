export const toTitleCase = (value:string) => value.split(' ').map((word:string) => word[0].toUpperCase() + word.slice(1)).join(' ')

export const normalizeString = (value:string) => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ñ/g, 'n')
    .replace(/[^a-zA-Z0-9\s]/g, '')
}

export const toParam = (value:string) => {
  value = normalizeString(value)
  return toTitleCase(value).replace(/\s/g, '')
}