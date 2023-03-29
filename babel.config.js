module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.android.js', '.js', '.ts', '.tsx', '.json', '.jsx'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: './src/components',
            utils: './src/utils',
            src: './src',
          },
        },
      ],
    ],
  };
};
