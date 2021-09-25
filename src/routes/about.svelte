<svelte:head>
  <title>About Jason Sturges</title>
</svelte:head>

<style>
  .gridcol-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr)
  }

  ul.lines small {
    display: block
  }

  ul.lines {
    list-style-type: none;
    padding: 0;
  }

  ul.lines li {
    position: relative;
    margin-left: 15px;
    padding-left: 25px;
    padding-bottom: 15px;
  }

  ul.lines li::before,
  ul.lines li::after {
    content: "";
    display: block;
    position: absolute;
  }

  ul.lines li::before {
    width: 7px;
    height: 7px;
    border: 3px solid #efefef;
    background: #212121;
    border-radius: 50%;
    left: 0;
    top: 5px;
    z-index: 1;
  }

  ul.lines li:after {
    width: 3px;
    height: 100%;
    background: #efefef;
    left: 5px;
    top: 5px;
  }

  ul.lines li:last-of-type {
    padding-bottom: 3px;
  }
</style>

<h1>About this site</h1>

<section class="statement">
  <h2>Statement</h2>
  <p>Creative professional leveraging technology for immersive experiences. Agile in software development methodologies
    from both product and project-based work, fluent cross platform in multiple tool chains for web, mobile, and
    desktop.</p>

  <p>Self-motivated approach, proactive operating independently or within teams, enables integration with clear focus of
    short-term goals and roadmaps. Institutes consistently effective business solutions utilizing modern standards and
    solid design patterns.</p>

  <p>An aspiring leader and team worker dedicated to meet challenges and contribute towards growth of the
    organization.</p>
</section>

<div class="gridcol-2">

  <section class="publications">
    <h2>Publications</h2>

    <ul class="lines">
      <li>
        <span><a href="https://www.apress.com/us/book/9781484210956">Learn Pixi.js</a></span>
        <small>Technical Reviewer</small>
      </li>
      <li>
        <span><a href="https://www.apress.com/us/book/9781484209530">Build your own 2D Game Engine</a></span>
        <small>Technical Reviewer</small>
      </li>
      <li>
        <span><a href="https://www.apress.com/us/book/9781484225820">Building a 2D Game Physics Engine</a></span>
        <small>Technical Reviewer</small>
      </li>
      <li>
        <span><a href="https://www.apress.com/us/book/9781484206720">Advanced ActionScript 3 second edition</a></span>
        <small>Author of revision and Technical Reviewer</small>
      </li>
      <li>
        <span><a href="https://www.apress.com/us/book/9781484205853">Foundation ActionScript 3 second edition</a></span>
        <small>Author of revision and Technical Reviewer</small>
      </li>
    </ul>
  </section>

  <section class="experience">
    <h2>Experience</h2>

    <ul class="lines">
      <li>
        <span>Kannegiesser ETECH</span> &mdash; Senior Frontend Developer
        <small>Industrial equipment</small>
      </li>
      <li>
        <span>Meredith Corporation</span> &mdash; Mobile Application Developer
        <small>Publishing</small>
      </li>
      <li>
        <span>Publicis Groupe</span> &mdash; Senior Creative Technologist
        <small>Healthware technologies</small>
      </li>
      <li>
        <span>QA Graphics</span> &mdash; Lead Programmer
        <small>Building automation industry</small>
      </li>
      <li>
        <span>Two Rivers Marketing</span> &mdash; Interactive Developer
        <small>B2B digital marketing</small>
      </li>
      <li>
        <span>QAS</span> &mdash; Interactive Developer
        <small>Cleantech and green building industry</small>
      </li>
      <li>
        <span>iSEEK Corporation</span> &mdash; Senior Software Engineer
        <small>Geometric search engine</small>
      </li>
      <li>
        <span>Engineering Animation</span> &mdash; Senior Software Engineer
        <small>Visualization and collaborative solutions</small>
      </li>
    </ul>
  </section>
  
</div>





