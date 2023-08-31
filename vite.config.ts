import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { whyframe } from '@whyframe/core';
import { whyframeSvelte } from '@whyframe/svelte';

export default defineConfig({
  plugins: [
    whyframe(),
    whyframeSvelte(),
    sveltekit(),
  ],
});
