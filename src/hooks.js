/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const userAgent = event.request.headers.get('user-agent') || '';

  // 모바일 기기인지 대략 판단
  const isMobile = /android|iphone|ipad|mobile/i.test(userAgent);

  // 현재 경로
  const pathname = new URL(event.request.url).pathname;

  // 모바일인데 아직 /mobile 경로가 아니면 리다이렉트
  if (isMobile && !pathname.startsWith('/mobile')) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/mobile' }
    });
  }

  // PC인데 /mobile 경로라면 리다이렉트 (선택사항)
  if (!isMobile && pathname.startsWith('/mobile')) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/' }
    });
  }

  // 기본 처리
  return await resolve(event);
}
