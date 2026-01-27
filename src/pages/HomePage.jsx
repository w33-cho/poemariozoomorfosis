import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { BookOpen, ShoppingCart, User, ChevronDown, Menu } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage = () => {
  const [activePoem, setActivePoem] = useState(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'poems', 'author'];
      const scrollPosition = window.scrollY + 200;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const poems = [
    {
      id: 1,
      title: 'La trampa',
      content: `Veneno inoculado,
y yo aún captando sus tiempos.
Suero que en secreto cura,
vitamina de ensueño.
¿Cuál irá a dar,
el lunático?
Qué suero?
Tengo tomadas ambas manos.
A turnos voy muriendo.
Él me revive a ratos
sólo si sedo.`,
      image: '/images/la_trampa.webp',
      section: 'Libro I'
    },
    {
      id: 2,
      title: 'El barranco',
      content: `Caminé por el barranco;
puse mis pies a turnos en el vacío.
Me sentí libre,
loba con alas,
podía elegir no ser presa
y salir de caza,
mas rotas estaban mis alas.
Al final, el abismo encuentra fondo;
en dicho fondo,
agua de un lago.
Mas mi sed era de carne.
¡El agua no sacia tal sed!
Vi mi rostro y lloré,
lo que veía,
no era humano,
era un zorro.`,
      image: '/images/libro2.webp',
      section: 'Libro II: La Disección del Yo Reflejo'
    },
    {
      id: 3,
      title: 'A contraluz',
      content: `A oscuras y a solas,
solo a mi ser escucho
y aquí gobierna
este manantial de pasiones
que me permiten distinguir
entre el universo y yo.`,
      image: '/images/libro4.webp',
      section: 'Libro IV: El Manantial en la Oscuridad'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>ZOOMORFOSIS</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>El Libro</button>
            <button onClick={() => scrollToSection('poems')} className={`nav-link ${activeSection === 'poems' ? 'active' : ''}`}>Poemas</button>
            <button onClick={() => scrollToSection('author')} className={`nav-link ${activeSection === 'author' ? 'active' : ''}`}>La Autora</button>
            <div className="nav-menu">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="nav-menu-trigger" style={{ color: 'var(--orange-primary)' }}>
                    <Menu />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent style={{ marginTop: '20px' }}>
                  <DropdownMenuItem onClick={() => scrollToSection('about')} style={{ color: 'var(--orange-primary)' }}>El Libro</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('poems')} style={{ color: 'var(--orange-primary)' }}>Poemas</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('author')} style={{ color: 'var(--orange-primary)' }}>La Autora</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button
              onClick={() => window.open('https://a.co/d/gDDC9A9', '_blank')}
              className="btn-primary nav-cta"
            >
              <ShoppingCart className="btn-icon" />
              Comprar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section ">
        <div className="hero-background  ">
          <img
            src="/images/portada.webp"
            alt="Zoomorfosis Portada"
            className="hero-image"
            loading="lazy"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content justify-center">
          <div className="hero-text text-center md:indent-20 sd: indent-4">
            <h1 className="hero-title md:indent-8 sd: indent-4"><span className="zoo">ZOO</span><br /><span className="morfosis">MORFOSIS</span></h1>
            <p className="hero-subtitle md:-indent-5">Un viaje poético de transformación</p>
            <p className="hero-author md:-indent-2">Por Rosy Arya Safo</p>
            <div className="hero-buttons justify-center">
              <Button 
                onClick={() => window.open('https://a.co/d/gDDC9A9', '_blank')}
                className="btn-primary btn-large"
              >
                <ShoppingCart className="btn-icon" />
                Comprar en Amazon
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary btn-large"
              >
                <BookOpen className="btn-icon" />
                Descubrir Más
              </Button>
            </div>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <ChevronDown className="scroll-icon" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">Sobre el libro</span>
              <h2 className="section-title">Un viaje de transformación</h2>
              <div className="about-description">
                <p>
                  Zoomorfosis es un viaje poético intenso que narra la transformación de una persona a través de una relación que apasiona y destruye al mismo tiempo. La transformación en animal refleja el proceso de conectarse con su instinto más salvaje y primitivo para redescubrirse.
                </p>
                <p>
                  Rosy Arya Safo construye un bestiario íntimo donde la metamorfosis no es escape sino confrontación. El poemario logra su potencia no en el rechazo de lo humano, sino en la aceptación de que lo humano es ya animal. Este viaje resulta ser un desnudamiento: bajo la piel social laten el zorro, el lobo, la kitsune.
                </p>
                <p>
                  Zoomorfosis es, sin lugar a dudas, un libro que desde el lenguaje figurado junto a la sensualidad poética de la autora, invita, provoca, seduce con su realidad ficcionada y su tránsito hacia un ser distinto. Un recorrido metafórico que nos acerca al crecimiento espiritual desde la autovaloración y superación.
                </p>
              </div>
              <div className="about-details">
                <div className="detail-item">
                  <strong>Editorial:</strong> Warriors Editions
                </div>
                <div className="detail-item">
                  <strong>Colección:</strong> Caracol Nocturno - Poesía
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="/images/whatsapp.webp"
                alt="Portada Zoomorfosis"
                className="book-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Poems Section */}
      <section id="poems" className="poems-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Poemas destacados</span>
            <h2 className="section-title">Descubre la metamorfosis</h2>
            <p className="section-subtitle">
              Una selección de poemas que revelan el viaje de transformación
            </p>
          </div>
          <div className="poems-grid">
            {poems.map((poem) => (
              <Card key={poem.id} className="poem-card">
                <div className="poem-card-image">
                  <img src={poem.image} alt={poem.title} loading="lazy" />
                  <div className="poem-section-label">{poem.section}</div>
                </div>
                <div className="poem-card-content">
                  <h3 className="poem-title">{poem.title}</h3>
                  <div className="poem-text">
                    {poem.content.split('\n').map((line, index) => (
                      <p key={index} className="poem-line">{line}</p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="author-section">
        <div className="section-container">
          <div className="author-content">
            <div className="author-image-wrapper">
              <img
                src="/images/2.webp"
                alt="Rosy Arya Safo"
                className="author-image"
                loading="lazy"
              />
            </div>
            <div className="author-text">
              <span className="section-label">La autora</span>
              <h2 className="section-title">Rosy Arya Safo</h2>
              <div className="author-bio">
                <p>
                  Rosy Arya Safo es una poeta que encuentra en la metamorfosis su lenguaje más honesto. A través de más de diez años de escritura, ha construido un universo poético donde lo humano y lo animal se entrelazan en una danza visceral de transformación.
                </p>
                <p>
                  Su obra explora los territorios del desapego, la sensualidad y el instinto, creando un bestiario íntimo donde cada palabra es una cicatriz, cada verso un latido que late sin vergüenza de ser fiera y vulnerable a la vez.
                </p>
                <p>
                  Con <em>Zoomorfosis</em>, Rosy nos invita a despojarnos de la piel social y redescubrir nuestro instinto más primitivo y salvaje, ese que nos conecta con nuestra esencia más verdadera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Inicia tu transformación</h2>
            <p className="cta-subtitle">
              Descubre el viaje poético que te conectará con tu instinto más salvaje
            </p>
            <Button 
              onClick={() => window.open('https://a.co/d/gDDC9A9', '_blank')}
              className="btn-primary btn-xlarge"
            >
              <ShoppingCart className="btn-icon" />
              Comprar en Amazon
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">ZOOMORFOSIS</h3>
              <p className="footer-text">Por Rosy Arya Safo</p>
              <p className="footer-text">Warriors Editions</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-subtitle">Enlaces</h4>
              <button onClick={() => window.open('https://a.co/d/gDDC9A9', '_blank')} className="footer-link">
                Comprar en Amazon
              </button>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 Zoomorfosis. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;