# Podcast SPA Tech Proof

## Table of Contents

- [Intro](#intro)
- [Check it out](#check-it-out)
- [Architecture / Technologies Used](#architecture--technologies-used)
- [Layering](#layering)
- [Routing and Components](#routing-and-components)
- [DX and Code Quality](#dx-and-code-quality)

## Intro

This is a Nextjs App, built as part of a selection process. It showcases use of the App Router, with both server and client components although at its core it is a client rendered SPA loading data from an external source.

## Check it out

You can either visit the demo deployment or run it yourself

### deployed version

This demo has been deployed to: https://inditex-tst.vercel.app/ . This is a production version of the app: bundled, chunked and minified as served by nextjs.

### run it yourself

In order to run it locally you have two options:

- production
- dev
  But first you'll need to clone the repo and install the dependencies.

### Installation

Clone the repository and install dependencies:

```bash
gh repo clone ferpar/inditex-tst
cd inditext-tst
npm install
```

That is an example of cloning via github cli. It will differ accordingly for

- SSH: ```bash
  git@github.com:ferpar/inditex-tst.git

````
- HTTPS: ```bash
https://github.com/ferpar/inditex-tst.git
````

There are no environment variables, since all external services in use are publicly available.

#### production build

This is the version that will be exposed to users, it is chunked, minified and bundled as seen fit by Nextjs according to routing and the source code.

```bash
npm run build && npm run start
```

and then visit http://localhost:3000

#### development version

This is useful if you need to check the source code, since source maps will be generated. It should run slower than the production build.

```bash
npm run dev
```

and then visit http://localhost:3000

## Running Tests

To execute tests, follow the installation process on the 'Check it out' section. Then use the following command:

```bash
npm run test
```

or

```bash
npm run test:watch
```

if you would like the tests to react to changes on the codebase.

## Architecture / Technologies used

TLDR: Nextjs(App Router) with Tanstack Query

The specifications for this project involved a very specific set of routes, whereby some components would stay in place while others change as we move from one path to the next.

Additionally it was required to cache responses from an external API. This only makes sense since we are accessing the API via a proxy to avoid CORS. In this context using Tanstack Query is a good option if you don't want to implement a caching mechanism yourself.

Furthermore, some state derived from the API calls has to be accessible in different routes, here is where we benefit from React Query being a **Singleton**: if you request data with the same keys from a different component, you will access the data that is already stored in the Singleton instead of requesting it again. This spares us creating another Context Provider and keeps a single source of truth.

It was also required that we display a loader for client page transitions, this is trivial when using the Page Router, but required a custom solution for the App Router since it doesn't expose events for route changes. In order to solve this we used a **Wrapper** around Nextjs's Link component and a Context which it notifies when a route is changing making said state accessible throughout the Application.

### Layering

The App has been layered according to proximity to the external services.

The Outermost layer is the **API layer** or Services: in our case PodcastService module. It interacts the most directly with the external APIs.

Next we have the **Repositories** (a.k.a. Stores or Data Access Layer), these manage data fetching and caching. Within this app it is the PodcastRepository module.

Then we have the **Main layer**, it is comprised of Pages and Components which include both the piece of Business Logic associated to the filtering of Podcasts, as well as the Presentation Logic necessary to build our output and final layer: the Markup.

The **Markup** is our last layer and it is represented by the rendered output of our components at every given route. This output will be received by the Browser, which will generate/update the DOM accordingly.

#### Additional considerations on Layering and Architecture

For an App with a higher responsibility on the Front End, I would advocate for a separation of Business and Presentation Logic from the React lifecycle.

For instance, this can be done using a reactive state manager such as MobX or Legend State and allows for easier testing of our logic since it is no longer intermingled with the React rendering process. Then via observers it is possible to tell React exactly which parts to rerender without relying on the refresh of a whole branch of the component tree which React depends on by default.

Other frameworks such as Svelte are also an option to consider when your aim is to better separate Business and Presentation logic from the rendering process.

### Routing and Components

From the specification it can be derived that certain Components must remain even after a route change. Normally this involves sub-routing, which in this case is being handled via Layouts.

The components that must remain even after certain route changes are:

- Top Section with App Title and Page Transition Indicator => @ main layout
- The Podcast Information Card on the left side when examining the contents of a Podcast => @ podcast/[podcastId] layout

## DX and code quality

In order to maintain acceptable code quality standards without excessively hampering the developer experience a git hook has been implemented via "husky", which runs eslint, prettier and our tests.

In additon to this, lint-staged has been used to make sure that linter and formatter are only run on the files that have been changed, not on the whole codebase, which would take ever longer as the project grows.

## Future Improvements

Several improvements have been left out due to time constraints associated with a tech proof.

- Testing coverage is very basic focusing only on the most critical aspects. This could be improved upon by adding tests that ensure the specifications given in the exercise are met.

- The styling could receive some improvements:
  - A more attractive loader needs to be used instead of a simple string. Specially for the initial load, which takes quite long due to how we are proxying through AllOrigins and that the external services are public.
  - When checking out the contents of a podcast, the card with the podcast description varies slightly in width when switching from the episodes list to the episode detail.
