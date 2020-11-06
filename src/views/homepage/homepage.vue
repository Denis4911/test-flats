<template>
  <main class="homepage">
    <div class="container homepage__container">
      <h1 class="homepage__title">Lorem ipsum dolor sit</h1>
      <FlatsList :flats="flats" v-if="flats && flats.length" />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FlatsList from "@/components/flats-list/flats-list.vue";
import {State} from "vuex-class";

@Component({
  components: {
    FlatsList
  }
})
export default class Homepage extends Vue {
  @State((state: any) => state.flats) flats: any;
}
</script>
<style src="./homepage.css"></style>
