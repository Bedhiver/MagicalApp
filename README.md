# Magical App

## Description

It's an Electron application which can move your mouse cursor automatically.

> Useful if your want to appear "online" on any chat application when you are AFK :sunglasses: . Some chat applications doesn't allow you to change this setting (cf. Mattermost).

## Settings

### Installation

```
$ npm install
```

> Maybe, you will need to install manually some other dependencies for the the `robotjs` library (like `node-gyp`).

```
$ npm rebuild --runtime=electron --target=9.4.4 --disturl=https://atom.io/download/atom-shell --abi=72
```

Please, refer to these guides :

- [robotjs installation](https://github.com/octalmage/robotjs)
- [build Electron application settings](http://robotjs.io/docs/electron)

### Start

```
$ npm start
```

## Stack

- Electron : `9.4.4`
- Node.js : `12.14.1`

> :information_source: &emsp; I used old versions to be able to implement `robotjs` in an Electron app. The option `allowRendererProcessReuse` is only availaibe in Electron v9. This option is essential for running `robotjs`.

---

## :warning: This application is a rough draft

Some code or libraries are useless. I didn't take the time to refactor.

