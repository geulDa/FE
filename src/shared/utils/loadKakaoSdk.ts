export function loadKakaoSdk(callback: () => void) {
  const scriptId = 'kakao-map-sdk';
  const existing = document.getElementById(scriptId);

  if (existing) {
    callback();
    return;
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}
