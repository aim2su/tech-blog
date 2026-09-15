import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <div className="container-content py-24 text-center">
        <h1 className="text-6xl text-accent font-bold">404</h1>
        <p className="mt-4 text-muted">Страница не найдена</p>
        <div className="mt-8 flex justify-center">
          <Button to="/">На главную</Button>
        </div>
      </div>
    </>
  );
}