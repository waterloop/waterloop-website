# Waterloop Website

## Why do we need a website?

Our website represents the Waterloop team professionally, to help establish and sustain our network of supporters and sponsors, as well as showcase all the cool stuff the team is working on. It also acts as the portal through which candidates apply to our various subteams every recruitment cycle.

## 💻 Technologies

The website codebase is written in ReactTS (TypeScript), and connects to the CMS server repo which is written in ExpressJS.

## 🔨 Setup
Pre-requisite: Setup [waterloop-cms](https://github.com/waterloop/waterloop-cms)
1. Ensure you have `node v16`, `yarn v1` installed. See onboarding docs for more info.
2. Install dependencies with `yarn install`
3. Create a `.env` file in the root directory, then copy + paste relevant variables from [wloop.ca/web-env-vars](https://wloop.ca/web-env-vars)

## 🖥 Running The Application
1. Start waterloop-cms backend by following the README guide [here](https://github.com/waterloop/waterloop-cms#setup).
2. Launch the website in a new terminal with `yarn start`

## ⚙️ Some features to implement

- Integrating our very own merchandise store.
- Add animation to the pod displayed on the website home page.
- Integrate Google Analytics.
- Improve the site’s mobile responsiveness.

## ✨ Deployed site

Check it out at https://teamwaterloop.ca/.
