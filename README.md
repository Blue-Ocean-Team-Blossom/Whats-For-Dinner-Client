# Whats-For-Dinner-Client:
Client Side Application with Server Side Rendering.

This is a single page web application for
a suggested recipes list, a list of all your items
a user has in stock at home, user authentication
to track the logged in user's pantry, and
an ingredient filtering recipe list.

The application's data is served from our Whats-For-Dinner-API service:
https://github.com/Blue-Ocean-Team-Blossom/Whats-For-Dinner-API

## Features:

![App Screenshot](http://g.recordit.co/0EfebzqaSh.gif)
![App Screenshot](./readmeScreenshotsGif/fill_me_in)
![App Screenshot](./readmeScreenshotsGif/fill_me_in)
![App Screenshot](./readmeScreenshotsGif/fill_me_in)
![App Screenshot](http://g.recordit.co/DSViv47G8Q.gif)
![App Screenshot](http://g.recordit.co/eR1p4uIl1c.gif)

## Authors:

Jeff Heuton,
Andrew Vo,
Daniel Suh,
Jason Tseng,
Daniel Tseng,
Zad Castaneda,
Peter Kwak,
Ian Ferrier

## Running this Application:

### Clone the project:

```bash
  git clone https://github.com/Blue-Ocean-Team-Blossom/Whats-For-Dinner-Client.git
```

### Go to the project directory:

```bash
  cd Whats-For-Dinner-Client
```

### Install dependencies:

```bash
  npm install
```

### Setup .env file:

- Fill in a port.
- Request API IP address from our team, or host your own API instance.
- If hosting API instance locally, use your `http;//localhost:(YOUR_PORT_FOR_BACKEND)/` for `API_IP_ADDRESS=FILL_ME_IN`
- If hosting API instance deployed, use the deployed instance's IP address for `API_IP_ADDRESS=FILL_ME_IN`

### Bundle and serve:

- For development:
```bash
  npm run react-dev
  npm run server-dev
```

- For production:
```bash
  npm run react-prod
  npm run server-prod
```

### In the Browser:

- If hosting locally: http://localhost:(YOUR_PORT_HERE)/
- If deploying: http://(YOUR_IP_ADDRESS_HERE):(YOUR_PORT_HERE)/

### Now Enjoy What's For Dinner App, Cheers mate! :beers:

## Tech Stack

**Client Dependencies:**

**Server Dependencies:**

**Test Dependencies:**

**Lint Dependencies:**

## Running Tests

To run tests, run the following command:

```bash
  npm run test
```

To get test coverage, run the following command:

```bash
    npm run test-cov
```

## Contributing

Contributions are always welcome!