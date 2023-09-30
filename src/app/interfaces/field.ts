export interface FieldProps {
  label: string  
  name: string
  value: string 
  class?: string
  autofocus?: string 
  tabindex?: string
}

export interface InputFieldProps extends FieldProps {
  placeholder?: string
  type?: string
  error?: string | undefined
}

export interface IconFieldProps extends InputFieldProps {
  icon?: string
}

export interface SelectFieldProps extends FieldProps {
  options?: string[]
  size?: number
  default?: string
}
