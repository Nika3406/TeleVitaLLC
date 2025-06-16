import React from 'react';

function About() {
  return (
    <div className="hero">
      <div className="container">
        <h1>About</h1>
      </div>
      <div className="container">
        <div className="content-wrapper">
          <div className="card-continer">
            <div className="card">
              <div className="text-section">
                <h2><strong>Welcome to Televita LLC</strong></h2>
                <p>
                  At Televita, we bridge the gap in healthcare by bringing expert, compassionate care to
                  you — wherever you are.
                </p>
                <h2><strong>Ekaterine Metreveli AGNP-BC</strong></h2>
                <p>
                  Ekaterine Metreveli is a highly skilled and patient-centered Advanced Practice Provider with
                  over 16 years of diverse experience in healthcare. She holds a Master of Science in Nursing
                  with a specialization in Adult-Gerontology Primary Care from LaSalle University in Philadelphia,
                  PA.
                </p>
                <p>
                  Ekaterine’s extensive background in critical care includes managing critically ill patients in
                  intensive care units, advanced hemodynamic monitoring, ventilator management, and
                  performing complex interventions. Her expertise extends to both acute and chronic care,
                  ensuring individualized, evidence-based treatment tailored to each patient’s unique needs.
                </p>
                <p>
                  Fluent in Georgian and proficient in Russian, Ekaterine effectively engages with a diverse
                  patient population, fostering trust and open communication. She is certified in DOT physicals,
                  Advanced Cardiovascular Life Support, Basic Life Support, and holds DEA licensure,
                  underscoring her commitment to excellence and innovation in patient care.
                </p>
              </div>
            </div>
          </div>
          <div className="image-section">
            <img
              loading="lazy"
              role="presentation"
              decoding="async"
              fetchPriority="high"
              src="/EkaPicture.webp"
              alt="Ekaterine Metreveli"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
