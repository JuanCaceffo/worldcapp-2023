import { IconFieldProps, InputFieldProps, SelectFieldProps } from './field'

export interface FormProps {
  title: string
  fieldType: string
  fieldElement: [InputFieldProps | SelectFieldProps | IconFieldProps]
}
