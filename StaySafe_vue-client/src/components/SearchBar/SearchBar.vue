<template>
  <v-container>
    <v-card class="d-flex justify-center">
      <v-card>
        <v-text-field
          v-model="searchWord"
          :label="label"
          filled
          rounded
          dense
          clearable
          @keyup.enter="setSearchWord"
        />
      </v-card>
      <v-card>
        <v-btn @click="setSearchWord" icon color="indigo">
          <v-icon>fas fa-search</v-icon>
        </v-btn>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    searchWord: "",
    label: "복용 중인 약 이름을 입력하세요",
  }),
  methods: {
    setSearchWord() {
      const text = this.searchWord;
      if (text !== null && text !== "") {
        this.$emit("getSearchWord", text.trim());
        this.searchWord = "";
      }
    },
  },
  watch: {
    searchWord(text) {
      if (text !== null && text !== "") {
        this.$emit("getRealtimeSearchWord", text.trim());
      }
    },
  },
};
</script>
<style scoped>
.v-text-field {
  width: 500px;
}
</style>
