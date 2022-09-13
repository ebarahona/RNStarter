module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.android.ts',
          '.android.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@assets': './app/assets',
          '@components': './app/components',
          '@configuration': './app/configuration',
          '@constants': './app/configuration/constants',
          '@containers': './app/containers',
          '@context': './app/context',
          '@data': './app/data',
          '@hooks': './app/hooks',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@services': './app/services',
          '@theme': './app/theme',
          '@utilities': './app/utilities',
        },
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'ENV',
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
        allowlist: null,
        blocklist: null,
        safe: false,
        verbose: false,
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
