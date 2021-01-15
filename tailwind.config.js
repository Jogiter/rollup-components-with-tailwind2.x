module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{vue,ts,js}'],
    // 为什么会丢失 xl:block 等 css 的原因：https://purgecss.com/extractors.html#default-extractor
    // 默认提取器将文件的每个单词视为选择器。默认值见：https://github.com/FullHuman/purgecss/blob/master/packages/purgecss/src/options.ts#L6-L7
    // 默认提取器有一些限制： 不考虑特殊字符，例如'@'，'：'，'/'
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F6F8FA',
          200: '#F0F2F6',
          300: '#EAEDF0',
          400: '#D9DCE0',
          500: '#C4C7CB',
          600: '#9DA1A7',
          700: '#70767F',
          800: '#272F3B',
          900: '#000',
        },
        primary: '#206EF7',
        success: '#32BE48',
        warning: '#F6A132',
        error: '#F74439',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
