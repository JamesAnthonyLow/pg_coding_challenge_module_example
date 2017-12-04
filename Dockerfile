FROM node:7
WORKDIR /app
COPY package.json /app
COPY pg_coding_challenge_module /app
RUN npm install .
COPY . /app
CMD npm run start
EXPOSE 3000
