/* Site-wide settings: name, nav, page metadata, stylesheet order. */

module.exports = {
  name: 'Cameron Binda',
  role: 'Gameplay Programmer',
  github: 'https://github.com/clbwhazzup',

  intro:
    "Welcome to my portfolio. It's organized into a few pages so you can jump " +
    'straight to the kind of work you care about. Pick a section below, or ' +
    'browse the images for a quick look at everything.',

  // Order matters: this drives the nav bar and the home page cards.
  nav: [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'web', label: 'Web', href: 'web.html' },
    { id: 'program', label: 'Programming', href: 'program.html' },
    { id: 'game', label: 'Games', href: 'game.html' },
    { id: '3d', label: '3D Modelling', href: '3d.html' },
  ],

  pages: [
    {
      id: 'home',
      file: 'index.html',
      title: 'Portfolio / Cameron Binda',
      description:
        'Portfolio of Cameron Binda, a gameplay programmer working in web, software, games and 3D modelling.',
    },
    {
      id: 'web',
      file: 'web.html',
      title: 'Web Portfolio / Cameron Binda',
      description: 'Websites and browser extensions built by Cameron Binda.',
      heading: 'Web Portfolio',
      lead: 'Sites and browser tools, written by hand in HTML, CSS and JavaScript.',
      blurb: 'Hand-written sites and browser extensions.',
    },
    {
      id: 'program',
      file: 'program.html',
      title: 'Programming Portfolio / Cameron Binda',
      description: 'Apps, watchfaces and utilities built by Cameron Binda.',
      heading: 'Programming Portfolio',
      lead: 'Applications and utilities across C, Java, JavaScript and the PebbleSDK.',
      blurb: 'Apps and utilities across several platforms.',
    },
    {
      id: 'game',
      file: 'game.html',
      title: 'Game Portfolio / Cameron Binda',
      description: 'Game prototypes and animation work by Cameron Binda.',
      heading: 'Game Portfolio',
      lead: 'Mobile games, prototypes and gameplay work built in Godot, Unreal Engine and Maya.',
      blurb: 'Prototypes and gameplay work.',
    },
    {
      id: '3d',
      file: '3d.html',
      title: '3D Modelling Portfolio / Cameron Binda',
      description: '3D models, prints and animation by Cameron Binda.',
      heading: '3D Modelling Portfolio',
      lead: 'Printable hardware designed in Fusion, plus modelling and animation work.',
      blurb: 'Printable designs, models and animation.',
    },
  ],

  // Concatenated in this order into css/site.css by build.js.
  styles: [
    'base.css',
    'layout.css',
    'header.css',
    'home.css',
    'project.css',
    'footer.css',
  ],
};
