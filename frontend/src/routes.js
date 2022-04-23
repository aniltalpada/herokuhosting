import React from 'react'

const Login = React.lazy(() => import('./Login'))
const routes = [
  { path: '/Login', name: 'Login', element: Login },
]

export default routes
