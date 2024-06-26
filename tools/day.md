<!-- <template>   -->
  <div>  
    <el-date-picker  
      v-model="birthDate"  
      type="date"  
      placeholder="选择出生日期"  
      @change="calculateBiorhythm"  
    ></el-date-picker>  
    <div v-if="result">  
      <p>体力周期: {{ result.physicalCycle }}</p>  
      <p>情绪周期: {{ result.emotionalCycle }}</p>  
      <p>智力周期: {{ result.intellectualCycle }}</p>  
    </div>  
  </div>  
<!-- </template>   -->
  
<script>  
import { ref, computed } from 'vue';  
  
export default {  
  setup() {  
    const birthDate = ref(null);  
    const result = ref(null);  
  
    const calculateBiorhythm = () => {  
      if (!birthDate.value) return;  
  
      const targetDate = new Date(); // 假设目标日期为当前日期  
      const daysSinceBirth = (targetDate - birthDate.value) / (1000 * 60 * 60 * 24);  
      const leapYears = Math.floor((targetDate.getFullYear() - birthDate.value.getFullYear()) / 4) -  
        Math.floor((birthDate.value.getMonth() > 2 ? birthDate.value.getFullYear() : birthDate.value.getFullYear() - 1) / 4) +  
        (birthDate.value.getMonth() === 2 && birthDate.value.getDate() >= 29 ? 1 : 0);  
  
      const X = Math.floor(365 * (targetDate.getFullYear() - birthDate.value.getFullYear()) + leapYears + (targetDate.getDate() - birthDate.value.getDate()));  
  
      const physicalCycle = {  
        cycle: Math.floor(X / 23),  
        day: X % 23,  
      };  
  
      const emotionalCycle = {  
        cycle: Math.floor(X / 28),  
        day: X % 28,  
      };  
  
      const intellectualCycle = {  
        cycle: Math.floor(X / 33),  
        day: X % 33,  
      };  
  
      result.value = {  
        physicalCycle: `第${physicalCycle.cycle + 1}周期第${physicalCycle.day + 1}天`,  
        emotionalCycle: `第${emotionalCycle.cycle + 1}周期第${emotionalCycle.day + 1}天`,  
        intellectualCycle: `第${intellectualCycle.cycle + 1}周期第${intellectualCycle.day + 1}天`,  
      };  
    };  
  
    return {  
      birthDate,  
      result,  
      calculateBiorhythm,  
    };  
  },  
};  
</script>  
  
<style scoped>  
/* 添加样式 */  
</style>