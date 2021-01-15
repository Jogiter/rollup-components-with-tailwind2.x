# Rollup components with Tailwind2.x

`main` branch: vue2.x + tailwind2.x
`feature/typescript` branch: vue2.x + ts + tailwind2.x

## links

- [tailwindcss](https://tailwindcss.com/)
  - [#using-with-preprocessors](https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports)
  - [#configuration](https://tailwindcss.com/docs/configuration)
- [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)
- [rollup-plugin-vue](https://rollup-plugin-vue.vuejs.org/) vue2.x using 5.1.9. vue3 using 6.x
  - [#typescript](https://rollup-plugin-vue.vuejs.org/examples.html#typescript)
- [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2)

## write component

`minimal.vue`

```vue
<template>
  <h1 class="text-base bg-blue-500 text-red-500 border-gray-500 border-solid border demo">Hello {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return { name: 'Jane Doe' }
  }
}
</script>

<style scoped>
.demo {
  @apply leading-snug font-semibold;
}
</style>
```

after rollup:

```js
// utility-css in class
var css_248z = "/* @tailwind base; */\n\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(196, 199, 203, var(--tw-border-opacity));\n}\n\n.border-solid {\n  border-style: solid;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.table {\n  display: table;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.leading-snug {\n  line-height: 1.375;\n}\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px) {\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n}\n\n@media (min-width: 1280px) {\n}\n\n@media (min-width: 1536px) {\n}\n\n.btn {\n  --tw-bg-opacity: 1;\n  background-color: rgba(240, 242, 246, var(--tw-bg-opacity));\n  border-radius: 0.25rem;\n  font-weight: 600;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}";
styleInject(css_248z);

// utility-css in style
var css_248z$1 = ".demo[data-v-eb4deebe] {\n  font-weight: 600;\n  line-height: 1.375;\n}\r\n";
styleInject(css_248z$1);
```

the difference between using in `class` and `style`:

- utility-css in class
  - Good: include utility-css in all components. so it`s can be reused in project which using bundled components
  - Bad: if you using few components, it will load much more css than you really need
- utility-css in style
  - Good: import as you need
  - Bad: if you need utility-css in project, you have to import again

so, it depency on how you design your component