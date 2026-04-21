import { createContext, useContext, useReducer, useEffect } from 'react'

const initialState = {
  type: null,
  currentIndex: 0,
  answers: {},
  archetype: null,
  percentage: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...initialState, type: action.testType }
    case 'ANSWER':
      return { ...state, answers: { ...state.answers, [action.questionId]: action.optionIndex } }
    case 'NEXT':
      return { ...state, currentIndex: state.currentIndex + 1 }
    case 'BACK':
      return { ...state, currentIndex: Math.max(0, state.currentIndex - 1) }
    case 'COMPLETE':
      return { ...state, archetype: action.archetype, percentage: action.percentage }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

const STORAGE_KEY = 'noskha_test_state'

const TestContext = createContext(null)

export function TestProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : initialState
    } catch {
      return initialState
    }
  })

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state])

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  )
}

export function useTest() {
  const ctx = useContext(TestContext)
  if (!ctx) throw new Error('useTest must be used within TestProvider')
  return ctx
}
