"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    revealElements.forEach((el) => observer.observe(el));

    const cards = document.querySelectorAll(".focus-card");
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("animate-in"), i * 120);
            });
            cardObserver.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    if (cards.length) cardObserver.observe(cards[0]);

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-content">
            <span className="overline">Personal Site</span>
            <h1>
              Ideas, images,
              <br />
              and things I build
            </h1>
            <p className="hero-description">
              A space for writing, design, photography, and the occasional
              deep dive into the tech that powers it all. This is a work in
              progress, with more to come.
            </p>
          </div>
          <div className="hero-meta">
            <div className="hero-stats">
              {[
                { value: "Blog", label: "Writing", href: "/blog" },
                { value: "Photo", label: "Images" },
                { value: "Code", label: "Projects" },
                { value: "Design", label: "Visual" },
              ].map((stat) => {
                const inner = (
                  <>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </>
                );
                return stat.href ? (
                  <a key={stat.label} href={stat.href} className="stat" style={{ textDecoration: "none", color: "inherit" }}>
                    {inner}
                  </a>
                ) : (
                  <div key={stat.label} className="stat">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="wrap">
          <div className="section-header">
            <h2 className="section-title">What I&apos;m Working On</h2>
            <span className="section-count">01 — 03</span>
          </div>
          <div className="focus-grid">
            {[
              {
                number: "01",
                title: "Writing & Blog",
                description:
                  "Longform reflections on running, technology & lessons learned.",
                image: "/images/blog.jpg",
                alt: "Jamey running a race",
                position: "50% 15%",
                href: "/blog",
              },
              {
                number: "02",
                title: "Design & Photography",
                description:
                  "Visual design & photography.",
                image: "/images/design.jpg",
                alt: "Mountain lake with alpine reflection",
              },
              {
                number: "03",
                title: "Tech & Projects",
                description:
                  "Building things with code. Projects, tools, and human intersection with AI.",
                image: "/images/tech.png",
                alt: "LEGO desk setup with monitors and keyboard",
              },
            ].map((item) => (
              <a key={item.number} href={item.href ?? "#"} className="focus-card">
                <div className="card-image">
                  <span className="card-number">{item.number}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={item.position ? { objectPosition: item.position } : undefined}
                  />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section reveal">
        <div className="wrap quote-inner">
          <blockquote>
            &ldquo;The best way to predict the future is to invent
            it.&rdquo;
          </blockquote>
          <p className="quote-author">
            <span>&mdash;</span> Alan Kay
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-header">
            <h2 className="section-title">About</h2>
          </div>
          <div className="about-grid">
            {[
              {
                number: "01",
                title: "Builder",
                description:
                  "I like making things — software, photographs, and the occasional questionable woodworking project.",
              },
              {
                number: "02",
                title: "Learner",
                description:
                  "Currently deep in cloud architecture and always picking up something new.",
              },
              {
                number: "03",
                title: "Writer",
                description:
                  "Putting thoughts into words helps me think. This site is where those words end up.",
              },
              {
                number: "04",
                title: "Creative",
                description:
                  "Design and photography are how I see the world — always looking for the next frame.",
              },
            ].map((item) => (
              <div key={item.number} className="about-item reveal">
                <span className="about-number">{item.number}</span>
                <h3 className="about-title">{item.title}</h3>
                <p className="about-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
