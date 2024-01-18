import { defineStore } from 'pinia';

interface IUserPayload {
  username: string;
  password: string;
}

interface IUserSignupPayload {
  username: string;
  email: string,
  password: string;
  confirmPassword: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    failed: false
  }),
  actions: {
    async authenticateUser({ username, password }: IUserPayload) {
      const { data, pending, error, status }: any = await useFetch('https://localhost:7186/api/users/authenticate', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            username,
            password,
          },
        });

        this.loading = pending;

        if (data.value) {
          const token = useCookie('token');
          token.value = data?.value?.token;
          this.authenticated = true;
        }
    },
    async registerUser({ username, email, password, confirmPassword }: IUserSignupPayload) {
      console.log(`${username} | ${email}`);
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null;
    },
  },
});