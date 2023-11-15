# svelte で作ったマルチカウンターアプリです。

参考サイト：
https://vue-ts-composition.vercel.app/

実行サイト：
https://main.d30567b532xbkb.amplifyapp.com/

コーディング規則:

- [x] 使用言語は TypeScript です。
- [x] フレームワークは Svelte を使用。
- [x] インデントは半角スペース２個にしてください。

システム要求：

- [x] 参考サイトと同じ機能のサイトを Svelte で構築はい）
- [x] カウント増減、リセット機能
- [x] カウンタ追加・削除機能
- [x] 各カウンターのタイトル設定機能

## 参考ビデオ

https://github.com/Venus0305/svelte-todo-test/assets/96694509/e2214370-c043-44a2-b3c1-d48c42c95f98



## はじめる

依存関係をインストールする

```bash
cd svelte-app
npm install
```

そして、[Rollup] (https://rollupjs.org) を開始します。

```bash
npm run dev
```

[localhost:5000](http://localhost:5000) に移動します。 アプリが動いているのがわかります。 src` 内のコンポーネント ファイルを編集して保存し、ページを再ロードして変更を確認します。

デフォルトでは、サーバーはローカルホストからのリクエストにのみ応答します。 他のコンピューターからの接続を許可するには、package.json の `sirv` コマンドを編集し、オプション `--host 0.0.0.0` を含めます。

Visual Studio Code (https://code.visualstudio.com/) を使用している場合は、公式拡張機能 [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte .svelte-) をダウンロードできます。 vscode)。 インストールすることをお勧めします。 別のエディタを使用する場合は、構文の強調表示とインテリジェンスを取得するためにプラグインのインストールが必要になる場合があります。

## 本番モードでビルドして実行する

アプリの最適化されたバージョンを作成します。

```bash
npm run build
```

新しく構築したアプリは「npm run start」で実行できます。 この場合、[sirv](https://github.com/lukeed/sirv) を使用します。
