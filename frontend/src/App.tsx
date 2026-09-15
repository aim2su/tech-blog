import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';
import { About } from './pages/About';
import { Collaboration } from './pages/Collaboration';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="articles/:slug" element={<ArticleDetail />} />
            <Route path="about" element={<About />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}