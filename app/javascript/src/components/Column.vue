<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
  </section>
</template>

<script>
  export default {
    name: 'column',
    props: {
      name: String
    }
  }
</script>
