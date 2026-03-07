// Galerie.jsx
// On importe les images depuis le dossier src
import img1 from './img1.jpg' 
import img2 from './img2.jpg' 
import img3 from './img3.png'

function Galerie() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <img src={img1} alt="Image 1" width="100" />
      <img src={img2} alt="Image 2" width="100" />
      <img src={img3} alt="Image 3" width="100" />
    </div>
  );
}

export default Galerie;
