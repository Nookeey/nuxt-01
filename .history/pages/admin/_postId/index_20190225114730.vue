<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Max',
        title: 'My awsome Post',
        content: 'Super amazing',
        thumbnailLink: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
      }
    }
  }
}
</script>
