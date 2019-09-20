<template>
  <div>
    <dog :dog="dog"/>
  </div>
</template>

<script>
import Dog from '../components/Dog';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'DogPage',
  components: {
    Dog,
  },
  computed: {
    ...mapState(['dog']),
  },
  methods: {
    ...mapActions(['getDog']),
  },
  created() {
    this.getDog(this.$route.params.id)
  },
}
</script>

<style>

</style>