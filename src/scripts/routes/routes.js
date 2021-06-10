import Home from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/now-playing': Home,
  '/detail/:id': Detail,
};

export default routes;
