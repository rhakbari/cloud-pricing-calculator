FROM node:lts as dependencies
WORKDIR /pricing-calculator
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /pricing-calculator
COPY . .
COPY --from=dependencies /pricing-calculator/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /pricing-calculator
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /pricing-calculator/next.config.js ./
COPY --from=builder /pricing-calculator/public ./public
COPY --from=builder /pricing-calculator/.next ./.next
COPY --from=builder /pricing-calculator/next.config.js ./next.config.js
COPY --from=builder /pricing-calculator/node_modules ./node_modules
COPY --from=builder /pricing-calculator/package.json ./package.json
COPY --from=builder /pricing-calculator/pages ./pages
EXPOSE 3600
CMD ["npm", "run","start"]
