import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import _ from 'lodash'
import DailyBill from './components/DayBill/index'

const Month = () => {
  // 按月做数据分组
  const billList = useSelector(state => state.bill.billList)
  const monthGroup = useMemo(() => {
    // return计算的结果
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])
  // 控制弹窗打开和关闭
  const [dataVisible, setDataVisible] = useState(false)
  // 选择的时间
  const [currentDate, setCurrentDate] = useState(() => dayjs(new Date()))
  const [currentMonthList, setMonthList] = useState([])
  // 计算当前月的总金额
  const monthResult = useMemo(() => {
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((pre, cur) => pre + cur.money, 0)
    const income = currentMonthList.filter(item => item.type === 'income').reduce((pre, cur) => pre + cur.money, 0)
    return {
      pay,
      income,
      total: income + pay
    }
  }, [currentMonthList])
  // 初始化当前月的账单列表
  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM')
    // 边界值处理
    if (monthGroup[nowDate]) {
      setMonthList(monthGroup[nowDate])
    }
  }, [monthGroup])
  // 确认回调
  const onConfirm = (date) => {
    setDataVisible(false)
    setCurrentDate(dayjs(date))
    const formatDate = dayjs(date).format('YYYY-MM')
    console.log(formatDate);
    setMonthList(monthGroup[formatDate] || [])
  }
  // 日账单区域
  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
    const keys = Object.keys(groupData)
    return {
      groupData,
      keys
    }
  }, [currentMonthList])

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDataVisible(!dataVisible)}>
            <span className="text">
              {currentDate.format('YYYY')} | {currentDate.format('M')}月账单
            </span>
            {/* 时间切换箭头:根据弹窗打开状态控制类名是否存在 */}
            <span className={classNames('arrow', dataVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dataVisible}
            onCancel={() => setDataVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDataVisible(false)}
            max={new Date()}
          />
        </div>
        {/* 日账单区域 */}
        {
          dayGroup.keys.map((key) => {
            return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
          })
        }
      </div>
    </div >
  )
}

export default Month