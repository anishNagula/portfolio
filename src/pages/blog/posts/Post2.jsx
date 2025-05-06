import React from 'react';
import styles from "./posts.module.css"

const TestPost = () => {
  return (
    <article className={styles.post_main}>
      <header>
        <h1 className={styles.post_title}>Why I Switched to Arch Linux (And Why You Might Too)</h1>
      </header>

      <p className={styles.post_time}>-- April 28, 2025 --</p>

      <p>
        So after years of distro-hopping and using everything from Ubuntu to
        Fedora, I finally made the switch to Arch Linux — and I’m not looking
        back.
      </p>

      <h2 className={styles.heading2}>⚙️ Full Control</h2>
      <p>
        Arch doesn’t install anything you didn’t ask for. I chose my bootloader,
        file system, desktop environment, even which fonts to use. It's the DIY
        Linux.
      </p>

      <h2 className={styles.heading2}>📦 The AUR is a Game Changer</h2>
      <p>
        The Arch User Repository (AUR) is an enormous collection of community-maintained
        packages. Need a rare app? It's probably there. Want to patch a package before
        compiling? Easy.
      </p>

      <h2 className={styles.heading2}>🧘 Minimalism Meets Performance</h2>
      <p>
        With no unnecessary services running in the background, Arch flies even
        on old hardware. Combine that with a lightweight window manager like
        i3 or Hyprland, and you've got a blazing
      </p>
    </article>
  )
}

export default TestPost;