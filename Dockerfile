
# pull official base image
FROM node:17-alpine

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package*.json ./
RUN npm install

# Installs all node packages
 
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

# Copies everything over to Docker environment
COPY . ./
EXPOSE 3000
# start app
RUN npm run build --production
#RUN npm install -g brunch
#RUN npm install --save-dev terser-brunch
RUN npm install -g serve
#RUN brunch build -p
CMD ["serve", "-s", "build", "-l", "3008"]
