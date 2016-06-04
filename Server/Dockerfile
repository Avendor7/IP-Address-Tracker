FROM node

# Set environment variables
ENV appDir /var/www/app/current

# Set the work directory
RUN mkdir -p /var/www/app/current/node_modules
WORKDIR ${appDir}

# Add our package.json and install *before* adding our application files
ADD package.json ./

# Install pm2 so we can run our application
RUN npm install -g pm2 sails

# Add application files
ADD . /var/www/app/current

#fix for the waterlock node modules
#use copy to rename the folder
RUN cp -r waterlock/node_modules_ waterlock/node_modules
RUN cp -r waterlock-local-auth/node_modules_ waterlock-local-auth/node_modules
#remove old folder
RUN rm -rf waterlock/node_modules_
RUN rm -rf waterlock-local-auth/node_modules_
#copy folders to node_modules
RUN cp -r waterlock node_modules
RUN cp -r waterlock-local-auth node_modules

#npm install
RUN npm install

#Expose the port
EXPOSE 1337

CMD ["pm2", "start", "app.js", "--no-daemon"]



