<template>
  <v-container>
    <v-card>
      <v-card-text>
        <p class="text-h2 font-weight-bold light-blue--text text-md-center">
          STAY SAFE
        </p>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text>
        <p class="text-subtitle-1 black--text text-md-center">
          <span>
            <strong>팍스로비드</strong>를 처방받으셨나요?<br />
            복용 중인 약이 <strong>병용금기 약물</strong>인지 확인해보세요
          </span>
        </p>
      </v-card-text>
    </v-card>
    <v-card>
      <SearchBar
        @getSearchWord="getSearchWord"
        @getRealtimeSearchWord="getRealtimeSearchWord"
      />
    </v-card>
  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar/SearchBar";
export default {
  components: {
    SearchBar,
  },
  data: () => ({}),
  methods: {
    getSearchWord(text) {
      console.log("검색어:" + text);
    },
    getRealtimeSearchWord(text) {
      console.log("자동완성:" + text);
    },
  },
};
</script>
<style scoped></style>
