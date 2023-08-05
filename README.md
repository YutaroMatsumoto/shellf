## 環境構築

```bash
yarn install

yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## ビルド

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
> ß

## デザインシステムについて

基本的に、panda-css に存在するスタイルを当てるように実装する。
将来的に必要になれば、panda-css の[Desygn Tokens](https://panda-css.com/docs/theming/tokens)を活用する。

最低限のルールとして、

- padding, margin 等の余白は基本的に 4 の倍数の数字を利用する。
- margin は基本 top, right につける
-
