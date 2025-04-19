# Sử dụng image Node.js phiên bản LTS
FROM node:18-alpine

# Tạo thư mục app
WORKDIR /usr/src/app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["node", "app.js"]