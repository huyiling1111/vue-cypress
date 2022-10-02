FROM node:lts-alpine

# install spa http server for serving static content
RUN npm install -g spa-http-server

# make a new folder named 'client'
RUN mkdir -p /usr/src/app/client

# make the 'client' folder the current working directory
WORKDIR /usr/src/app/client

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory
COPY . .

# build app for production with minification
RUN npm run build

# define environment variables
ENV SERVER_URL=http://localhost:8081

# expose port
EXPOSE 3000

# run
CMD ["http-server","-p 8080", "dist", "--push-state" ]