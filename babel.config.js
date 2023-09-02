module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      '@vue/babel-plugin-jsx',
      {
        // 默认情况下不合并JSX属性，以更好地与Vue的props系统集成
        mergeProps: false,
      },
    ],
  ],
};
