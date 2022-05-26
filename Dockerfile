FROM node:18.1.0-alpine

RUN apk add --no-cache build-base~=0.5 python3~=3.9

WORKDIR /usr/app

# disable gatsby telemetry and installing cypress binary
ENV GATSBY_TELEMETRY_DISABLED 1
ENV CYPRESS_INSTALL_BINARY 0

COPY package.json \
     yarn.lock \
     ./
RUN yarn --frozen-lockfile

COPY data ./data
COPY src ./src
COPY static ./static
COPY gatsby-*.js \
     postcss.config.js \
     tailwind.config.js \
     ./

EXPOSE 9000

CMD ["sh", "-c", "yarn build && yarn serve --host 0.0.0.0"]
