import Vue from 'vue'
import { formatdate } from './globaldate'


Vue.filter('globalDate', formatdate)