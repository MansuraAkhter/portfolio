import BackgroundParticles from './BackgroundParticles';
import BackgroundStars from './BackgroundSars';
export default function Hero() {
  return (
    <section style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 65% 10%, rgba(16,99,63,0.45) 0%, rgba(5,13,10,0.9) 45%, #050d0a 80%)',
      }}>
      <BackgroundParticles />
      <BackgroundStars />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* your "Hi, I'm Joyeta" content */}
      </div>
    </section>
  );
}