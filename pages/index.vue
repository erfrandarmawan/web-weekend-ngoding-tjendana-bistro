<template>
  <main class="w-full h-auto flex flex-col bg-white font-teachers">
    <!-- Landing Page Section -->
    <section id="section-landing-page" class="w-full h-screen flex items-center justify-center">
      <img src="https://ik.imagekit.io/b3amk7ihm/tjendana_logo.png" class="w-40 md:w-60 xl:w-60"/>
    </section>
    <!-- ./Landing Page Section -->

    <!-- Gallery Section -->
    <section id="section-gallery" class="w-full h-screen flex items-center justify-center">
      <div class="w-2/3 h-screen bg-red-100">
        <div class="carousel w-full h-screen">
          <div id="slide1" class="carousel-item relative w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full object-cover" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide2" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>
          
          <div id="slide2" class="carousel-item relative w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full object-cover" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide3" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>

          <div id="slide3" class="carousel-item relative w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full object-cover" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide4" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>

          <div id="slide4" class="carousel-item relative w-full">
            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full object-cover" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide1" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="h-4 w-4"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3 h-screen flex flex-col justify-center p-10">
        <h1 class="text-5xl"><span class="text-secondary">Tjendana</span> <span class="text-primary">Bistro</span></h1>
        <p class="font-poppins mt-5 text-2xl italic font-light">We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart</p>

        <a href="https://maps.app.goo.gl/fPeCZPHwxjAR1aaLA" target="_blank" rel="noopener noreferrer"
          class="btn btn-lg rounded-none mt-12 btn-primary text-white font-medium text-2xl">
          Explore Authentic Asian Food
        </a>
      </div>
    </section>
    <!-- ./Gallery Section -->
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