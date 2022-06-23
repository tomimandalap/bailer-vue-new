tailwind.config = {
  darkMode: false,
  theme: {
    // fontFamily: {
    //   sans: [
    //     'Helvetica Neue',
    //     'Helvetica',
    //     'PingFang SC',
    //     'Hiragino Sans GB',
    //     'Microsoft YaHei',
    //     '微软雅黑',
    //     'Arial',
    //     'sans-serif',
    //   ],
    //   serif: ['Merriweather', 'serif'],
    // },
    fill: (theme) => ({
      primary: theme('colors.purple.700'),
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
      white: theme('colors.slate.100'),
    }),
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {},
  },
}
