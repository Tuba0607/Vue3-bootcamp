<template>
  <app-header />
  <br>
  <br>
  <div class="container">
    <h3>Bu benim ilk Vue CLI Uygulamam</h3>
    <p>Bugün component ve Vue CLI konularını görüyoruz..</p>
  </div>
  <counter-item />
  <counterItem />
</template>
<script>
import CounterItem from "@/components/CounterItem";
export default {
  components: {
    CounterItem,
  },
};
</script>