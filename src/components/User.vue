<template>
    <h1>Welcome to the pub</h1>
    <input v-model="userfullname" type="text" />
</template>

<script>
export default {

    data: function () {
    return {
      userfullname: ''
    }
  }

}
</script>