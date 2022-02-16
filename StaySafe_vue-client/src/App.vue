<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: {
    AppBar,
    Footer,
  },
};
</script>
