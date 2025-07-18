<script>
  // sveltekit 내비게이션용 함수
  import { goto } from '$app/navigation';

  function goToPC() {
    goto('/pc');
  }

  function goToMobile() {
    goto('/mobile');
  }
</script>

<style>
  /* 화면 전체를 flex로 가운데 정렬 */
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;  /* 수직 가운데 */
    align-items: center;      /* 수평 가운데 */
    height: 100vh;            /* 화면 전체 높이 */
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f4f8;
    padding: 1rem;
  }

  h1 {
    margin-bottom: 0.5rem;
    color: #222;
  }

  h3 {
    margin-bottom: 1rem;
    color: #555;
    font-weight: normal;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
  }

  button {
    background-color: #007acc;
    border: none;
    color: white;
    padding: 0.75rem 2rem;
    margin: 0 1rem;
    font-size: 1.1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.25s ease;
  }

  button:hover {
    background-color: #005fa3;
  }

  button:active {
    background-color: #004a7f;
  }

  /* 버튼 컨테이너를 가로 배치 */
  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>

<main>
  <h1>저의 게임에 와 주셔서 감사합니다!</h1>
  <h3>게임을 플레이하기 위해서는 컴퓨터와 스마트폰이 필요합니다.</h3>
  <p>현재 접속 중인 디바이스의 종류를 선택해 주세요.</p>
  <div class="button-group">
    <button on:click={goToPC}>PC</button>
    <button on:click={goToMobile}>모바일</button>
  </div>
</main>
