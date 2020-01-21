# altruist-mobile

Instructions to start:
1. Follow the [react native start up guide](https://facebook.github.io/react-native/docs/getting-started) and install needed stuff (optimally, React Native CLI, iOS and Android)
2. Clone this repo
3. Run `npm install` in root to install node modules
4. Plug in Google API Key into `ios/Altruist/AppDelegate.m` and `android/app/src/main/AndroidManifest.xml`
5. Plug in Altruist API domain into all `fakedomain.com`s that exist in the repo
6. Run `npx react-native run-ios` or `npx react-native run-android`

If Cocoapods causes some error / there are duplicate dependencies for ios, clear the output files under `Altruist -> Build Phases -> [CP] Copy Pods Resources` through Xcode