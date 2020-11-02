<template>
  <h1>Welcome to the pub</h1>
  <label for="userfullname">Full name</label>
  <input name="userfullname" class="userfullname" v-model="userfullname" type="text" />
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
      userfullname: '',
      dob: '',
      tableCode: 0
    };
  },
  methods: {
      validate () {
          if(this.userfullname === ''){
            throw 'User full name should not be empty!';
          }
          
      }
  },
  computed: {
    isDisabled () {
      return this.userfullname === '' || this.dob === '';
    },
    ageCheck() {
        
        var dobMilis = new Date(this.dob)
        var today = new Date()
        var diff = (today.getTime() - dobMilis.getTime()) / 1000
        diff /= (60 * 60 * 24);
        var ageInYears = Math.abs(Math.round(diff/365.25));

        return ageInYears >= 18
    }
  }
};
</script>