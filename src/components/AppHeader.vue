<script setup lang="ts">
const links = [
  { to: '/survey', label: 'Form Library' },
  { to: '/creator', label: 'Survey Creator' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/tabulator', label: 'Results Table' },
  { to: '/pdf-export', label: 'PDF Generator' },
]
</script>

<template>
  <q-header elevated class="bg-white text-dark">
    <q-toolbar class="app-toolbar">
      <router-link to="/" class="brand">
        <img src="/favicon.ico" width="28" height="28" alt="" />
        SurveyJS + Quasar
      </router-link>
      <q-space />
      <nav class="app-nav">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.app-toolbar {
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 12px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
}

.app-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}

.nav-link {
  text-decoration: none;
  color: var(--link);
  font-weight: 500;
}

.nav-link.router-link-active {
  text-decoration: underline;
}
</style>
