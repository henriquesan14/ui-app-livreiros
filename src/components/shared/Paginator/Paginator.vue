<template>
  <nav aria-label="Page navigation example ">
      <ul class="pagination justify-content-center pagination-sm mt-2">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="(n, index) in qtdPag" :key="index" v-bind:class="{'active': index==0}">
          <a class="page-link" href="#">{{n}}</a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    qtdPag: {
      type: Number,
      required: true
    }   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
