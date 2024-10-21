import { ErrorCodeEnums } from 'core/enum'
import { ProductsResponse } from 'core/services'
import { getToken } from 'core/utils'
import { createContext, ReactNode, useMemo, useState } from 'react'

export type Product = {
  id: number
  nameProduct: string
  description: string
  price: number
  amount: number
  codeProduct: string
  images: Images[]
  category: Category
  presentation?: string
  brand?: string
  photoProduct?: string
}

export interface Images {
  id: number
  imageUrl: string
}

type Category = {
  id: number
  nameCategory?: string
  descriptionCategory?: string
}

type AppContextType = {
  alert: AlertType
  setAlert: (alert: AlertType) => void
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void
  showErrorSnackbar: (code: string) => void
  products: Product[]
  setProducts: (products: Product[]) => void
  shoppingCar: Product[]
  setShoppingCar: (shoppingCar: Product[]) => void | ((shoppingCar: Product[]) => Product[])
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
  const [products, setProducts] = useState<ProductsResponse[]>([])
  const [shoppingCar, setShoppingCar] = useState<Product[]>([])

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
      shoppingCar,
      setShoppingCar,
    }),
    [alert, isLogged, products, shoppingCar]
  )

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}
