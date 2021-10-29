<template>
	<header class="app-header">
    <div class="header-wrapper">
        <nav class="nav">
					<input type="checkbox" id="nav__checkbox" class="nav__checkbox">
					<label for="nav__checkbox" class="nav__toggle">
						<svg class="menu" viewBox="0 0 448 512" width="100" title="bars">
							<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
						</svg>
						<svg class="close" viewBox="0 0 384 512" width="100" title="times">
							<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
						</svg>
					</label>
          <ul class="nav__menu">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/invitation">Invitation</router-link>
            </li>
            <li>
              <router-link to="/venue">Venue</router-link>
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
		.nav {
			// border-bottom: 1px solid var(--color-blue);
			padding: 30px 0;
			&__toggle {
				position: absolute;
				cursor: pointer;
				margin: 0rem 1rem;
				right: 0;

				svg {
					width: 1.5rem;
					fill: var(--color-blue);
				}

				.close {
					display: none;
				}

				.menu {
					margin-top: 0.2rem;
				}
			}

			&__checkbox {
				display: none;
			}

			&__menu {
				display: flex;
				flex-direction: column;
				gap: 2rem;
				align-items: center;
				margin: 1rem;
					padding: 0;
				li {
					list-style: none;
					display: none;
					&:first-child {
						// margin-right: auto;
						display: block;
					}
				}
				a {
					text-decoration: none;
					color: inherit;
					font-size: 2rem;
					padding-bottom: 1rem;
					&.router-link-exact-active {
						border-bottom: 2px solid var(--color-blue);
					}
				}
				svg {
					width: 1.5rem;
					fill: var(--color-blue);
				}
			}
		}

		// Toggle the hamburger menu in mobile view
		#nav__checkbox:checked ~ ul.nav__menu li {
			display: block;
		}

		//Change from menu to close icon on tap
		#nav__checkbox:checked ~ label.nav__toggle .close {
			display: block;
		}

		#nav__checkbox:checked ~ label.nav__toggle .menu {
			display: none;
		}

		// Desktop view
		@media only screen and (min-width: 760px) {
			.nav {
				&__toggle {
					display: none;
				}

				&__menu {
					flex-direction: row;
					li {
						display: block;
					}
				}
			}
		}
	}
}
</style>