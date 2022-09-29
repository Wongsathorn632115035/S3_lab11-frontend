<template>
  <label v-if="label">{{ label }}</label>
  <input
    :placeholder="label"
    :value="modelValue"
    @input="inputHandler($event)"
    v-bind="$attrs"
    class="field"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    inputHandler(event) {
      this.$emit('update:midelValue', event.target.value)
    }
  }
}
</script>
