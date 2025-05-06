import React from 'react';
import styles from "./posts.module.css"

const SelfAuth = () => {
  return (
    <article className={styles.post_main}>
      <header>
        <h1 className={styles.post_title}>Self-Sovereign Authentication: Taking Control of Your <em>Digital Identity</em></h1>
      </header>

      <p className={styles.post_time}>-- April 28, 2025 --</p>
      
      <section>
        <p>In the current state of the internet, your identity is pretty much just a login away. But who do you think actually <em className={styles.post_importword}>owns</em> that identity? Google? maybe Facebook? or could it be Apple?</p>
        <p>Most of us log into apps and websites using accounts managed by these tech giants without giving much thought to it. I get that it's convenient but it comes with some strings attached. Your data is stored on someone else’s servers and your access to it is controlled by terms you didn’t write, and your privacy is, frankly, negotiable.</p>

        <p>But what if it didn’t have to be that way?</p>
      </section>

      <section>
        <h2 className={styles.heading2}>The Idea: Self-Sovereign Authentication</h2>
        <p>Lately, I’ve been exploring a concept that I call <strong className={styles.post_importword}>self-sovereign authentication</strong>. It’s a pretty simple, yet powerful idea: <em>you should be in control of your digital identity</em>, not some third-party provider.</p>

        <p>At its core, this approach lets <em>you</em>, the user, manage and prove who you are online using cryptographic tools without relying on any centralized authority through some third-party provider. It’s your ID, your credentials, your rules.</p>
      </section>

      <section>
        <h2 className={styles.heading2}>How It Works</h2>
        <p>Here’s the plan:</p>
        <ul>
          <li>You generate a <strong className={styles.post_importword}>set of cryptographic keys</strong>, namely: one primary key and two backups.</li>
          <li>These keys act as your identity. They’re what you use to sign in, authenticate, and prove that it's really you.</li>
          <li>To enhance security, the keys rotate automatically at regular intervals, minimizing the chance of compromise.</li>
          <li>If you lose access, the backup keys (securely stored elsewhere) can be used for recovery. No need for those secret questions or emailing support.</li>
          <li>And here’s where it gets interesting: there’s also a something I call the <strong className={styles.post_importword}>vouching system</strong>. Trusted users can “vouch” for you, adding a decentralized layer of trust. Think of it like your friends confirming that it's you.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.heading2}>Why I Think This Matters</h2>
        <p>Self-sovereign authentication isn’t just about cool cryptography. It’s about <strong>privacy, resilience, and freedom</strong>.</p>
        <ul>
          <li><strong className={styles.post_importword}>Privacy</strong>: No more handing your personal data to platforms that monetize it. You decide who knows what.</li>
          <li><strong className={styles.post_importword}>Portability</strong>: Your identity goes where you go. No lock-in. No need to “create an account” on every new app or website that you visit.</li>
          <li><strong className={styles.post_importword}>No Middlemen</strong>: No need to trust a corporation to authenticate you.</li>
          <li><strong className={styles.post_importword}>Simple Integration</strong>: The system is designed to be easy for developers too. Any app or website can add support with a lightweight API which means more places for you to use your self-managed identity.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.heading2}>Where This Is Going</h2>
        <p>Right now, this is a hobby project, something I’m building and refining in my spare time. But I truly believe this idea has some potential.</p>

        <p>We’re at a crossroads of sorts in digital identity. I mean, the current model works, but it’s built on outdated assumptions about trust and control. Self-sovereign authentication offers a path to a time where people are empowered, not exploited.</p>

        <p>I’m still in the dark, seeing how key management could work, and thinking about how to make this both usable and secure and building prototypes. It feels hard but I’m optimistic that with a bit more polish and feedback, this could grow into a real alternative to the current status quo.</p>
      </section>

      <section>
        <h2 className={styles.heading2}>Extras</h2>
        <p>If you're curious or want to collaborate, feel free to reach out. I’m always open to feedback, ideas, and building something better — together.</p>

        <footer>
          <p>--- Anish 🤧 ---</p>
        </footer>
      </section>
    </article>
  );
}

export default SelfAuth;
