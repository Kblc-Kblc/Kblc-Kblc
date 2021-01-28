<template>
<div id="loading" class="cssload-container">
	<div class="cssload-whirlpool"></div>
</div>
</template>

<script>
</script>

<style>
#loading {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}


.cssload-container{
	position:relative;
}
	
.cssload-whirlpool,
.cssload-whirlpool::before,
.cssload-whirlpool::after {
	position: absolute;
	top: 50%;
	left: 50%;
	border: 2px solid rgb(204,204,204);
	border-left-color: rgb(0,0,0);
	border-radius: 1748px;
}

.cssload-whirlpool {
	margin: -44px 0 0 -44px;
	height: 88px;
	width: 88px;
	animation: cssload-rotate 2200ms linear infinite;
}

.cssload-whirlpool::before {
	content: "";
	margin: -40px 0 0 -40px;
	height: 77px;
	width: 77px;
	animation: cssload-rotate 2200ms linear infinite;
}

.cssload-whirlpool::after {
	content: "";
	margin: -51px 0 0 -51px;
	height: 98px;
	width: 98px;
	animation: cssload-rotate 4400ms linear infinite;
}



@keyframes cssload-rotate {
	100% {
		transform: rotate(360deg);
	}
}
</style>