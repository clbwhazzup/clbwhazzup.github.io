/*
 * Every portfolio entry, in the order it should appear on its page.
 *
 *   pages    - which page ids the entry appears on (an entry may appear twice)
 *   details  - the main paragraph (HTML allowed)
 *   sections - optional extra headed sections, e.g. a reflection
 *   media    - images (and optional video embeds) shown beside the text
 *
 * Removing an entry from here removes it from its page AND from the home
 * page thumbnail grid, which is generated from this file.
 */

const LINK = (href, text) =>
  `<a target="_blank" rel="noopener noreferrer" href="${href}">${text}</a>`;

module.exports = [
  /* ---------------- Web ---------------- */
  {
    id: 'twitch-ad-muter',
    order: { web: 1, program: 3 },
    pages: ['web', 'program'],
    title: 'Twitch Ad Muter',
    tags: ['JavaScript', 'Browser Extension'],
    details:
      `This is a JavaScript extension for browsers that mutes fullscreen video ads on twitch.tv. ` +
      `Twitch's ads are known to be hard to block. People have done it, but I couldn't find a working ` +
      `extension. I thought it would be interesting to try it myself. I was able to do it, but it plays ` +
      `the video at full volume, and then breaks the video player at the end. I settled on just muting ` +
      `them, and have never revisted the project. The source code can be found ` +
      `${LINK('https://github.com/clbwhazzup/TwitchAdMuter', 'here')}. There is also a zipped version ` +
      `under "Releases" on the right.`,
    media: [
      { type: 'image', src: 'images/webscreen5.webp', alt: 'Twitch Ad Muter running on a stream' },
      { type: 'image', src: 'images/webcode5.webp', alt: 'Source code for the Twitch Ad Muter extension' },
    ],
  },
  {
    id: 'restaurant-website',
    order: { web: 3 },
    pages: ['web'],
    title: 'Restaurant Website',
    tags: ['HTML', 'CSS', 'Coursework'],
    details:
      `This is a website for a fictional restaurant I programmed for a college course. I wrote it entirely ` +
      `in HTML and CSS. It had to be on par with the most basic restaurant websites, so it included a menu, ` +
      `a contact page, and an about page. The source code can be found ` +
      `${LINK('https://github.com/clbwhazzup/clbwhazzup.github.io', 'here')}. ` +
      `${LINK('GRA310Website/index.html', 'Click here')} to visit the website.`,
    media: [
      { type: 'image', src: 'images/webscreen3.webp', alt: 'Home page of the fictional restaurant website' },
      { type: 'image', src: 'images/webcode3.webp', alt: 'HTML source of the restaurant website' },
      { type: 'image', src: 'images/webscreen4.webp', alt: 'Menu page of the fictional restaurant website' },
      { type: 'image', src: 'images/webcode4.webp', alt: 'CSS source of the restaurant website' },
    ],
  },

  /* ---------------- Programming ---------------- */
  {
    id: 'pebble-watchface',
    order: { program: 1 },
    pages: ['program'],
    title: 'PebbleOS Watchface',
    tags: ['C', 'JavaScript', 'PebbleSDK'],
    details:
      `This is an informational watchface I made for PebbleOS watches. I wrote it in C and Javascript with ` +
      `the PebbleSDK, which is the standard method. I was heavily inspired by seven segment LCDs and their ` +
      `watchface equivalents. I decided to go with a fourteen segment font, since it can better display ` +
      `letters. I learned a lot from a tutorial on the ` +
      `${LINK('https://developer.rebble.io/tutorials/watchface-tutorial/part1/', 'Pebbles website')}. I had ` +
      `to research a little further to complete it, since it didn't show everything I wanted. The files are ` +
      `public on Github ${LINK('https://github.com/clbwhazzup/the-pebble-watchface', 'here')}. It is ` +
      `available for free on the ` +
      `${LINK('https://apps.repebble.com/7bd156396b3649bc9612992d', 'App Store')}. Other changes may come ` +
      `in the future.`,
    media: [
      { type: 'image', src: 'images/programscreen6.png', alt: 'The watchface showing the time' },
      { type: 'image', src: 'images/programscreen7.png', alt: 'The watchface showing information' },
      { type: 'image', src: 'images/programscreen8.png', alt: 'The watchface on a Pebble watch' },
      { type: 'image', src: 'images/programscreen9.png', alt: 'The watchface settings' },
    ],
  },
  {
    id: 'todo-app',
    order: { program: 2 },
    pages: ['program'],
    title: 'Android To-Do List App',
    tags: ['Java', 'SQLite', 'Android'],
    details:
      `This is an Android app I made for a college course. I wrote in Java, and it uses SQLite to save data. ` +
      `It is a to-do list app that allows the user to add, edit, and delete tasks. The source code can be ` +
      `found ${LINK('https://github.com/clbwhazzup/IT390-To-Do-List-App', 'here')}. You can also find the ` +
      `packaged app and a presentation under "Releases" on the right.`,
    media: [
      { type: 'image', src: 'images/programscreen1.webp', alt: 'The to-do list app task screen' },
      { type: 'image', src: 'images/programscreen2.webp', alt: 'Adding a task in the to-do list app' },
      { type: 'image', src: 'images/programscreen3.webp', alt: 'Editing a task in the to-do list app' },
      { type: 'image', src: 'images/programcode1.webp', alt: 'Java source code for the to-do list app' },
    ],
  },

  /* ---------------- Games ---------------- */
  {
    id: 'paddle-ball',
    order: { game: 1 },
    pages: ['game'],
    title: 'Paddle Ball',
    tags: ['Godot', 'GDScript', 'Android', 'Mobile'],
    details:
      `This is a mobile game I have been building in Godot. Four paddles sit in a ring around the arena, ` +
      `and you drag anywhere on the screen to spin the whole ring at once. The ball comes at you in a ` +
      `color, and only bricks of that same color break, so everything else is a wall you have to work ` +
      `around. Every level is a picture drawn out of colored bricks instead of a random grid, and there ` +
      `are 99 of them so far. There are also five power ups you earn and spend: RAINBOW, MULTI, HEAVY, ` +
      `SLOW and STICKY. The game is free, with a banner ad during play and an optional ad you can watch ` +
      `for extra power ups. Progress is saved on the device. It is in a closed test on Google Play right ` +
      `now, so the source is not public yet. ` +
      `${LINK('https://groups.google.com/g/paddle-ball-testers', 'Click here')} to join the test.`,
    media: [
      { type: 'image', src: 'images/paddleball1.webp', alt: 'Paddle Ball gameplay with the paddle ring around a block of colored bricks' },
      { type: 'image', src: 'images/paddleball2.webp', alt: 'The MULTI and SLOW power ups active during a level' },
      { type: 'image', src: 'images/paddleball3.webp', alt: 'Two balls moving toward opposite sides of the paddle ring' },
      { type: 'image', src: 'images/paddleball4.webp', alt: 'The level clear screen showing a new high score' },
    ],
  },
  {
    id: 'growopsim',
    order: { game: 2 },
    pages: ['game'],
    title: 'GrowOpSim',
    tags: ['Unreal Engine', 'Blueprints'],
    details:
      `This is a prototype game which has a working title of GrowOpSim. I would like to further develop this ` +
      `game, but I have not looked for a team or found the time to develop it. I wrote this entirely in ` +
      `Unreal Blueprints. The source files can be found ` +
      `${LINK('https://github.com/clbwhazzup/GrowOpSim', 'here')}, along with the zipped game under ` +
      `"Releases" on the right. The main gameplay is growing and selling plants, while upgrading your ` +
      `stuff, like pots and seeds. When I started this project, there wasn't many realistic growing games, ` +
      `so I felt the need to fill that space. This still does get occcasional updates, but releases are ` +
      `much rarer.`,
    media: [
      { type: 'image', src: 'images/gamecode1.webp', alt: 'Unreal Blueprint graph from GrowOpSim' },
      { type: 'image', src: 'images/gamescreen1.webp', alt: 'Gameplay screenshot from GrowOpSim' },
      { type: 'image', src: 'images/gamecode2.webp', alt: 'Another Unreal Blueprint graph from GrowOpSim' },
      { type: 'image', src: 'images/gamescreen2.webp', alt: 'Another gameplay screenshot from GrowOpSim' },
    ],
  },
  {
    id: 'rigged-alien',
    order: { game: 3 },
    pages: ['game'],
    title: 'Rigged and Animated Alien',
    tags: ['Maya', 'HumanIK', 'Animation'],
    details:
      `This is a 3D model I was given to set up a skeleton and manually rig with HumanIK. I then skinned the ` +
      `skeleton, and animated the model for the final project of a class. This was done entirely in Maya. ` +
      `The are no source files, but the animations that I created are to the right.`,
    media: [
      { type: 'image', src: 'images/walkani.avif', alt: 'Walk cycle animation of the rigged alien' },
      { type: 'image', src: 'images/runani.avif', alt: 'Run cycle animation of the rigged alien' },
      { type: 'image', src: 'images/backflipani.avif', alt: 'Backflip animation of the rigged alien' },
    ],
  },

  /* ---------------- 3D Modelling ---------------- */
  {
    id: 'spool-holder',
    order: { '3d': 1 },
    pages: ['3d'],
    title: 'Spool Holder',
    tags: ['Autodesk Fusion', '3D Printing'],
    details:
      `This is a spool holder I designed specifically so I wouldn't have to buy an Automatic Material System ` +
      `for my Bambu Lab printer. The spool holder can hold up to 1KG spools for 1.75mm filament. The spool ` +
      `holders are designed with hooks so that they can connect to each other in multiple ways. Technically, ` +
      `this could be used for many things. The model was made in Autodesk Fusion, but I have not printed it ` +
      `due to the high cost and the lack of actual need. I will upload it to MakerWorld once I confirm that ` +
      `it prints correctly and is strong enough for 1KG spools.`,
    media: [
      { type: 'image', src: 'images/spoolholder1.webp', alt: 'Spool holder model in Autodesk Fusion' },
      { type: 'image', src: 'images/spoolholder2.webp', alt: 'Spool holders connected by their hooks' },
    ],
  },
  {
    id: 'portable-container',
    order: { '3d': 2 },
    pages: ['3d'],
    title: 'Portable Container',
    tags: ['Autodesk Fusion', '3D Printing'],
    details:
      `This is a portable container I designed to be used for anything. It's an extremely simple model that ` +
      `I made in Autodesk Fusion. There are 2 parts that are printed and connected with just a piece of ` +
      `1.75mm 3D printing filament. The container holds itself closed due to a low tolerance in between the ` +
      `2 printed parts. I may adapt this for a print-in-place design. The source file will not be available, ` +
      `but the model is available for download ` +
      `${LINK('https://makerworld.com/en/models/1682758-portable-container', 'here')}, at MakerWorld so that ` +
      `anyone can preview and 3D print it.`,
    media: [
      { type: 'image', src: 'images/container1.webp', alt: 'Portable container model in Autodesk Fusion' },
      { type: 'image', src: 'images/container2.webp', alt: 'Portable container printed and closed' },
      { type: 'image', src: 'images/container3.webp', alt: 'Portable container printed and open' },
      { type: 'image', src: 'images/container4.webp', alt: 'The two printed parts of the container' },
    ],
  },
  {
    id: 'phone-model',
    order: { '3d': 3 },
    pages: ['3d'],
    title: 'Phone Model and Animation',
    tags: ['3DS Max', 'Unreal Engine', 'ffmpeg'],
    details:
      `This is a phone model and animation I made for a college course. It was made at the beginning of my ` +
      `college career in 3DS Max. It was then refined and polished for the capstone course of my degree. ` +
      `During the capstone, I also decided it was necessary to be able to import it into a game engine. I ` +
      `found that it was very simple to export and import the project into Unreal Engine. I also used ffmpeg ` +
      `to convert the image sequence to a video. I then used it to convert the video to a GIF for this ` +
      `website. The source files are available ` +
      `${LINK('https://github.com/clbwhazzup/PhoneModelAnimation', 'here')}, and all files can be downloaded ` +
      `under Releases on the right.`,
    sections: [
      {
        heading: 'Reflection',
        paragraphs: [
          `I learned how to model with reference images. I was able to take 2D shapes and create a 3D model. ` +
            `I also learned how to use 3DS Max more efficiently. There are, like other professional software, ` +
            `many shortcuts to save time. I also learned how to import assets into Unreal. I discovered that ` +
            `many softwares can export to .fbx files, and Unreal can import those files. There's also lots of ` +
            `settings to make sure you only import what you need.`,
          `The main challenge I faced was cleaning up the model. I needed to get rid of a lot of unnecessary ` +
            `vertices, but I couldn't find an easy way to do that. I decided to manually remove the vertices, ` +
            `and add back some edges to make the faces transition more smoothly. Finally, I learned how to use ` +
            `ffmpeg to convert between image and video file types. I went from an image sequence to a video, ` +
            `and then from a video to a GIF to avoid embedding the video.`,
          `The model's main improvement was its animation. It's now much more detailed, and includes movement ` +
            `on the phone buttons. Any button can move, but I have it type 911. The models were also slightly ` +
            `improved. Like I said, I removed a ton of vertices, and the handset now has speaker and ` +
            `microphone holes. I also changed the smoothing on the model.`,
        ],
      },
    ],
    media: [
      { type: 'image', src: 'images/gamescreen3.avif', alt: 'Animation of the phone model' },
      { type: 'image', src: 'images/gamescreen4.avif', alt: 'Animation of the phone handset' },
      { type: 'image', src: 'images/gamescreen5.webp', alt: 'Phone model rendered in 3DS Max' },
      { type: 'image', src: 'images/gamescreen6.webp', alt: 'Phone model wireframe' },
      { type: 'image', src: 'images/gamescreen7.webp', alt: 'Phone model imported into Unreal Engine' },
      { type: 'image', src: 'images/gamescreen8.webp', alt: 'Close up of the phone model buttons' },
    ],
  },
];
