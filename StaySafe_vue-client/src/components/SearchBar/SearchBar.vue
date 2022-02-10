<template>
  <div>
    <input
      v-model="searchWord"
      :placeholder="placeholder"
      @keypress="handleSearchWord"
    />
    <button @click="setSearchWord">검색</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      placeholder: "복용 중인 약 이름을 입력하세요",
    };
  },
  methods: {
    handleSearchWord({ keyCode }) {
      const { text } = this;
      console.log("text" + text);
      if (keyCode === 13 && text !== "") {
        this.$emit("getSearchWord", text);
        console.log(text);
      }
    },
    setSearchWord() {
      this.$emit("getSearchWord", this.searchWord);
      this.searchWord = "";
    },
  },
  watch: {
    searchWord(text) {
      this.$emit("getRealtimeSearchWord", text);
    },
  },
};
</script>

<style></style>
