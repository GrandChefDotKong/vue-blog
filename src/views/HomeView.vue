<template>
  <div class="home">
    <p>{{ `name: ${name}, age: ${age}` }}</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup() {
    let name = 'mario';
    let age = 30;

    return { name, age }
  }
}
</script>
