<template>
  <div>
    <Header />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import { mapActions } from 'vuex'

export default {
components: {
  Header
},
methods: {
  ...mapActions([
  'fetchData',
  'inputValue'
  ])
},
created() {
  this.fetchData();
  this.inputValue();
}
}

</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: Inter, 'sans-serif';
  overflow-x: hidden;
  color: #293845;
}

</style>
