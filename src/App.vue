<template>
  <v-app>
    <v-app-bar
      app
      color="light-blue darken-4"
      dark
    >
      <div class="d-flex align-center">
  

        <v-img
          alt="the Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="60"
          src="//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          width="60"
        />
     </div>

      <v-spacer></v-spacer>

      <v-btn class="m-2"
       to="/"
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        to="/listfavoritos"
      >
        <span class="mr-2">Favoritos</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
