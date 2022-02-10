<template>
  <div>
    <Header />
    <main>
      <h1>Main Page</h1>
      <h2>
        StaySafe. 저희는 ~입니다. <br />
        안전하게 약을 복용하실 수 있도록 정보를 제공..
      </h2>
      <SearchBar
        @getSearchWord="getSearchWord"
        @getRealtimeSearchWord="getRealtimeSearchWord"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SearchBar from "@/components/SearchBar/SearchBar";
export default {
  components: {
    Header: Header,
    SearchBar: SearchBar,
    Footer: Footer,
  },
  methods: {
    getRealtimeSearchWord(text) {
      console.log("자동완성:" + text);
    },
    getSearchWord(text) {
      console.log("검색어:" + text);
    },
  },
};
</script>

<style></style>
