# Frontend multi-stage build
FROM node:20-alpine AS build
WORKDIR /app

# install pnpm
RUN npm install -g pnpm

# copy package manifests
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# copy and build
COPY . .
RUN pnpm run build

# production nginx image
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
