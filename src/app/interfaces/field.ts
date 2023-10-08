export interface FieldProps {
  label: string
  name: string
  value: string | number | boolean
  class?: string
  autofocus?: string
  tabindex?: string
  testid?: string
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

export interface ControlFieldProps extends FieldProps {
  type?: string
}
