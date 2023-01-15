# wakatime top 100 leaderboard

this is a simple application that displays the top 100 users on wakaTime with their names, total hours coded, daily average time, and languages used

Also, there is a profile page that shows more details about the user with a chart of their most used languages with time

Due to `CORS` issues that could be faced on the client while using wakaTime API, I used `nuxtServerInit` action here to fetch data from wakaTime `API` on the server when the application starts and store it to `vuex` store, This way — since the data doesn't update frequently, the data will be fetched only once from the server and will be stored in the `Vuex` store, so it can be reused throughout the application without needing to re-fetch it and avoid `CORS` errors on the client

since asyncData and fetch also do run on the client side during page navigations (from my test) `CORS` will still be an issue

To avoid `CORS` errors, I could set up a proxy server to forward the request to wakaTime API and return the data and avoid `CORS` errors on client routing — but I assumed that is outside the scope of this test.

I'm open to improving and learning of better ways to go about this situation, I would appreciate any feedback.

## Set up and clone branch to local machine

Clone the repository `git clone git@github.com:Matriix69/kippa_wakaTime_leaders.git` and cd to project directory

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
