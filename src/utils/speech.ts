/**
 * Web Speech API wrapper for real native English pronunciation
 */
export function playPronunciation(text: string, rate: number = 0.9): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Try finding an English voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(
      v => (v.lang === 'en-US' || v.lang.startsWith('en')) && !v.name.includes('Google')
    ) || voices.find(v => v.lang.startsWith('en'));

    if (enVoice) {
      utterance.voice = enVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.error('Error playing speech:', err);
  }
}
