
# 继承node:18基础镜像
# FROM node:18 

# 使用alpine镜像(更小的linux镜像,删除了很多不必要的linux功能),而不是默认的linux镜像
FROM node:18-alpine3.14 as build-stage

# 指定当前目录为/app
WORKDIR /app 

# 复制宿主机的package.json和lock文件到容器的当前目录,也就是/app根目录中
COPY package.json .

COPY *.lock .

RUN npm config set registry https://registry.npmmirror.com/

# 执行npm run install
RUN npm install

# 将其余文件复制到容器内
COPY . .

# 执行npm run build
RUN npm run build

# production stage
FROM node:18-alpine3.14 as production-stage

COPY --from=build-stage /app/dist /app

COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install --production

# 指定容器需要暴露的端口
EXPOSE 3000

# 指定容器跑起来的执行命令是 node ./dist/main.js
CMD ["node", "./dist/main.js"]