export interface FieldProps {  
  label: string
  className: string
  value: string
  shadowed?: string
}

export interface InputFieldProps extends FieldProps {
  placeholder?: string  
}

export interface IconFieldProps extends InputFieldProps{
  icon?: string
  iconFlip?: boolean
}

export interface SelectFieldProps extends FieldProps {
  options?: string[]
}
