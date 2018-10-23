# react-summit-2018-NG

Typescript provides strong type checking that allows devs to build apps with a lot more confidence that their components are setup to receive the precise data they need.

This repo contains two working versions of a ridiculously small sample React app - literally one Profile component.

## Technologies

- ReactJS
- Typescript
- Create React App (JS)
- Create React App (TS)

## How to use

There are two folders, one for the JS and TS versions of the exact same app. They both contain working versions of the app. The JS version uses `propTypes` to give very basic runtime prop validation, but the problems with these are:

- Even if you pass wrong props, your app would compile fine and the browser won't complain, makes it hard to debug.
- If you omit a prop you defined on `propTypes` there's no error thrown, it simply goes about life without a worry, leaving you befuddled why your passed prop is not `seen`.
- `Proptypes` only complains when what you pass in does not match what you specified as the prop type e.g you pass a number when you specified that the prop is of type `string`
- The errors are only shown in the console, the app itself looks like nothing went wrong

### Validate Issues

To validate these issues:

- install [create-react-app](https://github.com/facebook/create-react-app)
- create a new react app with the cli from the step above
- copy the `components` folder from this repo's `react-summit-js` folder to your locally created app
- copy the contents of this repo's `App.jsx & App.scss` into your own `App.jsx & App.scss`. Use this opportunity to study the differences between yours and this repo's
- try and validate the above mentioned issues

### Play With Typescript

- install [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)
- create a new Typescript react app with the cli from the step above
- copy the `components` folder from this repo's `react-summit-ts` folder to your locally created app. Use this opportunity to study the different files that exist:
  - interfaces.ts => where we define our `PropTypes & StateTypes(if we wanted to)` for the component
  - Profile.tsx => no longer `.jsx`
- copy the `App.tsx` to yours.
- now from within your `App.tsx` try:
  - removing the name `prop`, did the app even compile? Did the browser stil show the profile component or a clear error msg?
  - changing the type of `first` in `interfaces` to number, did the app compile?

- most importantly, have fun and embrace the future :)
  
