import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ir.lingoplus.app',
  appName: 'لینگوپلاس',
  webDir: 'dist',
  android: {
    allowMixedContent: false,
    backgroundColor: '#FFF8F1',
  },
  plugins: {
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#FFF8F1',
      overlaysWebView: false,
    },
  },
};

export default config;
