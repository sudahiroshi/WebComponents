WebComponents
===============

Web記事のES Moduleを使ったWebComponentを試してみた

## WebComponentsとは

詳しい解説は[こちら](https://html5experts.jp/shumpei-shiraishi/24239/?utm_content=bufferd7374&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)を参照．
大雑把に言うと，Webページを部品化する技術です．
外部ライブラリを使用して実現する方法が一般的でしたが，ES Moduleと組み合わせて簡潔に記述できる例が載っていたので写経してみました．

## ES Moduleを使う

ES Moduleは，JavaScriptのライブラリに関する新しい書き方です．
今後主流となっていくと思われます．
ただし，現行のブラウザでは未対応のものが多く，Chromeですらフラグ操作が必要となります．

まずはChromeの設定から行います．
[ES modulesを試してみた](http://horicdesign.com/js/es-modules.html)を参照しながら設定を行います．
設定後はChromeの再起動が必要です．

## 実際に試してみる

リポジトリをクローンしたら，Webサーバを立ち上げます．
ES Moduleを使うためにはファイルへの直接アクセスでは弾かれてしまうための処置です．
Rubyがインストールされていれば以下のように立ち上げます．

```
$ ruby -run -e httpd . -p 8000
```

続けて，Chromeから```http://localhost:8000```にアクセスします．

すると，メッセージの後ろにボタンが2つ表示されます．
これらのボタンは，モジュール内で定義したfancy-button要素によって構成されています．

詳しい解説は後日書き加えます．
