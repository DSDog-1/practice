import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { createArticleAPI } from '@/apis/article'
import { useState } from 'react'
import { message } from 'antd'
import { useChannel } from '@/hooks/useChannel'

const { Option } = Select

const Publish = () => {
  // 获取频道列表
  const { channelList } = useChannel()
  // 提交表单
  const onFinish = async (formValues) => {
    console.log(formValues)
    // 校验图片数量
    if (imgList.length !== imgType) {
      return message.warning(`请上传${imgType}张图片`)
    }
    const { title, channel_id, content } = formValues
    // 处理数据
    const reqData = {
      title,
      content,
      cover: {
        type: imgType,  // 封面模式
        images: imgList.map(item => item.response.data.url) || []   // 图片列表
      },
      channel_id
    }
    // 提交文章表单
    createArticleAPI(reqData)
  }
  // 上传图片
  const [imgList, setImgList] = useState([])
  const onChange = (value) => {
    console.log('上传图片中', value)
    setImgList(value.fileList)
  }
  // 处理封面类型改变
  const [imgType, setImgType] = useState(0)
  const onTypeChange = (e) => {
    console.log('封面类型改变', e.target.value)
    setImgType(e.target.value)
  }
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map(item => (
                <Option key={item.id} value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imgType !== 0 && (
              <Upload
                listType="picture-card"  // 选择文件框的样式
                showUploadList  // 是否显示上传列表
                action={'https://geek.itheima.net/v1_0/upload'}
                name="image"
                onChange={onChange}
                maxCount={imgType}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >

            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish