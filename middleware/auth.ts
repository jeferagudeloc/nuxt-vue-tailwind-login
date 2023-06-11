import { useAuthStore } from "../store"

export default defineNuxtRouteMiddleware((to, from) => {
 
  const store = useAuthStore();
  if (!store.isLogged) {
      return navigateTo("/login")
  }
})