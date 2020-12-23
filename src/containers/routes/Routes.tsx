/**
 * Importing npm packages.
 */
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

/**
 * Importing npm design components.
 */

/**
 * Importing user defined components.
 */
import AuthPage from '../../pages/auth-page/AuthPage';
import ChapterForm from '../../pages/chapter-form/ChapterForm';
import ChapterPage from '../../pages/chapter-page/ChapterPage';
import ExplorePage from '../../pages/explore-page/ExplorePage';
import NovelDashboard from '../../pages/novel-dashboard/NovelDashboard';
import NovelForm from '../../pages/novel-form/NovelForm';
import NovelPage from '../../pages/novel-page/NovelPage';
import PageNotFound from '../../pages/page-not-found/PageNotFound';
import SearchPage from '../../pages/search-page/SearchPage';
import Workspace from '../../pages/workspace/Workspace';

/**
 *  Importing user defined modules.
 */
import { useAuth } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
interface IRoutes {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  props?: any;
}

/**
 * Declaring the constants.
 */
const publicRoutes: IRoutes[] = [
  { path: '/auth', component: AuthPage },
  { path: '/explore', component: ExplorePage },
  { path: '/search', component: SearchPage },
  { path: '/novel/:novelID', component: NovelPage },
  { path: '/novel/:novelID/:chapterID', component: ChapterPage }
];
const privateRoutes: IRoutes[] = [
  { path: '/workspace', component: Workspace },
  { path: '/workspace/new-novel', component: NovelForm, props: { type: 'new' } },
  { path: '/workspace/edit-novel', component: NovelForm, props: { type: 'edit' } },
  { path: '/workspace/:novelID', component: NovelDashboard },
  { path: '/workspace/:novelID/chapter', component: ChapterForm }
];

function Routes() {
  const { authenticated } = useAuth();

  const publicRouteComponents = publicRoutes.map((route) => (
    <Route key={route.path} exact path={route.path}>
      <route.component {...route.props} />
    </Route>
  ));
  const privateRouteComponents = privateRoutes.map((route) => <Route key={route.path} exact path={route.path} render={() => (authenticated ? <route.component {...route.props} /> : <AuthPage />)} />);
  return (
    <Switch>
      {publicRouteComponents}
      {privateRouteComponents}
      <Route path='*' component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
