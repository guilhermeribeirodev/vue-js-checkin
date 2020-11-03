<template>
  
  <label for="full-name">Full name</label>
  <input name="full-name" class="full-name" v-model="fullName" type="text" />
  <label for="ages">DOB</label>
  <input class="dob"  v-model="dob" type="text" />
  <label for="table-code">Table</label>
  <input class="table-code" v-model="tableCode" type="number" />
  <button @click="validate" :disabled="isDisabled">Checkin</button>
</template>

<script>
export default {
  data () {
    return {
      fullName: '',
      dob: '',
      tableCode: 0,
      errors: []
    };
  },
  methods: {
      validate () {
          if(this.fullName === ''){
            this.errors.push('User full name should not be empty!')
            throw 'User full name should not be empty!';
          }
          
      }
  },
  computed: {
    isDisabled () {
      return this.fullName === '' || this.dob === '';
    },
    ageCheck() {
        
        var dobMilis = new Date(this.dob)
        var today = new Date()
        var diff = (today.getTime() - dobMilis.getTime()) / 1000
        diff /= (60 * 60 * 24)
        var ageInYears = Math.abs(Math.round(diff/365.25))

        return ageInYears >= 18
    }
  }
};
</script>