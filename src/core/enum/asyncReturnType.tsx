import { ErrorCodeEnums } from '.'

export type errorType = {
  errors: { code: ErrorCodeEnums; description: string; id: number }
}

export type AsyncReturnType<T = unknown> = Promise<{ data: T | null; error: errorType | null }>
