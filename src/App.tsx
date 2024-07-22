import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routesData } from './constants';
import { ProtectedRoute, PublicRoute } from './components/';
import './App.css';
import { AuthProvider } from './contexts';

const App: React.FC = () => {
  const renderWithLayout = (path: string, Layout: any, Component: React.FC, layoutProps?: any) => {
    return <Route key={path} path={path} element={
      <Layout {...(layoutProps ? layoutProps : {})}>
        <Component />
      </Layout>
    } />;
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routesData.map(({ path, component: Component, layout: Layout, isPrivate, isPublic, layoutProps }: any) => {
            if(isPrivate){
              return (
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
              )
            } else if(isPublic){
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PublicRoute>
                      <Layout {...(layoutProps ? layoutProps : {})}>
                        <Component />
                      </Layout>
                    </PublicRoute>
                  }
                />
              )
            } else{
              return (
                renderWithLayout(path, Layout, Component, layoutProps)
              );
            }
          })}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
