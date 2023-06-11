<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

<script lang="ts">

import Header from '~/components/molecules/Header.vue';

export default {
  setup(){},
  components: {
    Header,
  }
}

</script>
