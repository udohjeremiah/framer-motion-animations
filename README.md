# Framer-Motion-Animations

A collection of commonly used animations in professional websites created with
[framer-motion](https://www.framer.com/motion/).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Animations](#animations)
- [Contributing](#contributing)
- [License](#license)

## Introduction

`framer-motion-animations` is a meticulously curated collection of animations crafted using the
[framer-motion](https://www.framer.com/motion/) library. These animations are designed for seamless integration into
your web projects, offering a quick and efficient way to enhance user experiences with fluid and engaging motion.

The project primarily leverages [framer-motion](https://www.framer.com/motion/) alongside [Next.js](https://nextjs.org)
(you can also use [React.js](https://react.dev), just remove the `"use client"` directive at the top of the component)
to create these animations. It assumes the use of [tailwindcss](https://tailwindcss.com) and the
[clsx](https://github.com/lukeed/clsx) library for styling. If this is not the case, you can easily refer to the
[tailwindcss documentation](https://tailwindcss.com/docs/) to find equivalent CSS rules for use in your custom
stylesheets.

## Features

- **Ready-to-Use Animations**: Seamlessly integrate professional animations into your web applications by copying the
  provided JSX markup.
- **Customizable**: Tailor the animations to meet your design needs. The entire JSX markup is conveniently available for
  easy copy-and-paste into your project, offering flexibility for customization.
- **Lightweight**: Optimized for performance, guaranteeing seamless animations with minimal impact on page speed.

## Animations

This section offers an overview of the available animations. Click on each animation to access its corresponding source
code, as well as a link to the live demonstration on [CodeSandbox](https://codesandbox.io).

- [stepper-with-form](https://github.com/udohjeremiah/framer-motion-animations/blob/main/src/components/stepper-with-form.jsx)
- [radial-gradient-cursor](https://github.com/udohjeremiah/framer-motion-animations/blob/main/src/components/radial-gradient-cursor.jsx)
- [slideshow](https://github.com/udohjeremiah/framer-motion-animations/blob/main/src/components/slideshow.jsx)

## Contributing

If you'd like to contribute to this project, please follow the contribution guidelines below:

### Guidelines

While there isn't a dedicated "Contributing Guidelines" section, as commonly seen in GitHub projects, it is crucial to
emphasize the importance of treating everyone with respect, regardless of their diversity. Lastly, we encourage
contributors to embody kindness and consideration.

### Getting started

#### Prerequisites

- Git
- Node: Any version in the 20.x range, starting with v20.0.0 or higher.
- A fork of the repository (for any contributions).
- A clone of the framer-motion-animations repository on your local machine using:
  `git clone https://github.com/udohjeremiah/framer-motion-animations.git`

#### Installation

- cd `framer-motion-animations` to navigate to the project's root directory.
- `npm install` to install the project's npm dependencies.

#### Running locally

- `npm run dev` to start the development server (powered by [Next.js](https://nextjs.org))
- Open `http://localhost:3000` in your favorite browser to access the site.

### Create a branch

- `git checkout main` from any folder in your local `framer-motion-animations` repository.
- `git pull origin main` to ensure you have the latest code from the `main` branch.
- `git checkout -b the-name-of-my-branch` (replace `the-name-of-my-branch` with a suitable name) to create a new branch.

### Make the change

- Follow the ["Running locally"](#running-locally) instructions.
- Save the files and check them in the browser.
- Changes to React components in the `src` directory will hot-reload.

### Test the change

- Run `npm run format`. This command uses Prettier to validate code formatting, ensuring it adheres to Prettier's style.
  To correct any code format issues, use `npm run format:fix`.
- Run `npm run lint`. This command runs ESLint to catch any linting errors. Be sure to fix any errors and warnings that
  may appear.
- If possible, test any visual changes in the latest versions of common browsers, both on desktop and mobile.

### Push it

- `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as
  `Add mobile stepper component`) to stage and commit your changes.
- `git push my-fork-name the-name-of-my-branch` (substitute `my-fork-name` with the actual name of the fork of the
  framer-motion-animations repository you have in your GitHub account and `the-name-of-my-branch` with the actual name
  of the branch you created in the previous step when creating a branch).
- Go to the framer-motion-animations repo (i.e. the one you forked) and you should see recently pushed branches.
- Follow GitHub's instructions to open a pull request.
- A Next.js build (next build) is triggered after your changes are pushed to GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/udohjeremiah/framer-motion-animations/blob/main/LICENSE.md) file for details.
