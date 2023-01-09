# FROM node:14-slim

# ARG NODE_ENV


# WORKDIR /usr/app

# COPY package.json ./

# RUN npm install --force

# COPY . .

# RUN npm run build

# CMD [ "npm","run", "start" ]

 #CMD if [[ -z "$arg" ]] ; then echo Argument not provided ; else echo Argument is $arg ; fi

 #CMD npm run "$(if [ $NODE_ENV = 'production' ] ; then echo 'start' ; else echo 'dev'; fi)"
