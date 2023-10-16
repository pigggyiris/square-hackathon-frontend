FROM node:alpine AS development
ENV NODE_ENV development

# Add a work directory
WORKDIR /front-end

# Cache and Install dependencies
COPY package.json .
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3001

CMD npm start