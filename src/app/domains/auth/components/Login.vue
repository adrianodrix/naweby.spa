<template lang="html">
  <div class="container">
     <div class="alert alert-danger" v-if="error" >
       {{ response.error }}
     </div>
     <div class="row">
       <div class="col-md-12">
         <form role="form" @submit="submit">
           <div class="form-group">
             <label for="exampleInputEmail1">
               Email address
             </label>
             <input type="email" class="form-control" id="exampleInputEmail1" v-model="user.email" />
             </div>
           <div class="form-group">
            <label for="exampleInputPassword1">
               Password
             </label>
             <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password" />
           </div>
          <button type="submit" class="btn btn-default" :disabled="!isValid">
             Enviar
           </button>
         </form>
       </div>
     </div>
   </div>
</template>

<script>
import { isEmpty } from 'lodash'
import { postLogin } from '../services'

export default {
  data () {
    return {
      error: false,
      response: null,
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isValid () {
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  },
  methods: {
    submit () {
      postLogin(this.user)
        .then((response) => {
          console.log(response)
          this.$router.push('/')
        })
        .catch((error) => {
          this.response = error.response.data.data
          this.error = true
        })
    }
  }
}
</script>

<style lang="sass">
</style>
