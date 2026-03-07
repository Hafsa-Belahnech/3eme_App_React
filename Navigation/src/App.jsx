import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion';
import Contact from './Contact'; // Exercice 4
import Notifications from './Notifications'; // Exercice 1
import ListeCourses from './ListeCourses'; // Exercice 2
import Galerie from './Galerie';
import './App.css';


function App() {

  const mesCourses = ['Pommes', 'Pain', 'Lait', 'Chocolat'];

  return (
    <div>
      <h1 className="titre">Mon Application React</h1>
      <nav>
        <Link to="/">Accueil</Link> |
        <Link to="/apropos">À propos</Link>
        <Link to="/connexion">Connexion</Link> {/* Ajoute un lien ici */}
        <Link to="/contact"> Contact</Link> {/* Exercice 4 */}

      </nav>

       <hr />

      {/* Test Exercice 1 */}
      <Notifications nb={5} />

      {/* Test Exercice 2 */}
      <h3>Ma liste de courses :</h3>
      <ListeCourses articles={mesCourses} />

      {/* Test Exercice 3 */}
      <h3>Ma Galerie :</h3>
      <Galerie />

      <hr />

      {/* <Connexion /> */} 
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/contact" element={<Contact />} /> {/* Exercice 4 */}

      </Routes>
    </div>
  );
}

export default App;
