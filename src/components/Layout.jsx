import Navigation from '@/components/Navigation.jsx';

const Layout = ({ children }) => (
  <>
    <Navigation />

    <div className="min-h-screen bg-app">{children}</div>
  </>
);

export default Layout;