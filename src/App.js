import React from 'react';
import './App.css';
import '../src/Components/CSS/Header.css';
import '../src/Components/CSS/Promote.css';
import '../src/Components/CSS/About.css';
import '../src/Components/CSS/GridImg.css';
import '../src/Components/CSS/Philosophy.css';
import '../src/Components/CSS/Offer.css';
import '../src/Components/CSS/ContactForm.css';
import Header from "../src/Components/Header";
import Promote from "../src/Components/Promote";
import About from "../src/Components/About";
import GridImg from "../src/Components/GridImg";
import Philosophy from "../src/Components/Philosophy";
import Offer from "../src/Components/Offer";
import Events from "../src/Components/Events";
import ContactForm from "../src/Components/ContactForm";
import ScrollableAnchor from 'react-scrollable-anchor';

function App() {
  return (
    <div className="App">
      <Header />
      <Promote />
      <ScrollableAnchor id={'about'}><About /></ScrollableAnchor>
      <GridImg />
      <ScrollableAnchor id={'philosophy'}><Philosophy /></ScrollableAnchor>
      <Offer />
      <ScrollableAnchor id={'events'}><Events /></ScrollableAnchor>
      <ScrollableAnchor id={'contact'}><ContactForm /></ScrollableAnchor>
    </div>
  );
}

export default App;
