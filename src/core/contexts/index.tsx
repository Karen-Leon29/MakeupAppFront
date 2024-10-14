import { ErrorCodeEnums } from 'core/enum'
import { getToken } from 'core/utils'
import { createContext, ReactNode, useMemo, useState } from 'react'

export type Product = {
  id: number
  nameProduct: string
  description: string
  price?: number
  amount?: number
  codeProduct?: string
  photoProduct?: string[]
  category?: Category
}

type Category = {
  id: number
}

type AppContextType = {
  alert: AlertType
  setAlert: (alert: AlertType) => void
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void
  showErrorSnackbar: (code: string) => void
  products: Product[]
  setProducts: (products: Product[]) => void
}

type AlertType = {
  message?: string
  title?: string
  severity?: 'error' | 'warning' | 'info' | 'success'
}

export const AppContext = createContext<AppContextType>(Object({}))

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<AlertType>(Object({}))
  const [isLogged, setIsLogged] = useState<boolean>(Boolean(getToken()))
  const [products, setProducts] = useState<Product[]>([])

  const showErrorSnackbar = (code: string) => {
    if (ErrorCodeEnums[code as keyof typeof ErrorCodeEnums])
      setAlert({ message: ErrorCodeEnums[code as keyof typeof ErrorCodeEnums], severity: 'error' })
  }

  const contextValue = useMemo(
    () => ({
      alert,
      setAlert,
      isLogged,
      setIsLogged,
      showErrorSnackbar,
      products,
      setProducts,
    }),
    [alert, isLogged, products]
  )

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}
