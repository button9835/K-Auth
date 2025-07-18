<script lang="ts">
  import { db } from '$lib/firebase';
  import { ref, get, update } from 'firebase/database';

  let inputCode = '';
  let message = '';

  async function connect() {
    const sessionRef = ref(db, 'sessions/' + inputCode);
    const snapshot = await get(sessionRef);

    if (snapshot.exists() && snapshot.val().status === 'waiting') {
      await update(sessionRef, { status: 'connected' });
      message = '연결 성공! 게임 시작!';
      // TODO: 게임 시작 로직 실행
    } else {
      message = '잘못된 코드입니다.';
    }
  }
</script>

<input bind:value={inputCode} placeholder="인증 코드 입력" />
<button on:click={connect}>연결</button>
<p>{message}</p>
