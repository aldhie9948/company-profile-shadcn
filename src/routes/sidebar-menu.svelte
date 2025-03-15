<script lang="ts">
	import { buttonVariants } from "$lib/components/ui/button";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Sheet from "$lib/components/ui/sheet";
	import type { NavItem } from "$lib/types";
	import { cn } from "$lib/utils";
	import { LucideHome, LucideMenu } from "lucide-svelte";
	interface Props {
		navItems: NavItem[];
	}

	const { navItems }: Props = $props();
	let open = $state(false);

	const toggle = () => (open = !open);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger
		class={cn(buttonVariants({ variant: "ghost", size: "icon", class: "flex lg:hidden" }))}
	>
		<LucideMenu />
	</Sheet.Trigger>
	<Sheet.Content side="right" class="space-y-4">
		<Sheet.Header>
			<Sheet.Title>Navigations</Sheet.Title>
		</Sheet.Header>
		<div class="flex flex-col space-y-4">
			{#each navItems as item, i (i)}
				<Button href={item.href} variant="ghost" class="justify-start" onclick={toggle}>
					<LucideHome />
					<span>{item.label}</span>
				</Button>
			{/each}
		</div>
	</Sheet.Content>
</Sheet.Root>
