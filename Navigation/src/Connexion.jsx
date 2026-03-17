import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div>
      {connecte ? (
        <h2>Connecté !</h2>
      ) : (
        <h2>Déconnecté!!</h2>
      )}
      <button onClick={() => setConnecte(!connecte)}>
        Changer l’état
      </button>
    </div>
  );
}

export default Connexion;
