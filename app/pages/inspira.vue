<template>
  <div class="h-[40rem] w-full flex flex-col overflow-clip gap-4">
    <CosmicPortal
      ref="cosmicPortal"
      container-class="rounded-lg"
      class="h-full w-full"
    >
      <div class="w-1/2 h-full flex items-center pl-8 justify-start">
        <h1 class="font-extrabold text-3xl text-white drop-shadow-lg text-left font-mono">
          Bolokozord
        </h1>
      </div>
    </CosmicPortal>
  </div>
  <div class="my-8">
    <UPageGrid>
      <UPageCard
        v-for="feature in features"
        title="Tailwind CSS"
        description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements."
        icon="i-simple-icons-tailwindcss"
        orientation="horizontal"
        spotlight
        spotlight-color="primary"
        outline
        to="/obsidian"
        class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]"
      >
        <img
          src="http://lorempixel.com.br/500/400/?1"
          alt="Tailwind CSS"
          class="w-full h-24 rounded-lg"
        >
      </UPageCard>
      <UPageGrid />
    </upagegrid>
  </div>
</template>

<script lang="ts" setup>
const cosmicPortal = useTemplateRef('cosmicPortal')

function activatePortal() {
  if (!cosmicPortal.value) return
  cosmicPortal.value.activatePortal()
}

function shiftDimensions() {
  if (!cosmicPortal.value) return
  cosmicPortal.value.shiftDimensions()
}

const features = [
  {
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '/',
    image:
      'https://images.pexels.com/photos/2762083/pexels-photo-2762083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cta: 'Learn more',
    class: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3'
  },
  {
    name: 'Full text search',
    description: 'Search through all your files in one place.',
    href: '/',
    image:
      'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cta: 'Learn more',
    class: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3'
  },
  {
    name: 'Multilingual',
    description: 'Supports 100+ languages and counting.',
    href: '/',
    cta: 'Learn more',
    class: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4'
  },
  {
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    href: '/',
    cta: 'Learn more',
    class: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2'
  },
  {
    name: 'Notifications',
    description: 'Get notified when someone shares a file or mentions you in a comment.',
    href: '/',
    image:
      'https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cta: 'Learn more',
    class: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4'
  }
]

const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.'
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.'
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and experience design.'
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.'
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.'
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.'
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.'
  }
]
</script>
