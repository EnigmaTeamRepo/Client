import useUserStore from '@/stores/user'

export default ({ redirect }) => {
    const store = useUserStore()
    console.log(store);
    
    if (!store.user) {
      redirect('/SignIn')
    }
  }