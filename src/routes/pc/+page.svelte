<script>
  import { onMount, onDestroy } from 'svelte';
  import { database } from '$lib/firebase';
  import { ref, onValue, remove, set } from 'firebase/database';

  let sessionCode = '';
  let connected = false;
  let message = '';

  // 랜덤 세션 코드 생성 함수 (숫자 4자리)
  function generateSessionCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  let sessionRef = null;

  onMount(() => {
    sessionCode = generateSessionCode();
    message = '인증 코드를 휴대폰에 입력하세요.';

    // Firebase 세션 경로 참조
    sessionRef = ref(database, `sessions/${sessionCode}`);

    // 세션 데이터 실시간 감시 (모바일 연결 감지)
    const unsubscribe = onValue(sessionRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.status === 'connected') {
        connected = true;
        message = '✅ 휴대폰과 연결됨! 게임을 시작합니다.';
        // 여기서 게임 시작 로직 호출 가능
      } else {
        connected = false;
        message = '인증 코드를 휴대폰에 입력하세요.';
      }
    });

    // 컴포넌트 언마운트 시 구독 해제 및 세션 정리
    onDestroy(() => {
      unsubscribe();
      remove(sessionRef); // 세션 데이터 삭제 (선택사항)
    });
  });
</script>

<style>
  h1 {
    font-size: 1.5rem;
  }
  p {
    margin-top: 1rem;
    font-weight: bold;
  }
  code {
    font-size: 2rem;
    padding: 0.5rem 1rem;
    background: #eee;
    border-radius: 5px;
    user-select: all;
  }
</style>

<h1>💻 컴퓨터 버전</h1>
<p>인증 코드:</p>
<code>{sessionCode}</code>
<p>{message}</p>
