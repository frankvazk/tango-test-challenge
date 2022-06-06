# Tango's Fibonacci Calculator

![Fibonacci](https://64.media.tumblr.com/avatar_ba12de96ff92_128.png)
This amazing project is a fibonacci calculator, it should be able to calculate fibonacci numbers on the fly, so we can have the progression at any moment! 

## Installation
Clone the project into your local machine:
```bash
git clone https://github.com/frankvazk/tango-test-challenge.git .
```

To install API Rest Server:
```bash
cd api
npm install
```

To install NextJS FrontEnd App:
```bash
cd my-app
npm install
```

## Settings
Set up following environment variables:

#### API Rest Server:
```js
PORT //API Server port number (Default 3500)
HOST //API Server Host (Default http://localhost)
```
#### NextJS FrontEnd App
```js
API_HOST //API Server Host (Default http://localhost:3500)
API_ENDPOINT //API Fibonacci Calcultor Endpoint (Default api/fibonacci)
```

## Usage
#### API Rest Server:
Development:
```bash
npm run start:dev
```
Production:
```bash
npm run build
npm run start
```

#### NextJS Frontend App
Development:
```bash
npm run dev
```
Production:
```bash
npm run build
npm run start
```
