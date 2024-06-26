<!-- <template> -->
  <div>
    <el-date-picker
      v-model="birthDate"
      type="date"
      placeholder="选择出生日期"
      @change="calculateBiorhythm"
      :default-value="new Date(2008, 5, 1)"
    ></el-date-picker>
    <el-date-picker
      v-model="targetDate"
      type="date"
      placeholder="选择目标日期"
      @change="calculateBiorhythm"
      :default-value="new Date()"
    ></el-date-picker>
    <div v-if="result">
      <p>{{ result.day}}天</p>
      <p>体力周期: {{ result.physicalCycle }}</p>
      <p>情绪周期: {{ result.emotionalCycle }}</p>
      <p>智力周期: {{ result.intellectualCycle }}</p>
    </div>
    <div id="chart" style="width: 600px;height:400px;"></div>
  </div>
<!-- </template> -->

<script setup>
  import { ref, onMounted } from 'vue';
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
  // const calculateDaysSinceBirth = (birthDate, targetDate) => {
  //   const daysSinceBirth = (targetDate - birthDate) / (1000 * 60 * 60 * 24);
  //   const leapYears = Math.floor((targetDate.getFullYear() - birthDate.getFullYear()) / 4) -
  //     Math.floor((birthDate.getMonth() > 2 ? birthDate.getFullYear() : birthDate.getFullYear() - 1) / 4) +
  //     (birthDate.getMonth() === 2 && birthDate.getDate() >= 29 ? 1 : 0);

  //   return Math.floor(365 * (targetDate.getFullYear() - birthDate.getFullYear()) + leapYears + (targetDate.getDate() - birthDate.getDate()));
  // };

  const calculateCycle = (X, period) => {
    return {
      cycle: Math.floor(X / period),
      day: X % period,
      period,
      all:X,
    };
  };

  const drawChart = (cycles) => {
    const chart = echarts.init(document.getElementById('chart'));

    const option = {
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
          return Math.floor(A*Math.sin(w*(cycle.all+j)+phi) *10)/10
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
  });
</script>
