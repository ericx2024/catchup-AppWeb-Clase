<script>
import {NewsApiService} from "@/news/services/news-api.service.js";
import SideMenu from "@/news/components/side-menu.component.vue";
import FooterContent from "@/public/components/footer-content.vue";
import {Article} from "@/news/model/article.entity.js";
import ArticleList from "@/news/components/article-list.component.vue";

export default {
  name: "app",
  components: {ArticleList, FooterContent, SideMenu},
  data() {
    return {
      sidebarVisible: false,
      articles: [],
      error: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    this.getArticlesForSource('bbc-news');
  },
  methods: {
    //build article list from response data
    buildArticleListFromResponseData(articles) {
      return articles.map(
          article => new Article(article.title, article.description,
          article.url, article.urlToImage, article.source)
      );
    },

    //Fetch articles for select Source
    getArticlesForSource(sourceId) {
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            let articles = response.data.articles;
            this.articles = this.buildArticleListFromResponseData(articles);
            console.log(response.data.articles);
          })
          .catch(e => {
            this.error.push(e);
          });
    },
    //Fetch articles for selected Source with Logo Url
    getArticlesForSourceWithLogo(source){
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            let articles = response.data.articles;
            this.articles = this.buildArticleListFromResponseData(articles);
            this.articles.forEach(article => {
              article.source.urlToLogo = source.urlToLogo;
            })
            console.log(response.data.articles);
          })
          .catch(e => {
            this.error.push(e);
          });
    },
    ///Toggle sidebar
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },

    //on Source Selected
    setSource(source) {
      this.getArticlesForSourceWithLogo(source);
      this.toggleSidebar();
    }

  }
}
</script>

<template>
  <div class="w-full">
    <div>
      <pv-menubar #start>
        <pv-button icon="pi pi-bars" label="Catchup"
                   text @click=""></pv-button>
        <side-menu v-model:visible="sidebarVisible"
                   v-on:source-select=""></side-menu>
      </pv-menubar>

    </div>
  </div>
  <div>
    <article-list :articles="articles"></article-list>
  </div>
  <footer-content/>
</template>
