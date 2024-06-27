# 人体生物节律计算器
---

<!-- <template> -->
  <div data-clarity-unmask="true">
    <p nm><el-date-picker
      v-model="birthDate"
      type="date"
      placeholder="选择出生日期"
    ></el-date-picker></p>
    <p nm><el-date-picker
      v-model="targetDate"
      type="date"
      placeholder="选择目标日期"
    ></el-date-picker></p>
    <p nm><el-button @click="calculateBiorhythm">计算</el-button></p>
    <div v-if="result">
      <p>{{ result.day}}天</p>
      <p>体力周期: {{ result.physicalCycle }}</p>
      <p>情绪周期: {{ result.emotionalCycle }}</p>
      <p>智力周期: {{ result.intellectualCycle }}</p>
    </div>
    <div style="width:100%;overflow-x:auto;height:360px;">
      <div v-show="result" id="chart" style="width: 800px;height:360px;"></div>
    </div>
  </div>

## 计算方法

### 计算天数

计算人体生物节律的方法是首先将出生时间到想了解的生理节律状态的某月某日的总天数计算出来，然后将总天数分别除以23，28和33，所得商数中的整数分别表示已经度过的周期数，而从商数中的余数天数就可以断定要了解的那天的生物节率曲线中的位蹬。由此可以知道体力、情绪和智力在要了解的那天所处的状态（高潮期、低潮期或临界期）。

计算通式为：

$$
X = 365 \times A \pm B + C
$$

式中，$X$为从出生日到计算日生活的总天数；$A$为预测年份与出生年份之差；$B$为本年生日到预测日的总天数，如未到生日则用“$-$”，已过生日则用“$+$"；$C$为从出生以来到计算日的总闰年数，即$C=\frac{A}{4}$所得的整数。

> 本程序采用其他等效方法计算


### 绘制正弦曲线

$$
A = 100 \\
$$
$$
T = \begin{cases}
23 , type=体力\\
28 , type=情绪\\
33 , type=智力
\end{cases}
$$ 
$$
\omega = \frac{2\pi}{T} 
$$
$$
f(x) = A\sin(\omega X)
$$


## 注意

（1）人的生物节律是统计规律，所指的都是它们的倾向性和可能性，并不意味着是必然的结果；由于人体的复杂性和人的个体差异，对每个个人并不一定如此。

（2）人的体力、情绪、智力的状态，还要受到外界环境和自己身体健康情况的影响，决定人的行为的因素很多很多，外界刺激(如，当事人在心理上或生理上受到强烈打击或大喜大乐)或自己的强意志力控制，对事情发生的影响也许更大。一般说来，上述影响往往超过生物节律的影响。当然，也可能正是由于人体生物节律的存在，而扩大或缩小了外界刺激和本人意志力的这种影响。人们掌握了自已的三节律，正确地运用，除了有利于科学地安排工作（特别是对于管理者安排下属进行安全有关的工作时做到心中有数）以外，还可能起到改善自己心理状态的良好作用。这里，显然也有一个正确对待的问题，如果知道自己处于某种双重或三重临界期而担心会出什么事，增加了心理紧张程度，就可能反而容易发生差错。反之，如果知道自己处于某种节律的高潮期而麻痹大意也容易发生差错。
> 参考 [人体生物节律 baike.baidu.com](https://baike.baidu.com/item/%E4%BA%BA%E4%BD%93%E7%94%9F%E7%89%A9%E8%8A%82%E5%BE%8B/9883446)

<!-- </template> -->

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { ElDatePicker } from 'element-plus';
  import * as echarts from 'echarts';

  const birthDate = ref(null);
  const targetDate = ref(null);
  const result = ref(null);
  const DAY = 60;

  const calculateBiorhythm = () => {
    if (!birthDate.value || !targetDate.value) return;
    window.clarity("event", `${birthDate.value} ${new Date().getTime()}`);
    window.clarity("set", "experiment", "experiment1") 
    const X = calculateDaysSinceBirth(birthDate.value, targetDate.value);

    const physicalCycle = calculateCycle(X, 23);
    const emotionalCycle = calculateCycle(X, 28);
    const intellectualCycle = calculateCycle(X, 33);

    result.value = {
      day: X,
      physicalCycle: `第${physicalCycle.cycle + 1}周期第${physicalCycle.day + 1}天/23`,
      emotionalCycle: `第${emotionalCycle.cycle + 1}周期第${emotionalCycle.day + 1}天/28`,
      intellectualCycle: `第${intellectualCycle.cycle + 1}周期第${intellectualCycle.day + 1}天/33`,
    };

    drawChart([physicalCycle, emotionalCycle, intellectualCycle]);
  }
  const calculateDaysSinceBirth = (birthDate, targetDate) => {  
      const birth = new Date(birthDate);  
      const target = new Date(targetDate);  
      const millisecondsPerDay = 24 * 60 * 60 * 1000; // 一天有24小时，每小时60分钟，每分钟60秒，每秒1000毫秒  
      return Math.floor((target - birth) / millisecondsPerDay);  
  };


  const calculateCycle = (X, period) => {
    return {
      cycle: Math.floor(X / period),
      day: X % period,
      period,
      all:X,
    };
  };
  let chart;
  const drawChart = (cycles) => {
    chart = echarts.init(document.getElementById('chart'));

    const option = {
      grid: {
        containLabel: true
      },
      tooltip: {  
        trigger: 'axis',  
        axisPointer: {  
          type: 'cross'  
        }  
      },
      xAxis: {
        type: 'category',
        data: Array.from({length: DAY}, (_, i) => {
          const date = new Date(targetDate.value.getTime() + i * 24 * 60 * 60 * 1000);
          return `${date.getMonth() + 1}-${date.getDate()}`;
        })
      },
      yAxis: {
        type: 'value',
        min: -100,
        max: 100
      },
      series: cycles.map((cycle, i) => ({
        data: Array.from({length: DAY}, (_, j) => {
          let A = 100;
          let T = cycle.period
          let w = (2 * Math.PI) / T;
          return Math.floor(A*Math.sin(w*(cycle.all+j)) *10)/10
        }),
        type: 'line',
        smooth: true,
        name: ['体力', '情绪', '智力'][i]
      }))
    };

    chart.setOption(option);
  };

  onMounted(() => {
    if (birthDate.value && targetDate.value) {
      calculateBiorhythm();
    }
    // window.addEventListener('resize', () => {
    //   chart.resize();
    // });
  });
  // onUnmounted(() => {
  //   window.removeEventListener('resize', () => {
  //     chart.resize();
  //   });
  // });
</script>


<style scoped>
[nm]{
  margin:5px;
}
</style>