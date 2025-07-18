<script>
  import { onMount } from 'svelte';
  import { database } from '$lib/firebase';
  import { ref, set } from 'firebase/database';

  let code = '';
  let isConnecting = false;
  let message = '';

  async function connect() {
    if (code.trim().length === 0) {
      message = '인증 코드를 입력해주세요.';
      return;
    }

    isConnecting = true;
    message = '';

    try {
      // 인증 코드를 Firebase에 기록
      await set(ref(database, `sessions/${code}`), {
        status: 'connected',
        connectedAt: Date.now()
      });

      message = '✅ 연결 성공! 게임을 시작하세요.';
      // 여기서 게임 시작 로직 호출 가능
    } catch (error) {
      console.error(error);
      message = '❌ 연결 실패: Firebase 오류';
    } finally {
      isConnecting = false;
    }
  }
</script>

<style>
  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  p {
    margin-top: 1rem;
  }
</style>

<h1>🔐 인증 코드 입력</h1>

<input
  type="text"
  bind:value={code}
  placeholder="인증 코드 입력..."
  maxlength="8"
/>

<br />

<button on:click={connect} disabled={isConnecting}>
  {isConnecting ? '연결 중...' : '연결'}
</button>

<p>{message}</p>
