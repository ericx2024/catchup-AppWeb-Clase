import axios from "axios";
import {LogoApiService} from "@/shared/services/logo-api.service.js";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});

export class NewsApiService {
    apikey = '7dd4442ad84642768511a09c74f5ff5b';
    logoApi = new LogoApiService();

    getSources() {
        return http.get(`top-headlines/sources?apikey=${this.apikey}`);
    }

    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apikey=${this.apikey}`);
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}