<template>
  <h1>Welcome to the pub</h1>
  <label for="userfullname">Full name</label>
  <input name="userfullname" class="userfullname" v-model="userfullname" type="text" />
  <label for="ages">Age</label>
  <input class="age"  v-model="age" type="number" />
  <button :disabled="isDisabled">Checkin</button>
</template>

<script>
export default {
  data: function () {
    return {
      userfullname: '',
      age: 0
    };
  },
  computed: {
    isDisabled: function () {
      return this.userfullname === '';
    },
  },
};
</script>