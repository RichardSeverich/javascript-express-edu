# Set image base = node 8
# https://hub.docker.com/_/node/
FROM node:8

# Create app directory.
RUN mkdir -p /usr/src/app/
# Set app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package.json .
COPY package-lock.json .

# Install app dependencies.
RUN npm install

# Copy app source
COPY . .

# expose container port
EXPOSE 3000

CMD [ "npm", "start" ]
