import { CardComponent } from './components/CardComponent';
import { FooterComponent } from './components/FooterComponent';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <CardComponent />
      <FooterComponent />
    </div>
  );
}