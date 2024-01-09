FROM node:18.18.2-alpine

ARG ngversion

# Install Angular
RUN npm install -g @angular/cli@$ngversion

# Set user
USER node

# Set working directory
WORKDIR /srv