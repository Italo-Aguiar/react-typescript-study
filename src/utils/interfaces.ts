export interface FormProps extends ObjectIndex {
  onSubmit (data: object): void,
  onBack?: () => void
}

export interface ValidatorResponse extends ObjectIndex {
  valid: boolean,
  message: string
}

export interface ObjectIndex {
  [key: string]: any
}