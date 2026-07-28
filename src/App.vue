<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <AppHeader />
    <q-page-container>
      <main>
        <router-view />
      </main>
    </q-page-container>
  </q-layout>
</template>
