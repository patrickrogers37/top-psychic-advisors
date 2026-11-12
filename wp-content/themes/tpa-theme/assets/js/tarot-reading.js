/* Клієнтська логіка авторського розкладу; питання нікуди не надсилається. */
(function () {
  'use strict';

  const deck = [
    { name: 'The Fool', numeral: '0', art: 'fool', color: '#d8a779', theme: 'A beginning with room to breathe.', message: 'You may be nearer to a fresh start than it feels. Curiosity can be more useful than a perfect plan.', prompt: 'What would you try if you did not need every answer first?' },
    { name: 'The Magician', numeral: 'I', art: 'magician', color: '#d9a45f', theme: 'What is already in your hands.', message: 'Attention, skill and intention are resources too. Gather what you have before looking for something new.', prompt: 'Which strength could you put to use today?' },
    { name: 'The High Priestess', numeral: 'II', art: 'priestess', color: '#a998cf', theme: 'Listen beneath the noise.', message: 'A quiet observation may deserve more space. Give yourself time to notice what you already sense.', prompt: 'What do you know when you stop trying to explain it?' },
    { name: 'The Empress', numeral: 'III', art: 'empress', color: '#c7959b', theme: 'Make room for what can grow.', message: 'Care and patience can turn a small idea into something sustaining. Nurture the part of life asking for attention.', prompt: 'What would feel different if you treated it gently?' },
    { name: 'The Emperor', numeral: 'IV', art: 'emperor', color: '#cd9872', theme: 'Give the moment a steady shape.', message: 'A boundary or clear plan may help. Structure works best when it supports your values instead of replacing them.', prompt: 'Where would a little more structure help you feel free?' },
    { name: 'The Hierophant', numeral: 'V', art: 'hierophant', color: '#cbb783', theme: 'Learn from a trusted source.', message: 'Shared wisdom can be a useful starting point. Keep what fits your experience and question what does not.', prompt: 'Whose perspective helps you think more clearly?' },
    { name: 'The Lovers', numeral: 'VI', art: 'lovers', color: '#d69591', theme: 'Choose with your values in view.', message: 'Connection and choice meet here. Clarity can come from noticing what feels mutual, honest and aligned.', prompt: 'What choice reflects the kind of relationship you want?' },
    { name: 'The Chariot', numeral: 'VII', art: 'chariot', color: '#8eb6ad', theme: 'Move with intention.', message: 'Different impulses can point in different directions. A small, deliberate step may help you regain your sense of course.', prompt: 'What is one direction you are ready to commit to?' },
    { name: 'Strength', numeral: 'VIII', art: 'strength', color: '#daa96f', theme: 'Lead with quiet courage.', message: 'Gentleness can be a form of strength. Patience with yourself may make a difficult conversation or choice more possible.', prompt: 'What would a brave but kind response look like?' },
    { name: 'The Hermit', numeral: 'IX', art: 'hermit', color: '#a8a4be', theme: 'Take a little room to reflect.', message: 'Solitude can help sort your own thoughts from outside expectations. A pause may bring useful perspective.', prompt: 'What becomes easier to hear when things grow quiet?' },
    { name: 'Wheel of Fortune', numeral: 'X', art: 'wheel', color: '#d5ad6e', theme: 'Notice what is changing.', message: 'Some conditions shift beyond your control. Look for the part you can meet with flexibility and care.', prompt: 'What can you influence, even if you cannot control the whole outcome?' },
    { name: 'Justice', numeral: 'XI', art: 'justice', color: '#96b2ac', theme: 'Bring the pieces into balance.', message: 'A fair view asks for facts as well as feeling. Take a moment to consider what each person, including you, needs.', prompt: 'What would feel honest and fair from every side?' },
    { name: 'The Hanged One', numeral: 'XII', art: 'hanged', color: '#9c98c2', theme: 'Try another angle.', message: 'A pause can reveal a detail you could not see while rushing forward. You are allowed to change your point of view.', prompt: 'What might look different if you gave it more time?' },
    { name: 'Death', numeral: 'XIII', art: 'death', color: '#8eb6a5', theme: 'Let an old chapter be complete.', message: 'An ending can create space without erasing what mattered. Notice what is ready to be carried forward in a new form.', prompt: 'What are you ready to stop carrying as it was?' },
    { name: 'Temperance', numeral: 'XIV', art: 'temperance', color: '#89b7bd', theme: 'Find a workable middle.', message: 'Small adjustments can bring unlike needs into conversation. Let a steady pace do some of the work.', prompt: 'Which two parts of this situation could meet halfway?' },
    { name: 'The Devil', numeral: 'XV', art: 'devil', color: '#c58486', theme: 'Look closely at the ties that bind.', message: 'A habit or expectation may feel more fixed than it is. Name it without blame; that can be the first step toward choice.', prompt: 'What would you choose if fear had less say?' },
    { name: 'The Tower', numeral: 'XVI', art: 'tower', color: '#d4916e', theme: 'Let a shaken assumption be examined.', message: 'A sudden change can unsettle the story you had built. Stay with what is real and rebuild from firmer ground.', prompt: 'Which assumption is ready for a closer look?' },
    { name: 'The Star', numeral: 'XVII', art: 'star', color: '#8ec1bb', theme: 'Keep a small source of hope close.', message: 'Rest, honesty and simple care can help restore perspective. You do not need to solve everything at once.', prompt: 'What helps you feel a little more like yourself?' },
    { name: 'The Moon', numeral: 'XVIII', art: 'moon', color: '#a69acb', theme: 'Make space for what is still unclear.', message: 'Not every detail is visible yet. Move gently, check your assumptions and give uncertainty room to settle.', prompt: 'What is known, and what is still a guess?' },
    { name: 'The Sun', numeral: 'XIX', art: 'sun', color: '#e5bc73', theme: 'Let warmth and honesty in.', message: 'A direct conversation or a simple pleasure may bring welcome clarity. Notice what feels open and life-giving.', prompt: 'What would you like to make more room for?' },
    { name: 'Judgement', numeral: 'XX', art: 'judgement', color: '#d29b78', theme: 'Answer a call to reconsider.', message: 'You can look back with compassion and choose what to do differently now. An old lesson can support a new decision.', prompt: 'What lesson are you ready to use in a new way?' },
    { name: 'The World', numeral: 'XXI', art: 'world', color: '#8cb9ae', theme: 'Recognize the ground you have covered.', message: 'A cycle may be reaching a meaningful pause. Take stock before turning toward the next thing.', prompt: 'What deserves to be acknowledged before you move on?' }
  ];

  const motifs = {
    fool: '<path d="M80 43v33m0 0 20 16-20 12-18-15m18-13 22-11m-32 52h28m-26 13 22 10m-32-72 12-12m39 14 11 7"/><circle cx="80" cy="31" r="9"/><path d="M45 154c18-18 52-18 70 0m-70 0c11 8 23 12 35 12s24-4 35-12"/>',
    magician: '<path d="M54 139h52l-5-43H59l-5 43Zm9-53h34M80 43v26m-6-19 6-10 6 10M43 145h74M58 112h44M64 126h32"/><circle cx="80" cy="77" r="7"/><path d="M50 66 43 56m74 10 7-10m-53 91-9 14m38-14 9 14"/>',
    priestess: '<path d="M53 144V66h14v78m26 0V66h14v78M60 58c0-11 9-20 20-20s20 9 20 20v8H60zM48 152h64M80 79v45m-13-27 13-13 13 13M62 127l18 10 18-10"/><path d="M83 46c9 5 13 17 9 27-4 8-13 12-22 10 11-1 18-12 15-23-1-6-4-10-7-14Z"/>',
    empress: '<path d="M80 53c-19 23-23 49 0 70 23-21 19-47 0-70Zm0 21v49m-1-30c-17-14-31-10-36 7 16 5 28 2 36-7Zm1 14c18-14 32-10 37 7-16 5-28 2-37-7Zm-28 37h56m-49-8c9 9 33 9 42 0"/><circle cx="80" cy="47" r="5"/>',
    emperor: '<path d="M48 145h64v-49l-14 10-18-27-18 27-14-10v49Zm8 0V112m16 33v-25m16 25v-25m16 25v-33M43 153h74M55 89l12-15 13 10 13-10 12 15"/><path d="M80 43v20m-12-9h24"/>',
    hierophant: '<path d="M49 147V82h62v65M43 147h74M57 82V65h46v17M66 147v-38h28v38M80 50v33m-12-17h24m-20 47h16"/><circle cx="80" cy="45" r="7"/><path d="m61 72 19-15 19 15"/>',
    lovers: '<circle cx="61" cy="99" r="21"/><circle cx="99" cy="99" r="21"/><path d="M80 72c-9-12-22-13-29-5m58 0c-7-8-20-7-29 5m-19 48c10 15 29 23 39 23m39-23c-10 15-29 23-39 23M80 72v71"/><path d="M80 38 84 48l10 4-10 4-4 10-4-10-10-4 10-4z"/>',
    chariot: '<path d="M49 135h62M56 132V87h48v45M67 87V68h26v19M60 101h40m-20-42v15m-7 54v-17h14v17M80 48l-7 9h14z"/><circle cx="62" cy="139" r="9"/><circle cx="98" cy="139" r="9"/><path d="M49 66c12-9 50-9 62 0M47 78h66"/>',
    strength: '<circle cx="80" cy="78" r="24"/><path d="M65 76c7-8 23-8 30 0M70 89c5 5 15 5 20 0m-24-18 6-9m26 9-6-9m-12 64c-25-9-39 2-43 21h86c-4-19-18-30-43-21Zm0-34v31m-8-15h16"/><path d="M80 38v-8m-29 19-6-6m64 6 6-6m-47-5-4-8m39 8 4-8"/>',
    hermit: '<path d="M80 60v78m-20 8h40M68 89l12-29 12 29M64 89h32M80 70c-10 0-15 8-15 17h30c0-9-5-17-15-17Z"/><path d="m80 73 7 10H73z"/><circle cx="80" cy="43" r="7"/><path d="M54 151c13-8 39-8 52 0"/>',
    wheel: '<circle cx="80" cy="99" r="39"/><circle cx="80" cy="99" r="13"/><path d="M80 60v26m0 26v26M41 99h26m26 0h26M52 71l19 19m18 18 19 19m0-56L89 90m-18 18-19 19M80 43v17m0 78v17m-54-56h15m78 0h15"/><path d="m74 99 6-10 6 10-6 10z"/>',
    justice: '<path d="M80 48v93m-26 10h52M55 70h50M80 58 55 70m25-12 25 12M55 70l-15 34m15-34 15 34m30-34-15 34m15-34 15 34"/><path d="M30 104c2 14 13 21 25 21s23-7 25-21H30Zm30 0c2 14 13 21 25 21s23-7 25-21H60Zm-5-34h50M74 49h12"/><circle cx="80" cy="39" r="5"/>',
    hanged: '<path d="M54 54h52v14H54zM80 68v22m0 0-19 18m19-18 20 10m-39 8 9 16m30-6-17 17m-2-37 8 18m-15 19h22"/><circle cx="80" cy="101" r="7"/><path d="M54 53v-9m52 9v-9M45 44h70"/>',
    death: '<path d="M80 51c-22 0-35 23-28 45 5 15 18 23 28 37 10-14 23-22 28-37 7-22-6-45-28-45Z"/><path d="M80 54v76m0-44L63 69m17 27 17-27M52 98l18-8m40 8-18-8M68 140l12 10 12-10M60 46l-7-10m47 10 7-10"/><circle cx="80" cy="74" r="5"/>',
    temperance: '<path d="M58 72h44l-6 22c-3 9-10 14-16 14s-13-5-16-14l-6-22Zm8 0c0-13 8-23 14-23s14 10 14 23m-42 69h40m-20-34v34m0-53v19m-23-11 12 7m34-7-12 7"/><path d="M80 42v7m-30 4 8 8m52-8-8 8"/>',
    devil: '<path d="M56 82c8-16 40-16 48 0v33c-7 15-15 23-24 23s-17-8-24-23V82Zm0 4L43 66l2 31m59-11 13-20-2 31M67 99h1m24 0h1m-18 18c4 4 8 4 12 0M80 138v12m-13 0h26"/><path d="m80 46 7 14 15 2-11 10 3 14-14-7-14 7 3-14-11-10 15-2z"/>',
    tower: '<path d="M56 145V78h48v67M50 145h60M62 91h11m14 0h11M62 108h11m14 0h11m-36 17h11m14 0h11M69 78V61h22v17M61 61l-7-9m51 9 7-9"/><path d="m82 35-9 17h10l-5 17 17-23H84l7-11"/>',
    star: '<path d="m80 45 8 27 27 8-27 8-8 27-8-27-27-8 27-8zM119 111l4 12 12 4-12 4-4 12-4-12-12-4 12-4zM49 47l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/><path d="M61 139c10-8 28-8 38 0M80 115v24"/>',
    moon: '<path d="M91 45c-25 8-35 37-22 58 11 18 34 24 51 11-8 28-39 40-63 25-23-15-27-47-8-67 11-12 27-17 42-14Z"/><circle cx="52" cy="65" r="2.5"/><circle cx="113" cy="67" r="2"/><circle cx="47" cy="125" r="2"/><path d="M53 147c18-9 36-9 54 0"/>',
    sun: '<circle cx="80" cy="91" r="28"/><circle cx="80" cy="91" r="18"/><path d="M80 45v-9m0 109v-9M34 91h-9m110 0h-9M47 58l-7-7m80 80-7-7m0-66 7-7m-80 80-7 7"/><path d="M74 88c3-4 9-4 12 0m-12 11c4 4 8 4 12 0m-28 30h44"/>',
    judgement: '<path d="M54 94h40l12 12-12 12H54zM49 94v24m50-12h20m-62 34h47m-24-22v22"/><path d="m74 56 6-17 6 17m16 7 15-9-4 17m-59-8-15-9 4 17"/><circle cx="80" cy="81" r="5"/>',
    world: '<ellipse cx="80" cy="99" rx="31" ry="45"/><path d="M80 55c-15 13-22 28-22 44s7 31 22 45m0-89c15 13 22 28 22 44s-7 31-22 45M53 82h54M49 99h62m-58 17h54"/><circle cx="80" cy="99" r="9"/><path d="M44 60 50 45l6 15-6 15zm66 0 6-15 6 15-6 15zM44 138l6 15 6-15-6-15zm66 0 6 15 6-15-6-15z"/>'
  };

  const positions = [
    { title: 'What shaped this moment', prompt: 'What can you understand differently now?' },
    { title: 'What asks your attention', prompt: 'What needs your attention before anything else?' },
    { title: 'A direction to consider', prompt: 'What small step feels true to you?' }
  ];

  const deckNode = document.getElementById('arcana-deck');
  const countNode = document.getElementById('arcana-count');
  const statusNode = document.getElementById('arcana-status');
  const revealButton = document.getElementById('arcana-reveal');
  const resultNode = document.getElementById('arcana-result');
  if (!deckNode || !countNode || !statusNode || !revealButton || !resultNode) return;

  let shuffled = [];
  let selected = [];
  let svgSequence = 0;

  function shuffle(items) {
    const next = items.slice();
    for (let i = next.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    return next;
  }

  function svgArt(card, back) {
    const gradientId = 'arcana-gradient-' + (++svgSequence);
    const accent = back ? '#e9bb79' : card.color;
    const numeral = back ? '✧' : card.numeral;
    const drawing = back
      ? '<path d="M80 65c-19 20-19 49 0 69 19-20 19-49 0-69Zm0 16v37m-18-19h36m-31-13 26 26m0-26-26 26"/><circle cx="80" cy="99" r="47"/><circle cx="80" cy="99" r="36"/><path d="m80 44 3 8 8 3-8 3-3 8-3-8-8-3 8-3zM80 135l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/>'
      : (motifs[card.art] || motifs.star);

    return '<svg viewBox="0 0 160 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
      '<defs><linearGradient id="' + gradientId + '" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#25243a"/><stop offset="1" stop-color="#171e2b"/></linearGradient></defs>' +
      '<rect x="1" y="1" width="158" height="238" rx="3" fill="url(#' + gradientId + ')"/>' +
      '<rect x="7" y="7" width="146" height="226" rx="2" fill="none" stroke="' + accent + '" stroke-opacity=".74" stroke-width=".8"/>' +
      '<rect x="12" y="12" width="136" height="216" rx="1" fill="none" stroke="' + accent + '" stroke-opacity=".24" stroke-width=".6"/>' +
      '<path d="M15 41h130M15 199h130" stroke="' + accent + '" stroke-opacity=".27" stroke-width=".6"/>' +
      '<text x="80" y="31" fill="' + accent + '" font-family="Georgia,serif" font-size="9" text-anchor="middle" letter-spacing="1.6">' + numeral + '</text>' +
      '<g fill="none" stroke="' + accent + '" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity=".95">' + drawing + '</g>' +
      (back ? '<path d="M18 18 25 25m117-7-7 7M18 222l7-7m117 7-7-7" stroke="' + accent + '" stroke-width="1"/>' :
        '<text x="80" y="216" fill="' + accent + '" font-family="Georgia,serif" font-size="7" text-anchor="middle" letter-spacing="1.1">' + card.name.toUpperCase() + '</text>') +
      '</svg>';
  }

  function renderDeck() {
    deckNode.replaceChildren();
    shuffled.forEach(function (card, index) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'arcana-card';
      button.dataset.cardIndex = String(index);
      button.setAttribute('aria-pressed', selected.indexOf(index) !== -1 ? 'true' : 'false');
      button.setAttribute('aria-label', selected.indexOf(index) !== -1 ? 'Chosen card ' + (selected.indexOf(index) + 1) + ': ' + card.name : 'Choose card ' + (index + 1));
      const surface = document.createElement('span');
      surface.className = 'arcana-card__surface';
      surface.innerHTML = svgArt(card, selected.indexOf(index) === -1);
      button.appendChild(surface);
      if (selected.length >= 3 && selected.indexOf(index) === -1) {
        button.disabled = true;
        button.classList.add('is-unavailable');
      }
      if (selected.indexOf(index) !== -1) button.classList.add('is-selected');
      button.addEventListener('click', function () {
        if (selected.length >= 3 || selected.indexOf(index) !== -1) return;
        selected.push(index);
        renderDeck();
        countNode.textContent = selected.length + ' of 3 chosen';
        revealButton.disabled = selected.length !== 3;
        statusNode.textContent = selected.length === 3 ? 'Your spread is ready when you are.' : 'Choose ' + (3 - selected.length) + ' more card' + (selected.length === 2 ? '' : 's') + '.';
      });
      deckNode.appendChild(button);
    });
  }

  function renderReadingCard(card, position, index) {
    const article = document.createElement('article');
    article.className = 'arcana-reading-card';
    const top = document.createElement('div');
    top.className = 'arcana-reading-card__top';
    const positionLabel = document.createElement('span');
    positionLabel.className = 'arcana-reading-card__position';
    positionLabel.textContent = position.title;
    const number = document.createElement('span');
    number.className = 'arcana-reading-card__number';
    number.textContent = 'CARD ' + String(index + 1).padStart(2, '0');
    top.append(positionLabel, number);
    const art = document.createElement('div');
    art.className = 'arcana-reading-card__art';
    art.innerHTML = svgArt(card, false);
    const title = document.createElement('h3');
    title.textContent = card.name;
    const themeLine = document.createElement('p');
    themeLine.className = 'arcana-reading-card__theme';
    themeLine.textContent = card.theme;
    const message = document.createElement('p');
    message.className = 'arcana-reading-card__message';
    message.textContent = card.message;
    const prompt = document.createElement('p');
    prompt.className = 'arcana-reading-card__prompt';
    const promptLabel = document.createElement('strong');
    promptLabel.textContent = 'A question to carry: ';
    prompt.append(promptLabel, document.createTextNode(position.prompt));
    article.append(top, art, title, themeLine, message, prompt);
    return article;
  }

  function revealReading() {
    if (selected.length !== 3) return;
    const spread = document.getElementById('arcana-spread');
    const questionOutput = document.getElementById('arcana-result-question');
    const question = document.getElementById('arcana-question').value.trim();
    spread.replaceChildren();
    selected.forEach(function (cardIndex, positionIndex) {
      const card = shuffled[cardIndex];
      spread.appendChild(renderReadingCard(card, positions[positionIndex], positionIndex));
    });
    questionOutput.textContent = question ? 'Your question: “' + question + '”' : 'A general reading for the moment you are in.';
    resultNode.hidden = false;
    resultNode.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    statusNode.textContent = 'Your three-card reading is ready.';
  }

  function startOver(announce) {
    selected = [];
    shuffled = shuffle(deck);
    resultNode.hidden = true;
    revealButton.disabled = true;
    countNode.textContent = '0 of 3 chosen';
    statusNode.textContent = announce || 'The deck has been shuffled. Choose three cards.';
    renderDeck();
  }

  document.getElementById('arcana-shuffle').addEventListener('click', function () {
    startOver('The deck has been shuffled. Choose three cards.');
  });
  revealButton.addEventListener('click', revealReading);
  document.getElementById('arcana-reset').addEventListener('click', function () {
    document.getElementById('arcana-question').value = '';
    startOver('A fresh reading is ready. Choose three cards.');
    document.getElementById('reading').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  startOver('Shuffle the deck or choose a card to begin.');
}());
