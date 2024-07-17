import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routesData } from './constants';
import { ProtectedRoute } from './components/';
import './App.css';
import { AuthProvider } from './contexts';

const App: React.FC = () => {
  const renderWithLayout = (path: string, Layout: any, Component: React.FC, layoutProps?: any) => {
    return <Route key={path} path={path} element={<Layout {...(layoutProps ? layoutProps : {})}><Component /></Layout>} />;
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routesData.map(({ path, component: Component, layout: Layout, isPrivate, layoutProps }: any) => {
            return isPrivate ? (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute>
                    <Layout {...(layoutProps ? layoutProps : {})}>
                      <Component />
                    </Layout>
                  </ProtectedRoute>
                }
              />
            ) : (
              renderWithLayout(path, Layout, Component, layoutProps)
            );
          })}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
