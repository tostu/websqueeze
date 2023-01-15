<script>
	import "../app.css";
	import './styles.css';
	import Header from './Header.svelte';
	
</script>

<div class="app">
	<!-- <Header /> -->
	<div class="navbar bg-base-100 fixed top-0">
		<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
	  </div>
	<main>
		<slot/>
	</main>

	<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
		<div>
		  <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</div>
