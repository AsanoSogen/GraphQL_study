FROM node:18-alpine3.14

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./

RUN npm install


# アプリケーションのソースをバンドルする
COPY . .
EXPOSE 4000
CMD [ "node", "./src/server.js" ]