FROM node:lts-alpine

# make a new folder named 'server'
RUN mkdir -p /usr/src/app/server

# make the 'server' folder the current working directory
WORKDIR /usr/src/app/server

# copy project files and folders to the current working directory
COPY . .

# install project dependencies
RUN npm install

# define environment variables
ENV DATABASE=mongodb://mongodb:27017/playground
ENV PORT=8081

# expose port
EXPOSE 8081

# run
CMD [ "node", "app.js" ]