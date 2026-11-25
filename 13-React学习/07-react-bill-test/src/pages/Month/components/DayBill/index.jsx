import classNames from 'classnames'
import './index.scss'
import { useMemo, useState } from 'react'
import { billTypeToName, billTypeToIcon } from '@/contants/index'

const DailyBill = ({ date, billList }) => {
  const DayResult = useMemo(() => {
    const pay = billList.filter(item => item.type === 'pay').reduce((pre, cur) => pre + cur.money, 0)
    const income = billList.filter(item => item.type === 'income').reduce((pre, cur) => pre + cur.money, 0)
    const total = income + pay
    return {
      pay,
      income,
      total
    }
  }, [billList])

  // 控制展开收起
  const [isShow, setIsShow] = useState(false)
  
  return (
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          {/* 展开收起图标 */}
          <span className={classNames('arrow', isShow && 'expand')} onClick={() => setIsShow(!isShow)}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{DayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{DayResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{DayResult.total.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {/* 单日列表 */}
      <div className="billList" style={{ display: isShow ? 'block' : 'none' }}>
        {billList.map(item => {
          const Icon = billTypeToIcon[item.useFor]
          return (
            <div className="bill" key={item.id}>
              {/* 图标 */}
              {Icon ? <Icon /> : null}
              {/* 详情 */}
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames('money', item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DailyBill