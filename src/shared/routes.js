import Home from "./home";
import News from "./news";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    title :'all'
  },
  {
    path: "/news",
    component: News,
    title : 'news'
  }
];

export default routes;
