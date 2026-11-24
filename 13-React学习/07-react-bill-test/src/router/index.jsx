import Layout from '@/pages/Layout/index.jsx'
import Month from '@/pages/Month/index.jsx'
import New from '@/pages/New/index.jsx'
import Year from '@/pages/Year/index.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/month',
        element: <Month />,
      },

      {
        path: '/year',
        element: <Year />,
      },
    ],
  },
  {
    path: '/new',
    element: <New />,
  },
])
export default router