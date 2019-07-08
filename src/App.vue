<template>
  <div id="app">
        <v-toolbar>
          <v-toolbar-title>Shop</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
              <router-link to="/">Home</router-link>
            </v-btn>
            <v-btn flat>
              <router-link to="/about">About</router-link>
            </v-btn>
            <v-btn flat>
              <router-link to="/login">Log In</router-link>
            </v-btn>
            <v-btn flat>
              <router-link to="/profile">Profile</router-link>
            </v-btn>
            <v-btn flat>
              <router-link to="/cart">Cart</router-link>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
    <router-view/>
  </div>
</template>
<style lang="stylus">
@import '~vuetify/src/stylus/main'

</style>
