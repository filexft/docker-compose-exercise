FROM node:latest

WORKDIR /app/

RUN ["apt", "update", "-y"]
RUN ["apt", "upgrade", "-y"]

COPY . /app/

EXPOSE 4200


RUN npm install -g @angular/cli

Run npm install

RUN npm run build

CMD ["ng", "serve", "--host", "0.0.0.0"]