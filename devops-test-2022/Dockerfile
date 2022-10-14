
#FROM node:14.15.4-alpine AS build

# Create app directory
#WORKDIR /usr/src/app

#COPY package*.json ./

#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
#COPY . .

#RUN npm install

#EXPOSE 8080
#CMD [ "node", "/usr/src/app/index.js" ]


FROM node:12.17.0-alpine
WORKDIR /usr
#COPY package*.json ./
#COPY tsconfig*.json ./
COPY . .
RUN npm install
RUN npm run build


## this is stage two , where the app actually runs



CMD ["npm","run","start"]

