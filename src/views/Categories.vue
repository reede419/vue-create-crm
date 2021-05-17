<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div class="row" v-else>

        <CategoryCreate @created="addNewCat" />

        <CategoryEdit 
        v-if="categories.length"
          :categories="categories"
          :key="categories.length + updateCount" 
          @updated="updateCategories"  
        />
        <p v-else class="center">Category is empty</p>
        
      </div>
    </section>
  </div>
</template>

<script>

import CategoryCreate from "@/components/CategoryCreate.vue"
import CategoryEdit from '@/components/CategoryEdit'
import Loader from '../components/app/Loader.vue'

export default {
  name: 'categories',
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  methods: {
    addNewCat(category) {
      this.categories.push(category)
      console.log(this.categories)
    }, 
    updateCategories(cat) {
      const idx = this.categories.findIndex( c => c.id === cat.id )
      this.categories[idx].title = cat.title
      this.categories[idx].limit = cat.limit
      this.updateCount++
    }
  },
  components: {
    CategoryCreate,
    CategoryEdit,
    Loader
  }
}
</script>
