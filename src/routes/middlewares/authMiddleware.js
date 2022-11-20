import useUserStore from '@/stores/user'

export default async ({ redirect }) => {
    const store = useUserStore()
    
    if (!store.user) {
        try {
            const result = await store.getUser() 
            
            if(!result) {
                redirect('/SignIn')
            } 
        } catch (e) {
            console.log(e);
        }
    }
  }