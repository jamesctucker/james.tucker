// import Vue from 'vue'
// import Router from 'vue-router'
// import Index from './pages/index.vue'
// import Home from './pages/Home/Home.vue';
// import About from './pages/About/About.vue'
// import Work from './pages/Work/Work.vue'
// import Writing from './pages/Blog/Writing.vue'
// import Talks from './pages/Talks/Talks.vue'
// import _slug from './pages/Blog/_slug.vue'

// Vue.use(Router)

// export function createRouter() {
//   return new Router({
//     mode: 'history',
//     routes: [
//       {
//         path: '/',
//         name: 'index',
//         component: Index,
//         children: [
//             {
//                 path: '',
//                 name: 'Home',
//                 component: Home
//             },
//             {
//                 path: 'about',
//                 name: 'About',
//                 component: About
//             },
//             {
//                 path: 'work',
//                 name: 'Work',
//                 component: Work
//             },
//             {
//               path: 'writing',
//               name: 'Writing',
//               component: Writing,
//               children: [
//                 {
//                   path: ':slug',
//                   name: 'Slug',
//                   component: _slug
//                 }
//               ]
//             },
//             {
//               path: 'talks',
//               name: 'Talks',
//               component: Talks
//             },
//         ]
//       }
//     ]
//   })
// }