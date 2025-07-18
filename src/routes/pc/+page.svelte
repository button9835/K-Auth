<script lang="ts">
  import { onMount } from 'svelte';
  import { db } from '$lib/firebase';
  import { ref, set, onValue } from 'firebase/database';

  let code: string = '';
  let status = '기다리는 중...';

  onMount(() => {
    code = Math.floor(1000 + Math.random() * 9000).toString();
    const sessionRef = ref(db, 'sessions/' + code);
    set(sessionRef, { status: 'waiting' });

    onValue(sessionRef, (snapshot) => {
      const data = snapshot.val();
      if (data?.status === 'connected') {
        status = '연결됨! 게임 시작!';
        // TODO: 게임 시작 로직 실행
      }
    });
  });
</script>

<h1>PC 인증 코드: {code}</h1>
<p>{status}</p>
