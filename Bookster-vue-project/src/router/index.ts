/*
  Detta är routerm som används för att 
  byta vilka komponenter som ska användas
  vid rätt URL/path
*/
import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '../components/SignInPage.vue'
import RegisterNewAccount from '../components/RegisterNewAccount.vue'
import UserHeaderDisplayed from '../components/UserHeaderDisplayed.vue'
import GuestPage from '../components/GuestPage.vue'
import AdminPageBooks from '../components/AdminPageBooks.vue'
import AdminPageUsers from '../components/AdminPageUsers.vue'
import UserPage from '../components/UserPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Signin',
      name: 'sign-in',
      component: SignInPage
    },
    {
      path: '/Signup',
      name: 'sign-up',
      component: RegisterNewAccount
    },
    {
      path: '/guest',
      name: 'guestpage',
      component: GuestPage
    },
    {
      path: '/admin/books',
      name: 'adminpagebooks',
      component: AdminPageBooks
    },
    {
      path: '/admin/users',
      name: 'adminpageusers',
      component: AdminPageUsers
    },
    {
      path: '/library/books',
      name: 'userpage',
      component: UserPage
    },
  ]
})

export default router
