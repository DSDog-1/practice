import { Link,useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Login</h1>
      <Link to="/article">文章页</Link>
      <button onClick={()=>navigate('/article')}>跳转到文章</button>
      <button onClick={()=>navigate('/article?id=123&name=张三')}>传参</button>
      <button onClick={()=>navigate('/article/123/张三')}>传参</button>
    </div>
  )
}

export default Login