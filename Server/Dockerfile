FROM node

# Set environment variables
ENV appDir /var/www/app/current

# Set the work directory
RUN mkdir -p /var/www/app/current
WORKDIR ${appDir}

# Add our package.json and install *before* adding our application files
ADD package.json ./

# Install pm2 so we can run our application
RUN npm install -g pm2 sails

# Add application files
ADD . /var/www/app/current

#remove contents of node_modules and re-create the folder
RUN rm -rf node_modules
RUN mkdir node_modules
#fix for the waterlock node modules
#use copy to rename the folder
RUN cp -r waterlock/node_modules_ waterlock/node_modules
RUN cp -r waterlock-local-auth/node_modules_ waterlock-local-auth/node_modules

#copy folders to node_modules
RUN cp -r waterlock node_modules
RUN cp -r waterlock-local-auth node_modules

#remove old folder
RUN rm -rf waterlock/node_modules_
RUN rm -rf waterlock-local-auth/node_modules_

RUN cd $(npm root -g)/npm \
 && npm install fs-extra \
 && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js

#npm install
RUN npm install

#Expose the port
EXPOSE 1337

CMD ["pm2", "start", "app.js", "--no-daemon"]



