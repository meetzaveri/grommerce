module.exports = {
  //need babel-eslint to allow class static props
  "parser": "babel-eslint",
  "extends": [ "eslint:recommended", "plugin:react/recommended" ],
  "plugins": [ "react" ],
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "16.5.2", // React version, default to the latest React stable release
      "flowVersion": "0.53" // Flow version
    }
  },
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "rules": {
      //general
      "indent": [ "error", 2 ],
      "quotes": [ "error", "single" ],
      "semi": [ "error", "always" ],
      "no-console": ["error", { allow: ["warn", "error", "log"] }],
      //react
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "error",
      "react/prop-types": [1] 
  }
};