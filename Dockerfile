# Используем официальный образ Node.js в качестве базового
FROM node as builder

# Устанавливаем зависимости
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

RUN mkdir /react-ui && mv ./node_modules ./react-ui
WORKDIR /react-ui

# Копируем все файлы проекта в контейнер
COPY . ./

# Собираем проект
RUN npm run build

# Устанавливаем переменную окружения для сервера
FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/dist /usr/share/nginx/html

# start app
EXPOSE 80
#CMD ["npm", "start"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]