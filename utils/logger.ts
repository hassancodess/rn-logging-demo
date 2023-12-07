import { logger, consoleTransport, fileAsyncTransport, configLoggerType } from 'react-native-logs';
import * as FileSystem from 'expo-file-system';
import { InteractionManager } from 'react-native';

let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

const defaultConfig: configLoggerType = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: 'debug',
  transport: [consoleTransport, fileAsyncTransport],

  transportOptions: {
    FS: FileSystem,
    fileName: `logs-${date}-${month}-${year}`, // Create a new file every day
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
  async: true,
  asyncFunc: InteractionManager.runAfterInteractions,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
};

export const LOG = logger.createLogger<'debug' | 'info' | 'warn' | 'error'>(defaultConfig);
