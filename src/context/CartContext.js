import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(i => i.id === action.item.id)
      if (existing) {
        return state.map(i => i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...state, { ...action.item, quantity: 1 }]
    }
    case 'REMOVE':
      return state.filter(i => i.id !== action.id)
    case 'SET_QTY':
      return state.map(i => i.id === action.id ? { ...i, quantity: Math.max(1, action.qty) } : i)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [])

  function addItem(item) { dispatch({ type: 'ADD', item }) }
  function removeItem(id) { dispatch({ type: 'REMOVE', id }) }
  function setQuantity(id, qty) { dispatch({ type: 'SET_QTY', id, qty }) }
  function clearCart() { dispatch({ type: 'CLEAR' }) }

  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, count, total, addItem, removeItem, setQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
