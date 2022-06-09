<template>
	<div class="header" :style="opacityStyle">
		<div class="content">
			<div class="Docs">
				<b-tooltip label="Coming soon" position="is-bottom" type="is-light">Docs</b-tooltip>
			</div>
			<img src="/img/Logo_set.png" class="logo" @click="goHome()" />
			<b-tooltip label="Coming soon" position="is-bottom" type="is-light" class="Discord">
				<div class="navRightInner navRight01"></div>
			</b-tooltip>
			<b-tooltip label="Coming soon" position="is-bottom" type="is-light" class="Twitter">
				<div class="navRightInner navRight02"></div>
			</b-tooltip>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showhash: true, //显示隐藏的头部
				//就是上面写的绑定的
				opacityStyle: {
					// 设置初始状态是透明的
					backgroundColor: 'rgba(255, 255, 255, 1)',
					// backgroundImage: 'url(/img/Mask.png)'
				}
			}
		},
		computed: {},
		mounted() {
			window.addEventListener("scroll", this.handleScroll);
		},
		beforeDestroy() {
			window.removeEventListener("scroll", this.handleScroll);
		},
		methods: {
			handleScroll() {
				const top = document.documentElement.scrollTop || document.body.scrollTop
				if (top > 80) {
					// let opacity = top / 1000
					this.opacityStyle = {
						backgroundColor: `rgba(255, 255, 255, 0.8)`,
						// backgroundImage: 'url(/img/Mask.png)'
					};
				} else {
					this.opacityStyle = {
						backgroundColor: 'rgba(255, 255, 255, 1)',
						// backgroundImage: 'url(/img/Mask.png)'
					};
				}
			},
			goHome() {
				this.$router.push('/')
			}
		}
	};
</script>

<style scoped>
	.header {
		position: fixed;
		width: 100%;
		height: 80px;
		top: 0px;
		left: 0px;
		z-index: 100;
		background-image: url(/img/Mask.png);
		background-repeat: no-repeat;
		/* background-size: 300% 300%; */
	}

	.content {
		/* position: absolute; */
		width: 100%;
		max-width: 1440px;
		height: 100%;
		/* left: 50%;
		margin-left: -720px; */
		position: relative;
		margin: 0 auto;
	}

	.Docs {
		position: absolute;
		top: 28px;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #000000;
		cursor: pointer;
		margin-left: 50px;
	}

	.Docs:hover {
		color: #3e30e5;
	}

	.logo {
		position: absolute;
		width: 128px;
		height: 32px;
		top: 24px;
		left: 50%;
		margin-left: -64px;
		cursor: pointer;
	}

	.Discord {
		position: absolute;
		top: 18px;
		right: 90px;
		cursor: pointer;
		color: #000000;
	}

	.Discord:hover {
		color: #3e30e5;
	}

	.Twitter {
		position: absolute;
		top: 18px;
		right: 50px;
		cursor: pointer;
		color: #000000;
	}

	.Twitter:hover {
		color: #3e30e5;
	}
</style>
