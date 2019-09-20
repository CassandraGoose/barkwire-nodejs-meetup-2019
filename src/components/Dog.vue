<template>
  <div class="hello">
    <section class="dog-listing">
      <router-link :to="{ name: 'dog', params: { id: dog.id } }">
        <h3 class="name">{{dog.name}}</h3>
        <section>
          <figure>
            <img :src="dog.url" :alt="dog.name" />
          </figure>
          <p>{{dog.description}}</p>
        </section>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Dog",
  props: ['dog'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
