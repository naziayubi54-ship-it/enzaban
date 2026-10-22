import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';

/**
 * تنظیمات مخصوص اجرای داخل APK (کاپاسیتور).
 * onBack باید true برگرداند اگر برگشت را خودش مدیریت کرد؛ وگرنه برنامه بسته می‌شود.
 */
export function setupNative(onBack: () => boolean): () => void {
  if (!Capacitor.isNativePlatform()) return () => {};

  StatusBar.setStyle({ style: Style.Light }).catch(() => {});
  StatusBar.setBackgroundColor({ color: '#F8F9FE' }).catch(() => {});

  const handle = CapApp.addListener('backButton', () => {
    if (!onBack()) CapApp.exitApp();
  });

  return () => { handle.then(h => h.remove()).catch(() => {}); };
}
