<template>
  <div class="home">
    <v-container>
      <v-layout>
      <v-flex v-for="item in products" :key="item.name" xs3>
        <card
          :name = item.name
          :text = item.text
          :count = item.count
          :cost = item.cost
          ></card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '../components/home/card'

export default {
  name: 'home',
  data: () => {
    return {
    }
  },
  components: {
    card
  },
  computed: {
    products () {
      let products = this.$store.getters.PRODUCTS
      return products
    }
  }
}
</script>

<style lang="stylus" scoped>

card
  margin: 10px
</style>
