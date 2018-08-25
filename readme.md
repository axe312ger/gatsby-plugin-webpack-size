# Gatsby Plugin Webpack Size

<p align="center">
  <a href="https://www.npmjs.com/package/gatsgy-plugin-webpack-size">
    <img src="https://img.shields.io/npm/v/gatsgy-plugin-webpack-size.svg" alt="NPM">
  </a>
  &nbsp;
  <a href="http://npm-stat.com/charts.html?package=gatsgy-plugin-webpack-size">
    <img src="https://img.shields.io/npm/dm/gatsgy-plugin-webpack-size.svg" alt="NPM downloads">
  </a>
</p>

> Implements CI friendly bundle size logging for your production builds.

![Screenshot](./screenshot.png)

## ☁️ Installation

```sh
npm i gatsby-plugin-webpack-size
```

## 🛫 Setup

Add `'gatsgy-plugin-webpack-size'` to the plugins in your `gatsby-config.js` file.

```js
module.exports = {
  plugins: [
    `gatsby-plugin-webpack-size`
  ]
}
```

## ⚙️ Configuration

THe only custom option implemented is `development`. All other options are passed to the [size-plugin](https://github.com/GoogleChromeLabs/size-plugin).

```js
module.exports = {
  plugins: [
    [
      `gatsby-plugin-webpack-size`,
      {
        // Set to true to show bundle sizes in development mode as well
        development: true
      }
    ]
  ]
}

```
