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
        path: 'quiz',
        element: <Quiz />,
        //loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
    //  {
    //    path: '/:id',
    //    element: <BookDetails />,
    //    loader: ({ params }) =>
    //      fetch(`https://api.itbook.store/1.0/books/${params.id}`),
    //  },
    ],
  },
])

// export default router
