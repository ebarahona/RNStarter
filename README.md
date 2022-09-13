# React Native Starter

## Installation

`yarn`

## Running


## Troubleshooting

`Uses package react-native-clean-project when using with: yarn clean`

| State Type                | Command                           | In `clean-project-auto`? | Optional? | Default? | Option Flag                  |
| ------------------------- | --------------------------------- | ------------------------ | --------- | -------- | ---------------------------- |
| React-native cache        | `rm -rf $TMPDIR/react-*`          | Yes                      | No        | true     |                              |
| Metro bundler cache       | `rm -rf $TMPDIR/metro-*`          | Yes                      | No        | true     |                              |
| Watchman cache            | `watchman watch-del-all`          | Yes                      | No        | true     |                              |
| NPM modules               | `rm -rf node_modules`             | Yes                      | Yes       | true     | --keep-node-modules          |
| Yarn cache                | `yarn cache clean`                | Yes                      | Yes       | true     | --keep-node-modules          |
| Yarn packages             | `yarn install`                    | No                       | Yes       | true     | --keep-node-modules          |
| NPM cache                 | `npm cache verify`                | Yes                      | Yes       | true     | --keep-node-modules          |
| NPM Install               | `npm ci`                          | Yes                      | Yes       | true     | --keep-node-modules          |
| iOS build folder          | `rm -rf ios/build`                | Yes                      | Yes       | false    | --remove-iOS-build           |
| iOS pods folder           | `rm -rf ios/Pods`                 | Yes                      | Yes       | false    | --remove-iOS-pods            |
| system iOS pods cache     | `pod cache clean --all`           | Yes                      | Yes       | true     | --keep-system-iOS-pods-cache |
| user iOS pods cache       | `rm -rf ~/.cocoapods`             | Yes                      | Yes       | true     | --keep-user-iOS-pods-cache   |
| Android build folder      | `rm -rf android/build`            | Yes                      | Yes       | false    | --remove-android-build       |
| Android clean project     | `(cd android && ./gradlew clean)` | Yes                      | Yes       | false    | --clean-android-project      |
| Brew package              | `brew update && brew upgrade`     | No                       | Yes       | true     | --keep-brew                  |
| Pod packages              | `pod update`                      | No                       | Yes       | true     | --keep-pods                  |



## Authors

- **Ed Barahona** - [twitter](https://twitter.com/pmadruga_)


## License

This project is licensed under the MIT License 