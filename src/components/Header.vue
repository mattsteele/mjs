<template>
	<header class="app-header">
    <div class="header-wrapper">
        <nav>
          <ul class="nav-list">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/invitation">Invitation</router-link>
            </li>
            <li>
              <router-link to="/location">Location</router-link>
            </li>
            <li>
              <router-link to="/lodging">Lodging</router-link>
            </li>
            <li>
              <router-link to="/registry">Registry & Gifts</router-link>
            </li>
          </ul>
        </nav>
		</div><!-- header-wrapper -->
	</header>
</template>

<script>
	export default {
		name: "Header"
	};
</script>

<style lang="scss" scoped>
.app-header {
	.header-wrapper {
		display: flex;
		justify-content: center;
		nav {
			padding: 30px 30px 0 30px;
			.nav-list {
				display: flex;
				justify-content: center;
				margin-bottom: 0;
				padding-left: 0;
				li {
					margin-bottom: 2rem;
					&::marker {
						font-size: 0;
					}
					&:not(:last-child) {
						margin-right: 2.5rem;
					}
					a {
						color: var(--color-gold);
						font-size: 1.25rem;
						font-weight: bold;
						text-decoration: none;
						padding-bottom: .75rem;
						&.router-link-exact-active {
							border-bottom: 2px solid var(--color-blue);
						}
					}
				}
			}
		}
	}
}
</style>