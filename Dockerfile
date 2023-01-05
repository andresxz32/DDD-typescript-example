FROM node:14-slim

ARG NODE_ENV

# Create Directory for the Container
WORKDIR /usr/app
# Only copy the package.json file to work directory
COPY package.json ./
# Install all Packages
RUN npm install --force
# Copy source code in Workdir
COPY . .
# Generate build
RUN npm run build
# Start
CMD [ "npm","run", "start" ]

#CMD if [[ -z "$arg" ]] ; then echo Argument not provided ; else echo Argument is $arg ; fi

#CMD npm run "$(if [ $NODE_ENV = 'production' ] ; then echo 'start' ; else echo 'dev'; fi)"
