# wheaterForecast

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [momentjs] (https://www.npmjs.com/package/moment) for format date.
- [@redux/toolkit] (https://redux-toolkit.js.org/introduction/getting-started).
- [react-native-animatable] (https://github.com/oblador/react-native-animatable) for animation.
- [react-native-testing-library] (https://testing-library.com/docs/react-native-testing-library/intro/) for testing.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service).
- [redux](https://redux.js.org/) for state management.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage
## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, globals styles, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `screens`: Folder to store application screens
  - `routes`: Folder to store the navigators.
  - `store`: This folder should have all your reducers, and expose the combined result using its `index.ts`. Duck patterns (https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/). Folder to put all redux middlewares and the store.
  - `utils`: Folder to store utilities functions.
  - `services`: Folder to store network functions.
  - `App.ts`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Setup environments

npm install or yarn install for install dependencies.
 
for ios
cd ios/ and pod install
### run app

npx react-native run-android for android.
npx react-native run-ios for ios.

#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu
  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.
- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu
  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assembleRelease`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

screenshots

IOS:

ANDROID: