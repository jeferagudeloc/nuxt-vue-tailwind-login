<template>
    <header class="bg-gray-900">
      <nav class="container mx-auto flex items-center justify-between px-4 py-2">
        <router-link to="/" class="text-white font-bold text-lg">Logo</router-link>
        <ul class="flex space-x-4">
          <li @click="logout" class="text-white cursor-pointer"> Logout </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
import { useAuthStore } from '~/store';
  const store = useAuthStore();
  export default  {
    name: 'Header',
    methods: {
      async logout() {

        const logout = await store.logoutUser();
        if (logout) {
          navigateTo("/login")
        }
      }
    }
  };
  </script>
  
  <style>
  header {
    padding: 10px;
  }
  </style>
  