FROM node:18.18.2-alpine

ARG firebaseversion

# Install Firebase Tools
RUN npm install -g firebase-tools@$firebaseversion

# Set user
USER node

WORKDIR /srv
