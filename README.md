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

## グローバルな状態管理能方法について

現状、どの方法に統一するか決められていない。
現状以下の 2 パターンがベストだと考えている。

- subscribe を利用して、store の更新内容を限定的にする.
- store と context を利用して、状態にアクセス可能な範囲を限定的にする（API 経由で取得した値の管理に良さそう）。
