<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context) {
    console.log(context.params.id)
    return axios.get('https://nuxt-blog-e04a1.firebaseio.com/posts/' + context.params.id + '.json')
      .then(res => {
        return { 
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
