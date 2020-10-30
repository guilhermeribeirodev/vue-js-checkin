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
    age: function () {
        console.log(this.dob)
        var dobMilis = new Date(this.dob)
        var today = new Date()

        return (today - dobMilis) / 36000 / 365
    }
  },
};
</script>