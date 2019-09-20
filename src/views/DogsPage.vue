<template>
  <div class="about">
    <ul>
      <li v-for="dog in dogs" :key="dog.id">
        <dog :dog="dog" />
      </li>
    </ul>
  </div>
</template>
<script>
import Dog from '../components/Dog.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'DogsPage',
  components: {
    Dog,
  },
  computed: {
    ...mapState(['dogs']),
  },
  methods: {
    ...mapActions(['getDogs']),
  },
  created() {
    this.getDogs();
  },
}
</script>
