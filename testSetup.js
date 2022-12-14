import { NativeModules } from 'react-native';
import mockClipboard from '@react-native-clipboard/clipboard/jest/clipboard-mock.js';
/* eslint-disable import/no-namespace */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);



jest.useFakeTimers();

jest.mock('react-native-fs', () => ({
  CachesDirectoryPath: jest.fn(),
  DocumentDirectoryPath: jest.fn(),
  ExternalDirectoryPath: jest.fn(),
  ExternalStorageDirectoryPath: jest.fn(),
  LibraryDirectoryPath: jest.fn(),
  MainBundlePath: 'testPath',
  PicturesDirectoryPath: jest.fn(),
  TemporaryDirectoryPath: jest.fn(),
  appendFile: jest.fn(),
  completeHandlerIOS: jest.fn(),
  copyAssetsVideoIOS: jest.fn(),
  copyFile: jest.fn(),
  copyFileAssets: jest.fn(),
  copyFileAssetsIOS: jest.fn(),
  downloadFile: jest.fn(),
  exists: jest.fn(),
  existsAssets: jest.fn(),
  getAllExternalFilesDirs: jest.fn(),
  getFSInfo: jest.fn(),
  hash: jest.fn(),
  isResumable: jest.fn(),
  mkdir: jest.fn(),
  moveFile: jest.fn(),
  pathForBundle: jest.fn(),
  pathForGroup: jest.fn(),
  read: jest.fn(),
  readDir: jest.fn(),
  readDirAssets: jest.fn(),
  readFile: () =>
    new Promise((resolve) => {
      resolve('console.log()');
    }),
  readFileAssets: jest.fn(),
  readdir: jest.fn(),
  resumeDownload: jest.fn(),
  setReadable: jest.fn(),
  stat: jest.fn(),
  stopDownload: jest.fn(),
  stopUpload: jest.fn(),
  touch: jest.fn(),
  unlink: jest.fn(),
  uploadFiles: jest.fn(),
  write: jest.fn(),
  writeFile: jest.fn(),
}));

Date.now = jest.fn(() => 123);

jest.mock('react-native-keychain', () => ({
  getSupportedBiometryType: () => Promise.resolve('FaceId'),
}));
jest.mock('react-native-share', () => 'RNShare');

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  State: {},
  Directions: {},
};

NativeModules.RNCNetInfo = {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
  getCurrentState: jest.fn(() => Promise.resolve()),
};

NativeModules.RCTAnalytics = {
  optIn: jest.fn(),
  trackEvent: jest.fn(),
  getRemoteVariables: jest.fn(),
};

NativeModules.PlatformConstants = {
  forceTouchAvailable: false,
};

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity',
);
jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => 'TouchableHighlight',
);
jest.mock(
  'react-native/Libraries/Components/TextInput/TextInput',
  () => 'TextInput',
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Interaction/InteractionManager', () => ({
  runAfterInteractions: jest.fn(),
  createInteractionHandle: jest.fn(),
  clearInteractionHandle: jest.fn(),
  setDeadline: jest.fn(),
}));

jest.mock('@react-native-clipboard/clipboard', () => mockClipboard);


jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android', // or 'ios'
  select: () => null
}));
jest.mock('react-native-device-info', () => {
  return {
    __esModule: true,
    default: jest.fn(() => { })
  };
});

jest.mock("react-native-localize", () => ({
  getTimeZone: jest.fn(),
  getCountry: jest.fn(() => ({
    toLowerCase: jest.fn()
  }))
}));
jest.mock("react-native-view-shot", () => ({
  captureRef: jest.fn(),

}));

const BigNumber = {
  from: () => BigNumber,
  sub: () => BigNumber,
  gt: () => true,
  div: () => jest.fn(() => '10'),
};

jest.mock('@ethersproject/bignumber', () => ({
  BigNumber,
}));


