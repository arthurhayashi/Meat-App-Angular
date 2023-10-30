FROM node:8
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli@1.2.7
RUN npm install @angular/animations@4.3.3 @angular/compiler-cli@4.3.3 @angular/common@4.3.3 @angular/compiler@4.3.3 @angular/core@4.3.3 @angular/forms@4.3.3 @angular/platform-browser@4.3.3 @angular/platform-browser-dynamic@4.3.3 @angular/router@4.3.3
RUN npm install -g typescript@2.4.2
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]