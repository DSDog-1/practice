import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>一级路由Layout</h1>
        <Link to="/Layout">Board</Link>
        <Link to="/Layout">Board</Link>
        <Link to="/Layout/about">About</Link>
      {/* 配置二级路由出口 */}
      <Outlet />

    </div>
  )
}
export default Layout