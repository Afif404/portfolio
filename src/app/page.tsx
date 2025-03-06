import Navbar from "../components/navbar.tsx";
import Header from '../components/header.tsx';
import Hero from '../components/hero.tsx';
import About from '../components/navigation/about.tsx';
import Services from '../components/navigation/services.tsx';
import ContactForm from '../components/navigation/contactForm.tsx';
import Footer from '../components/navigation/footer.tsx';
import styles from '../styles//home.module.css';

export default function  Home(){
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};


