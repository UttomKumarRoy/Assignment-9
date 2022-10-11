import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Blog from './components/Blog'
import Statistics from './components/Statistics'
import Quiz from './components/Quiz'
import Root from './components/Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'quiz/:id',
        element: <Quiz />,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
  },
])

// export default router
