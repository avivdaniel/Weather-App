import { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

import Loading from '@/components/Loading.jsx';
import routes from '@/routes.jsx';
import Layout from '@/components/Layout.jsx';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const App = () => (
  <Provider store={store}>
  <Router>
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((props, index) => (
            <Route key={index} {...props} />
          ))}
          <Redirect to="/"/>
        </Switch>
      </Suspense>
    </Layout>
  </Router>
  </Provider>
);

export default App;
