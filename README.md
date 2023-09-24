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

## データベースから型を自動生成

```
// dev環境
supabase gen types typescript --project-id opdsugupdbgnwyuunhdz --schema public > src/database.ts
```

## グローバルな状態管理能方法について

現状、どの方法に統一するか決められていない。
現状以下の 2 パターンがベストだと考えている。

- subscribe を利用して、store の更新内容を限定的にする.
- store と context を利用して、状態にアクセス可能な範囲を限定的にする（API 経由で取得した値の管理に良さそう）。

## デザインシステムについて

[wiki を参照](https://github.com/YutaroMatsumoto/shellf/wiki/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
