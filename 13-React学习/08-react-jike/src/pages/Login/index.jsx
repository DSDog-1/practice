import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'




const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      // 触发异步action
      await dispatch(fetchLogin(values))
      // 提示用户
      message.success('登录成功')
      // 登录成功后跳转到首页
      navigate('/')
    } catch (error) {
      console.error('登录失败:', error)
      message.error(error?.response?.data?.message || '登录失败，请稍后重试')
    }
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        {/* 失焦验证 */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          {/* name与后端接口参数名一致 */}
          <Form.Item name="mobile"
            rules={[
              // 多条校验按顺序执行
              {
                required: true,
                message: '请输入手机号!'
              },
              // 手机号格式验证
              {
                pattern: /^1[3456789]\d{9}$/,
                message: '请输入正确的手机号!'
              }
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="code"
            rules={[{ required: true, message: '请输入验证码!' }]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login