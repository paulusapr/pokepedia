FROM node:alpine AS build

# create & set working directory
RUN mkdir /app
WORKDIR /app

# copy source files
COPY . /app

# install dependencies
RUN npm install

# start app
RUN npm run build

# CMD npm run start
EXPOSE 3000
CMD npm run start
