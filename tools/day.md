<!-- <template> -->
  <div>
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
    <div v-show="result" style="width:100%;overflow-x:auto;">
      <div id="chart" style="width: 600px;height:400px;"></div>
    </div>
  </div>
<!-- </template> -->

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { ElDatePicker } from 'element-plus';
  import * as echarts from 'echarts';

  const birthDate = ref(null);
  const targetDate = ref(null);
  const result = ref(null);

  const calculateBiorhythm = () => {
    if (!birthDate.value || !targetDate.value) return;

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
        data: Array.from({length: 30}, (_, i) => {
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
        data: Array.from({length: 30}, (_, j) => {
          let A = 100;
          let T = cycle.period
          let w = (2 * Math.PI) / T;
          let phi = 0 * w * (2 * Math.PI) * (cycle.day / cycle.period);
          return Math.floor(A*Math.sin(w*(cycle.all+j)) *10)/10
        }),
        type: 'line',
        smooth: true,
        name: ['身体', '情绪', '智力'][i]
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