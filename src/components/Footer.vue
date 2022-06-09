<template>
	<div class="cont">
		<div class="content">
			<div class="leftBox">
				<div class="imgBox">
					<img src="/img/Logo_set.png" @click="goHome()" />
				</div>
				<div class="btnBox" style="margin-left: 60px">
					<b-tooltip label="Coming soon" position="is-bottom" type="is-light">Docs</b-tooltip>
				</div>
				<div class="proint">·</div>
				<div class="btnBox">
					<b-tooltip label="Coming soon" position="is-bottom" type="is-light">Terms</b-tooltip>
				</div>
				<div class="proint">·</div>
				<div class="btnBox">
					<b-tooltip label="Coming soon" position="is-bottom" type="is-light">Discord</b-tooltip>
				</div>
				<div class="proint">·</div>
				<div class="btnBox">
					<b-tooltip label="Coming soon" position="is-bottom" type="is-light">Twitter</b-tooltip>
				</div>
			</div>
			<div class="rightBox">© Sigroll 2022</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		props: {},
		methods: {
			goHome() {
				this.$router.push("/");
			},
		},
	};
</script>

<style>
	.cont {
		min-height: 160px;
		background: #ffffff;
		position: relative;
		z-index: 10;
		background-image: url(/img/Mask.png);
		background-repeat: no-repeat;
		/* background-size: 300% 300%; */
	}

	.cont .content {
		/* position: absolute; */
		width: 100%;
		max-width: 1440px;
		/* left: 50%;
		margin-left: -720px; */
		position: relative;
		margin: 0 auto;
	}

	.cont .content .leftBox {
		float: left;
		height: 32px;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		color: #000000;
		margin-top: 67px;
		vertical-align: middle;
		line-height: 32px;
		margin-left: 50px;
	}

	.cont .content .leftBox .imgBox {
		float: left;
		height: 32px;
		width: 128px;
	}

	.cont .content .leftBox .imgBox img {
		height: 32px;
		width: 128px;
		cursor: pointer;
	}

	.cont .content .leftBox .btnBox {
		float: left;
		cursor: pointer;
	}

	.cont .content .leftBox .btnBox:hover {
		font-weight: 600;
		text-decoration-line: underline;
	}

	.cont .content .leftBox .proint {
		float: left;
		margin: 0 16px;
	}

	.cont .content .rightBox {
		float: right;
		width: 110px;
		height: 26px;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 160%;
		text-align: right;
		color: #787878;
		margin-top: 67px;
		margin-right: 50px;
	}
</style>
