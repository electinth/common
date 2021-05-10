<svelte:options tag="elect-staging-banner" />

<script lang="ts">
  let productionUrl: string = '';
</script>

<div class="bg-gray-600 text-white text-xs font-body px-4 py-2">
  <div class="inline-flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-3 my-auto"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  </div>
  <strong>คำเตือน</strong>
  เว็บไซต์นี้มีจุดประสงค์ในการทดสอบภายในทีม ELECT เท่านั้น อาจมีข้อมูลและการทำงานที่ไม่ถูกต้อง
  ทางทีมงานจะไม่รับผิดชอบข้อผิดพลาดใด ๆ ที่เกิดขึ้น
  {#if productionUrl}
    ท่านสามารถชมชิ้นงานจริงได้
    <a
      href="${productionUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
    >
      ที่นี่
    </a>
  {/if}
</div>
