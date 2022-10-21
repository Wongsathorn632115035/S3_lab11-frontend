<template>
  <p>{{ event.description }} on {{ event.type }}</p>
  <p></p>
</template>

<script>
export default {
  props: ['id', 'event']
}
</script>
