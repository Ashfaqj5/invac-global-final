FROM node:20.10

RUN mkdir -p /usr/landdocslawyer
WORKDIR /usr/landdocslawyer

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm","run","dev"]