import { defineStore } from 'pinia'

interface AuthState {
  isLogged: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    return { 
      isLogged: false
    }
  },
  actions: {
    async loginUser(data: { username: string; password: string }) {
      try {
        const url = "http://localhost:18080/authentication";
        const response = await fetch(url, {
          credentials: 'include',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          this.setLoginStatus(true);
        }
        
        return response.ok;
      } catch (error) {
        return false;
      }
    },
    async logoutUser() {
      try {
        const url = "http://localhost:18080/logout";
        const response = await fetch(url, {
          credentials: 'include',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          this.setLoginStatus(false);
        }
        
        return response.ok;
      } catch (error) {
        return false;
      }
    },
    setLoginStatus(status: boolean): void {
      this.isLogged = status;
    },
  },
})
