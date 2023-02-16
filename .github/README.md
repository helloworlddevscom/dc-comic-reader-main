## dc-comic-reader
React Reader for DC Comics

## Branches

We have three branches at the moment, this is just a suggestion and can change whenever.

`main`  
This branch is for storing the latest active data.  All code should compile correctly, but may contain updates not yet ready for release

`stable`  
This branch is for release integration candidates.   This will be semver tagged.  Should compile cleanly and be suitable for release/integration beta

`release`
This is for releases.   This will also be semver tagged.

## Requirements
- Node.js & NPM
- Git

Currently, this repo is pegged to the following versions:
- "node": ">=14.17.3",
- "npm": ">=6.14.13"

## Getting Started

If you are using nvm for local, you can start by running `nvm i`.   This will switch/install the proper node version in the .nvmrc file before proceeding to the actual npm install step next.

Open up the terminal in the main directory of the project and run `npm i`.
This will install all the dependencies we're using and get things ready to go.

Once that's done you can run `npm start` which will fire up a local dev server. It should give you a URL, the default is http://localhost:3000

While that is running you can make changes and react-scripts will re-build and tell the page to refresh in your browser automatically.

## Architecture
This reader is designed to be integration agnostic.  
What this means practically is:

`src/App.tsx` --> Entry point for App component.   This can also be thought of as `main` and is the top-level component rendered in the `index.tsx` file.   This is designed to mock the "system" integration point (as a wrapper)

`src/components/ComicReader.tsx` --> this is the main entry.   The concept is that this component will be what gets integrated in the design.   This component can be minimized and released using `npm run build` if needed.  
* This component is meant to be dynamic to match the integration enviornment.   The only import concept is that it returns the `ComicReaderApp` component, which is where all the comic reader App code will reside.   

`src/components/ComicReaderApp.tsx` --> this is the actual reader and is owned by HelloWorldDevs team.  This is the entry component for the reader App, so the interface needs to match the output props returned from the `ComicReader` component.

## Code Quality
All files should be typescript (.tsx).    
For this initial build, you can do a lot with `any`, but very quickly, eslint, prettier, etc are going to 
be enabled and stricter code enformcements are coming!   

Each component should contain it's own file in `src/components` and corresponding `*.css`
NOTE:  Further expansion to use SCSS is coming shortly, but at the time of this write, css is fine.

A `utils` directory can also be used for any common reusable components/functions.   

## Deployment builds:
The base development ENV uses react scripts.   While nice, the final delivery does not need everything listed in the devDependencies.

A custom build flow was written to generate the expected typescript component and folder build structure.

The latest delivered version of the app can be found in the `./build` directory.

This folder is generated via a single command `npm run build:npm-release`  

## Testing
Writing tests is encouraged!   All tests should be *.test.tsx extensions and live alongside the component referencing the test.   
Further expansion will produce additional testing/validation requirements, but at the time of this writing, there are none

## Available Scripts

For simplicity, this repo was bootstrapped off the create-react-app.   Overtime, this will most likely integrate a lighter version to reduce the final build size.   But CRA does a great job of scaffolding out projects, so here we shall begin.

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
