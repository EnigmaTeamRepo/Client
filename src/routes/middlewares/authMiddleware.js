import useUserStore from '@/stores/user'

export default async ({ redirect }) => {
    const store = useUserStore()
    
    if (!store.user) {
        redirect('/SignIn')
    }
  }