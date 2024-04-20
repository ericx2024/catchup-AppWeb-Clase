<script>
import {Article} from "@/news/model/article.entity.js";
import PvCard from "@/main.js";
import PvAvatar from "@/main.js";

export default {
  name: "article-card",
  components: {PvAvatar, PvCard},
  props:{
    article : Article
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :alt="article.title"
           :src="article.urlToImage"
    </template>
    <template #title>
      <p>{{ article.title }}</p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center mr-2">
          <pv-avatar :aria-label="article.source.name"
                     :image="article.source.urlToLogo"
                     shape="circle"/>
        </span>
        <span class="flex align-items-center justify-content-center">
          {{ article.source.name }}
        </span>
      </p>
      <p class="flex align-content-start flex-wrap mt-4">
        {{ article.description}}
      </p>
    </template>
    <template #footer>
      <a :href="article.url"
         target="_blank">{{ $t('read-more')}}</a>
    </template>
  </pv-card>

</template>








