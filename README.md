# Svelte Web Countdown

The purpose of this is to get some practice in working with svelte and
sveletekit. 

## Features to add
- sidebar with config settings
    - Input box for setting the target date
    - dark/light mode switch
    - name of upcoming topic
    - list of previous topics
    - admin login

## Some useful tidbits 
- Main development should be in src/routes
- Reusable functions can go into src/lib/utils.js
    - functions here need to have to start with the export keywork

# Sveltekit Instructions
Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
