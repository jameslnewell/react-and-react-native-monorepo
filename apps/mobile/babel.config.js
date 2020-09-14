module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "alias": {
          "library": "../../packages/library/src"
        }
      }
    ]
  ]
};
