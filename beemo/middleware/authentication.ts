import { useAuthStore } from '~/store/authentication';

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const token = useCookie('token'); 
  
    if (token.value) {
      authenticated.value = true;
    }
  
    if (token.value && to?.name === 'sign-up') {
      return navigateTo('/');
    }
  
    // Secure a route example (replace login)
    if (!token.value && to?.name !== 'login') {
      abortNavigation();
      return navigateTo('/');
    }
  });