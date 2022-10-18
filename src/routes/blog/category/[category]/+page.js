// @ts-nocheck
// src/routes/blog/category/[category]/+page.js
export const load = async ({ fetch, params }) => {
    console.log("+++++++++++++++++")
    console.log(params)
    const { category } = params
    const response = await fetch(`/api/posts`)
    const allPosts = await response.json()
    console.log(allPosts)
  
    const posts = allPosts
      .filter(post => post.meta.categories.includes(category))
  
    return {
      category,
      posts
    }
  }