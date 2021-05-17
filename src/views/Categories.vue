<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">

        <CategoryCreate @created="addNewCat" />

        <CategoryEdit />
        
      </div>
    </section>
  </div>
</template>

<script>

import CategoryCreate from "@/components/CategoryCreate.vue"
import CategoryEdit from '@/components/CategoryEdit'

export default {
  name: 'categories',
  data: () => ({
    categories: []
  }),
  methods: {
    addNewCat(category) {
      this.categories.push(category)
      console.log(this.categories)
    }
  },
  components: {
    CategoryCreate,
    CategoryEdit
  }
}
</script>
