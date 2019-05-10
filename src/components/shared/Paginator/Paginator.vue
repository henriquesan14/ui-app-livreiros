<template>
  <nav aria-label="Page navigation example ">
      <ul class="pagination justify-content-center pagination-sm mt-2">
        <li class="page-item" v-if="users.paginaAtual >0">
          <a @click.prevent.stop.prevent="previous()" class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="(n, index) in (users.totalPage+1)" :key="index" v-bind:class="{'active': index===users.paginaAtual}">
          <a @click.prevent.stop.prevent="goPage(index)" class="page-link" href="#">{{n}}</a>
        </li>
        <li @click.prevent.stop.prevent="next()" class="page-item" v-if="users.paginaAtual < (users.totalPage -1)">
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
    users: {
      type: Object,
      required: true
    }   
  },
  methods: {
    goPage(index){
      this.$emit('go-page', index);
    },
    next(){
      this.$emit('next');
    },
    previous(){
      this.$emit('previous');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
