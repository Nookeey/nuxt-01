<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            { 
              id: '1',
              title: 'First Post',
              previewText: 'This is our first post!',
              thumbnail: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
            },
            { 
              id: '2',
              title: 'Second Post',
              previewText: 'This is our second post!',
              thumbnail: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
            }
          ]
        })
      }, 1000)
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(new Error())
    })
  },
  created() {
    // this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
