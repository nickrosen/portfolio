<template>
	<section>
		<header class="container">
			<div class="flex row space-between align-center border">
				<div id="header-logo" class="py-18">
					<nuxt-link to="/" class="flex align-center nav-link">Nick Rosen</nuxt-link>
				</div>
				<nav id="header-nav">
					<ul class="flex row">
						<li
							v-for="(item, index) in navItems"
							:key="index"
							class="py-18"
						>
							<nuxt-link class="nav-link" :to="item.link">{{item.title}}</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	</section>
</template>

<script>
	import IconLogo from '~/components/IconLogo.vue'
	export default {
		components: { IconLogo },
		data() {
			return {
				navItems: [
					{title: 'About', link: '/about'},
					{title: 'Work', link: '/work'},
					{title: 'Learning', link: '/learning'},
				]
			}
		}
	}
</script>

<style scoped>
.mr18{
	margin-right: 18px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
	padding-left: 20px;
}
.border {
  border-bottom: 1px solid var(--blue-10);
}



</style>