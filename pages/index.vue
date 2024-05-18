<template>
  <main class="w-full h-auto flex flex-col bg-white">
    <!-- Landing Page Section -->
    <section id="section-landing-page" class="w-full h-screen flex items-center justify-center">
      <img src="https://ik.imagekit.io/b3amk7ihm/tjendana_logo.png" class="w-40 md:w-60 xl:w-60"/>
    </section>
    <!-- ./Landing Page Section -->
  </main>
</template>

<script setup lang="ts">
  // Heading and set body attributes
  useHead({
    title: 'Tjendana Bistro',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Authentic Asian Food. We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart' },
      { name: 'keywords', content: 'tjendana bistro, restaurant, food, wedding, venue, moment' },
      { name: 'author', content: 'Erfran Darmawan' },

      { name: 'og:title', content: 'Tjendana Bistro' },
      { name: 'og:site_name', content: 'Tjendana Bistro' },
      { name: 'og:description', content: 'Authentic Asian Food. We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart' },
      { name: 'og:url', content: 'https://tjendana.develobe.id/' },
      { name: 'og:image', content: 'TODO' },
      { name: 'og:image:secure_url', content: 'TODO' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:width', content: '300' },
      { name: 'og:image:height', content: '213' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_US' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Tjendana Bistro' },
      { name: 'twitter:description', content: 'Authentic Asian Food. We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart' },
      { name: 'twitter:image', content: 'TODO' },
    ],
  })
</script>