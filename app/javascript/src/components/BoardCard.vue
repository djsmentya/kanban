<template>
  <div class="col-sm-3">
    <router-link :to="boardPath" class="card">
      <div class="card-body">
        <h5 class="card-title text-center"> {{name}} </h5>
      </div>
    </router-link>
  </div>
</template>

<script charset="utf-8">
export default {
  name: 'board-card',
  props: {
    name: String,
    id: Number
  },
  computed: {
    boardPath() {
      return `/board/${this.id}`
    }
  }
}
</script>

