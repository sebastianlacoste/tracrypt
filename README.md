<p align="center">
  <a href="https://tracrypt.sebastianlacoste.com" target="_blank" rel="noopener noreferrer">
    <img width="" src="./doc/Readme/Logo.png" alt="Tracrypt Logo">
  </a>
</p>
<hr/>

> [Tracrypt](https://tracrypt.sebastianlacoste.com) is a web-based tool where you can track and filter market data from the top 250 cryptocurrencies, all data is obtained via the CoinGecko API.

## Features

- **Available Data**

  - USD/EUR

    - Price

    - Volume

    - Market Capitalization

- **Higher/Lower Filters**

  - Price change

    - 1h

    - 24h

    - 7d

  - Volume 24h

  - Market Capitalization

- **PWA Support**

- **Mobile-Friendly**

## Tech Stack

- **Front-end**

  - **Build**

    - [Vite](https://github.com/vitejs/vite)

  - **HTML/JS**

    - [React](https://github.com/facebook/react)

    - [React Router](https://github.com/remix-run/react-router)

  - **CSS**

    - [Tailwindcss](https://github.com/tailwindlabs/tailwindcss)

    - [Postcss](https://github.com/postcss/postcss)

    - [Autoprefixer](https://github.com/postcss/autoprefixer)

  - **HTTP-Client**

    - [Axios](https://github.com/axios/axios)

- **Back-end**

  - **API**

    - [CoinGecko API](https://www.coingecko.com/en/api)

## Run Locally

Clone the repository

- HTTPS

  ```bash
  git clone https://github.com/sebastianlacoste/tracrypt.git
  ```

- SSH

  ```bash
  git clone git@github.com:sebastianlacoste/tracrypt.git
  ```

Go to the repository directory

```bash
  cd tracrypt/
```

Install dev/Dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```

In the browser, go to

```
  http://localhost:3000
```

**All-In-One**

- HTTPS

  ```bash
  git clone https://github.com/sebastianlacoste/tracrypt.git; cd tracrypt/; npm i; npm run dev;
  ```

- SSH

  ```bash
  git clone git@github.com:sebastianlacoste/tracrypt.git; cd tracrypt/; npm i; npm run dev;
  ```

## Screenshots

- **Desktop**

  ![Desktop](./doc/Readme/Desktop.png) 

- **Tablet**

  ![Tablet](./doc/Readme/Tablet.png) 

  ![Tablet-Menu](./doc/Readme/Tablet-Menu.png) 

- **Mobile**

  ![Mobile](./doc/Readme/Mobile.png)

  ![Mobile-Menu](./doc/Readme/Mobile-Menu.png) 

## License

- [MIT](./LICENSE)
