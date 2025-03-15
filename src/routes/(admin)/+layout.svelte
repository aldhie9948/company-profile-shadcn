<script lang="ts">
	const { children } = $props();
</script>

<main class="flex min-h-dvh flex-col">
	<header class="">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores error nulla
			minus maiores alias incidunt ipsa explicabo iure sapiente a officia quas iste quod delectus
			praesentium magni, eaque sunt.
		</p>
	</header>
	<div class="grow">
		{@render children()}
	</div>
</main>
