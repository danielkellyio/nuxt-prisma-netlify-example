<script setup lang="ts">
const { data } = await useFetch("/api/posts");
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in data" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
