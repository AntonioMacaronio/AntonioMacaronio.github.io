import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from './ProfilePic';
import './AboutMe.css';

const CV_URL = process.env.PUBLIC_URL + '/resume.pdf';

const NEWS = [
  { date: 'Apr 15, 2026', text: 'Accepted a PhD position at UT Austin.' },
  {
    date: 'Apr 13, 2026',
    text: (
      <>
        Received the{' '}
        NSF Graduate Research Fellowship (<a href="https://www.nsfgrfp.org/" target="_blank" rel="noopener noreferrer">GRFP</a>).
      </>
    ),
  },
];

// A light slash between inline links (outside the links, so it isn't clickable)
const Sep = () => <span className="link-slash" aria-hidden="true">/</span>;

// Quick links above the name, scrolling with the page (no separate nav bar)
const QuickLinks = () => (
  <nav className="quick-links">
    <a href="#news">News</a>
    <Sep />
    <a href="#research">Research</a>
    <Sep />
    <a href="#projects">Projects</a>
    <Sep />
    <Link to="/minigame" title="Play the minigame">Minigame</Link>
  </nav>
);

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`about-me ${isVisible ? 'visible' : ''}`}>
        <QuickLinks />
        <section id="top" className="about-me-content">
          <div className="about-me-text">
            <h1>Anthony Zhang</h1>
            <p>
              I'm a PhD student at UT Austin and a recipient of the NSF Graduate Research Fellowship (<a href="https://www.nsfgrfp.org/" target="_blank" rel="noopener noreferrer">GRFP</a>). I obtained my Bachelor's and Master's from UC Berkeley, advised by <a href="https://people.eecs.berkeley.edu/~kanazawa/">Angjoo Kanazawa</a>. My interests include 3D computer vision, Real2Sim2Real, humanoid robotics, dexterous manipulation, and video models. I'm also an avid fan of building large-scale infrastructure and robot infra!
            </p>
            <p>
              Currently, I'm an Applied Scientist intern at Amazon FAR (Frontier AI and Robotics) working on humanoid robotics.
            </p>
            <div className="contact-links">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer">CV</a>
              <Sep />
              <a href="https://scholar.google.com/citations?user=kEw2NUsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <Sep />
              <a href="https://www.linkedin.com/in/antzhang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <Sep />
              <a href="https://github.com/AntonioMacaronio" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="about-me-sidebar">
            <ProfilePic />
            {/* written out, not a mailto link, so scrapers don't pick it up */}
            <p className="email-text">antzhan1234 [at] gmail [dot] com</p>
          </div>
        </section>

        <section id="news" className="research-container">
          <h2>News</h2>
          <ul className="news-list">
            {NEWS.map((item) => (
              <li key={item.date}>
                <span className="news-date">{item.date}</span> &mdash; {item.text}
              </li>
            ))}
          </ul>
        </section>

        <section id="research" className="research-container">
          <h2>Research</h2>
          <div className="research-section">

            {/* M.S. thesis */}
            <div className="publication-block">
              <div className="publication-thumbnail">
                <video
                  src={process.env.PUBLIC_URL + '/EgoVideoMotion.mp4'}
                  style={{ aspectRatio: '600 / 320' }}
                  alt="Generated motion climbing a reconstructed staircase beside its egocentric video"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  Aligning Egocentric Video and Human Motion Generation
                </h3>
                <div className="publication-authors">
                <b>Anthony Zhang</b>
                </div>
                <div className="publication-links">
                  <a href="https://antoniomacaronio.github.io/aligning-video-motion/" target="_blank" rel="noopener noreferrer">Website</a>
                  <span className="link-separator">|</span>
                  <span className="publication-pending">M.S. Thesis, UC Berkeley 2026 (paper coming soon)</span>
                </div>
                <p className="publication-description">
                  A single video diffusion model that generates egocentric video and full-body human motion together, or either one from the other, aligned with a text curriculum and geometric post-training against a 3D reconstruction model.
                </p>
              </div>
            </div>

            {/* Viser paper */}
            <div className="publication-block">
              <div className="publication-thumbnail">
                <video
                  src={process.env.PUBLIC_URL + '/viser_demos.mp4'}
                  style={{ aspectRatio: '1526 / 1080' }}
                  alt="Viser demo video"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  Viser: Imperative, Web-based 3D Visualization in Python
                </h3>
                <div className="publication-authors">
                Brent Yi, Chung Min Kim, Justin Kerr, Gina Wu, Rebecca Feng, <b>Anthony Zhang</b>,
                Jonas Kulhanek, Hongsuk Choi, Yi Ma, Matthew Tancik, Angjoo Kanazawa
                </div>
                <div className="publication-links">
                  <a href="https://viser.studio/main/" target="_blank" rel="noopener noreferrer">Website</a>
                  <span className="link-separator">|</span>
                  <a href="https://arxiv.org/pdf/2507.22885" target="_blank" rel="noopener noreferrer">Paper - RSS 2026</a>
                </div>
                <p className="publication-description">
                  A Python library for creating and manipulating 3D visualizations for computer vision and robotics in a web-based interface.
                </p>
              </div>
            </div>

            {/* VideoMimic paper */}
            <div className="publication-block">
              <div className="publication-thumbnail">
                <video
                  src={process.env.PUBLIC_URL + '/VideoMimic.mp4'}
                  style={{ aspectRatio: '1920 / 1080' }}
                  alt="VideoMimic demo video"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  VideoMimic: Visual Imitation Enables Contextual Humanoid Control
                </h3>
                <div className="publication-authors">
                Arthur Allshire*, Hongsuk Choi*, Junyi Zhang*, David McAllister*, <b>Anthony Zhang</b>, Chung Min Kim,
                Trevor Darrell, Pieter Abbeel, Jitendra Malik, Angjoo Kanazawa
                </div>
                <div className="publication-links">
                  <a href="https://videomimic.net/" target="_blank" rel="noopener noreferrer">Website</a>
                  <span className="link-separator">|</span>
                  <a href="https://arxiv.org/abs/2505.03729" target="_blank" rel="noopener noreferrer">Paper - CoRL 2025</a>
                  <span className="award-badge">Best Student Paper Award</span>
                </div>
                <p className="publication-description">
                  A Real2Sim2Real pipeline for learning humanoid control from video demonstrations using visual imitation learning.
                </p>
              </div>
            </div>

            {/* Predict-Optimize-Distill paper */}
            <div className="publication-block">
              <div className="publication-thumbnail">
                <img src={process.env.PUBLIC_URL + '/PodThumbnail.png'} alt="Predict-Optimize-Distill thumbnail" />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  Predict-Optimize-Distill: Self-Improving Cycle for 4D Object Understanding
                </h3>
                <div className="publication-authors">
                Mingxuan Wu*, Huang Huang*,  Justin Kerr,  Chung Min Kim, <b>Anthony Zhang</b>, Brent Yi, Angjoo Kanazawa
                </div>
                <div className="publication-links">
                  <a href="https://predict-optimize-distill.github.io/pod.github.io/" target="_blank" rel="noopener noreferrer">Website</a>
                  <span className="link-separator">|</span>
                  <a href="https://arxiv.org/abs/2504.17441" target="_blank" rel="noopener noreferrer">Paper - ICCV 2025</a>
                </div>
                <p className="publication-description">
                  A self-improving framework for 4D object understanding through prediction, optimization, and distillation cycles.
                </p>
              </div>
            </div>

            {/* HSfM paper */}
            <div className="publication-block">
              <div className="publication-thumbnail">
                <img src={process.env.PUBLIC_URL + '/HSfMThumbnail.png'} alt="HSfM thumbnail" />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">
                  HSfM: Reconstructing People, Places, and Cameras
                </h3>
                <div className="publication-authors">
                Lea Müller*, Hongsuk Choi*, <b>Anthony Zhang</b>, Brent Yi, Jitendra Malik, Angjoo Kanazawa
                </div>
                <div className="publication-links">
                  <a href="https://muelea.github.io/hsfm/" target="_blank" rel="noopener noreferrer">Website</a>
                  <span className="link-separator">|</span>
                  <a href="https://arxiv.org/abs/2412.17806" target="_blank" rel="noopener noreferrer">Paper - CVPR 2025</a>
                  <span className="award-badge">Highlight</span>
                </div>
                <p className="publication-description">
                  A joint optimization framework to estimate 3D human poses and their shape, scene pointmaps, and camera poses from multiview image captures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="research-container">
          <h2>Other Projects</h2>
          <div className="projects-grid">
            <a className="project-card" href="https://sarevalo2002.github.io/proj-webpage-template/finalprojfinal/index.html" target="_blank" rel="noopener noreferrer">
              <video src={process.env.PUBLIC_URL + '/LiquidSimulation.mp4'} autoPlay loop muted playsInline />
              <div className="project-card-body">
                <h3 className="publication-title">3D Liquid Simulation</h3>
                <div className="publication-authors">
                  Aaron Shalf, <b>Anthony Zhang</b>, Eric Kusnanto, Sebastian Arevalo · CS 184, Spring 2023
                </div>
                <p className="publication-description">
                  A particle-based 3D fluid simulator built on Position Based Fluids, with vorticity, viscosity, collision response and height-based shading.
                </p>
              </div>
            </a>
            <a className="project-card" href="https://antoniomacaronio.github.io/cs180-webpages/random/index.html" target="_blank" rel="noopener noreferrer">
              <video src={process.env.PUBLIC_URL + '/NerfstudioCampanile.mp4'} autoPlay loop muted playsInline />
              <div className="project-card-body">
                <h3 className="publication-title">Nerfacto and Splatfacto on Large Captures</h3>
                <p className="publication-description">
                  Slider comparisons of nerfstudio's Nerfacto and Splatfacto on the UC Berkeley Campanile: 200 images on the main branch against 2,000 images with parallel data loading.
                </p>
              </div>
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <span>Bored? <Link to="/minigame">Shoot some spheres in the minigame →</Link></span>
          <span>Last updated October 2026</span>
        </footer>
      </div>
    </>
  );
};

export default AboutMe;
