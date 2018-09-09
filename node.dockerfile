FROM node:8.11.4

ENV NODE_ENV=development 
ENV PORT=4000

COPY . /var/www
WORKDIR /var/www

# RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]