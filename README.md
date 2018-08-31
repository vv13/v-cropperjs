# v-cropperjs
A Vue component for use [cropperjs](https://github.com/fengyuanchen/cropperjs).

Visit in [https://vv13.github.io/v-cropperjs](https://vv13.github.io/v-cropperjs).

## Installation
```shell
$ npm i v-cropperjs
```

## Props
| Name | Type | Required | Description |
| -- | -- | -- | -- |
| src | `string` | -- | Img src |
| options | `object` | -- | cropperjs's options
| domProps | `object` | -- | Img DOM properties

## Options
See cropperjs [documentation](https://github.com/fengyuanchen/cropperjs#options) for all posible options

## Methods
cropperjs instance in component's data named 'cropper', so you can use it like `this.$refs.SOME_REF_NAME.cropper.zoom(0.1)`.
