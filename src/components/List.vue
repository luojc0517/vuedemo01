<template>
  <ol>
    <li v-for="news in list">
      <p class="title">{{news.title}}</p>
      <p class="data">{{news.create_at}}</p>
      <p class="author">{{news.author.loginname}}</p>
    </li>
  </ol>
</template>

<script>

</script>

<style scoped>
  ol {
    margin-left: 2rem;
    list-style: outside decimal;
  }

  li {
    line-height: 1.5;
    padding: 1rem;
    border-bottom: 1px solid #b6b6b6;
  }

  .title {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .date {
    font-size: .8rem;
    color: #d6d6d6;
  }
</style>
