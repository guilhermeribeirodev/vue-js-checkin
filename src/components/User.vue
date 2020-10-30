<template>
  <h1>Welcome to the pub</h1>
  <label for="userfullname">Full name</label>
  <input name="userfullname" class="userfullname" v-model="userfullname" type="text" />
  <label for="ages">DOB</label>
  <input class="dob"  v-model="dob" type="text" />
  <button :disabled="isDisabled">Checkin</button>
</template>

<script>
export default {
  data: function () {
    return {
      userfullname: '',
      dob: ''
    };
  },
  computed: {
    isDisabled: function () {
      return this.userfullname === '' || this.dob === '';
    },
    ageCheck: function () {
        
        var dobMilis = new Date(this.dob)
        var today = new Date()
        var diff = (today.getTime() - dobMilis.getTime()) / 1000
        diff /= (60 * 60 * 24);
        var ageInYears = Math.abs(Math.round(diff/365.25));

        console.log(ageInYears)

        return ageInYears >= 18
    }
  },
};
</script>