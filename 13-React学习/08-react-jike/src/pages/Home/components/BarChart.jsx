// 柱状图组件
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
const BarChart = ({ title }) => {
    const chartRef = useRef(null);
  useEffect(() => {
    // 保证dom可用，才渲染

    // 获取渲染图表的dom节点
    const chartDom = chartRef.current;
    // 初始化图表实例
    const myChart = echarts.init(chartDom);
    // 配置图表参数
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };
    // 使用配置参数渲染图表实例
    option && myChart.setOption(option);
  }, [])
    return (
      <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
  )
}
export default BarChart