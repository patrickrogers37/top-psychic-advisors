(function () {
  'use strict';

  const deck = [
    ['The Fool', 'a fresh perspective', 'try one small experiment before committing'],
    ['The Magician', 'skills already within reach', 'choose one tool you already know and put it to work'],
    ['The High Priestess', 'quiet observation', 'write down what you notice before deciding what it means'],
    ['The Empress', 'care and steady growth', 'give time or attention to something you want to nurture'],
    ['The Emperor', 'structure and boundaries', 'set one clear limit that protects your time'],
    ['The Hierophant', 'shared knowledge', 'compare familiar advice with your own experience'],
    ['The Lovers', 'values and choices', 'name the value you want your next choice to reflect'],
    ['The Chariot', 'deliberate direction', 'choose one realistic next step and a time to revisit it'],
    ['Strength', 'patient courage', 'approach a difficult conversation with a calm, specific request'],
    ['The Hermit', 'space to reflect', 'take a short pause away from other people’s opinions'],
    ['Wheel of Fortune', 'changing circumstances', 'separate what you can influence from what you cannot'],
    ['Justice', 'fairness and evidence', 'check the facts and consider whose perspective is missing'],
    ['The Hanged Man', 'another point of view', 'describe the situation as a trusted friend might see it'],
    ['Death', 'an ending or transition', 'identify one habit you are ready to leave behind'],
    ['Temperance', 'balance and adjustment', 'make one modest change instead of changing everything'],
    ['The Devil', 'restrictive patterns', 'notice a recurring pressure and consider one boundary'],
    ['The Tower', 'assumptions worth questioning', 'check whether an old plan still fits your circumstances'],
    ['The Star', 'hope grounded in care', 'choose a small action that makes tomorrow more manageable'],
    ['The Moon', 'uncertainty and impressions', 'ask what you know, what you assume, and what needs checking'],
    ['The Sun', 'clarity and appreciation', 'name something that is working and how to support it'],
    ['Judgement', 'review and renewal', 'look back without blame and choose what you want to do differently'],
    ['The World', 'completion and integration', 'recognize a finished step before setting your next goal']
  ];
  const focuses = {
    general: 'your current situation',
    relationships: 'communication, boundaries, and connection',
    work: 'your work, priorities, and available resources',
    growth: 'your habits, values, and personal growth'
  };
  const positions = ['What to notice', 'What to reconsider', 'A possible next step'];
  let instanceCount = 0;

  function initialize(root) {
    if (root.dataset.tarotReady) return;
    root.dataset.tarotReady = 'true';
    const prefix = 'tarot-' + (++instanceCount);
    root.classList.add('tarot-reading');
    root.innerHTML = `
      <div class="tarot-reading__intro"><p class="tarot-reading__eyebrow">A moment for reflection</p>
      <h2>Explore a three-card tarot reading</h2>
      <p>Choose a focus, hold a question in mind, and explore three symbolic prompts.</p></div>
      <p class="tarot-reading__disclosure"><strong>How this works:</strong> this tool randomly selects cards and combines predefined meanings on your device. It does not use an AI language model, predict events, or know your circumstances. Use it for reflection and entertainment.</p>
      <form class="tarot-reading__form">
        <label for="${prefix}-focus">Your focus</label>
        <select id="${prefix}-focus" name="focus"><option value="general">General reflection</option><option value="relationships">Relationships</option><option value="work">Work and direction</option><option value="growth">Personal growth</option></select>
        <label for="${prefix}-question">Your question <span>(optional, stays on this page)</span></label>
        <textarea id="${prefix}-question" name="question" rows="3" maxlength="500" placeholder="What would I like to understand more clearly?" aria-describedby="${prefix}-privacy"></textarea>
        <p id="${prefix}-privacy" class="tarot-reading__hint">Nothing you type is sent or saved by this tool. You can leave this blank.</p>
        <button type="submit">Reveal my three cards</button>
      </form>
      <section class="tarot-reading__results" hidden aria-labelledby="${prefix}-result-title">
        <h3 id="${prefix}-result-title" tabindex="-1">Your reflection</h3>
        <p class="tarot-reading__context"></p><div class="tarot-reading__cards"></div>
        <p class="tarot-reading__closing">These symbols offer prompts, not instructions. Consider what fits your experience and leave the rest.</p>
        <div class="tarot-reading__actions"><button type="button" data-copy>Copy reading</button><button type="button" data-reset>Start again</button></div>
        <label class="tarot-reading__fallback" hidden>Copy your reading manually<textarea readonly rows="12"></textarea></label>
      </section><p class="tarot-reading__status" role="status" aria-live="polite"></p>`;
    const form = root.querySelector('form');
    const results = root.querySelector('.tarot-reading__results');
    const status = root.querySelector('[role="status"]');
    const fallback = root.querySelector('.tarot-reading__fallback');
    let readingText = '';
    let previousSelection = '';

    function randomIndex(maximum) {
      if (window.crypto && window.crypto.getRandomValues) {
        const values = new Uint32Array(1);
        const limit = Math.floor(4294967296 / maximum) * maximum;
        do { window.crypto.getRandomValues(values); } while (values[0] >= limit);
        return values[0] % maximum;
      }
      return Math.floor(Math.random() * maximum);
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const available = deck.slice();
      const selected = [];
      for (let index = 0; index < 3; index++) selected.push(available.splice(randomIndex(available.length), 1)[0]);
      if (selected.map(card => card[0]).join('|') === previousSelection) {
        selected[2] = available[randomIndex(available.length)];
      }
      previousSelection = selected.map(card => card[0]).join('|');
      const focus = focuses[form.elements.focus.value] || focuses.general;
      const question = form.elements.question.value.trim();
      const context = 'Focus: ' + focus + (question ? '. Your question: ' + question : '.');
      root.querySelector('.tarot-reading__context').textContent = context;
      const cards = root.querySelector('.tarot-reading__cards');
      cards.replaceChildren();
      const paragraphs = selected.map(function (card, index) {
        const article = document.createElement('article');
        article.className = 'tarot-reading__card';
        const symbol = document.createElement('span');
        symbol.className = 'tarot-reading__symbol';
        symbol.setAttribute('aria-hidden', 'true');
        symbol.textContent = ['✦', '☾', '☼'][index];
        const position = document.createElement('p');
        position.className = 'tarot-reading__position';
        position.textContent = positions[index];
        const title = document.createElement('h4');
        title.textContent = card[0];
        const meaning = document.createElement('p');
        meaning.textContent = 'This card symbolizes ' + card[1] + '. In relation to ' + focus + ', ' + card[2] + '.';
        article.append(symbol, position, title, meaning);
        cards.append(article);
        return positions[index] + ': ' + card[0] + '\n' + meaning.textContent;
      });
      readingText = 'Three-card tarot reflection\n' + context + '\n\n' + paragraphs.join('\n\n') + '\n\nGenerated locally from predefined meanings; no AI language model or predictions.';
      fallback.hidden = true;
      results.hidden = false;
      status.textContent = 'Three cards revealed. Your reflection is ready.';
      root.querySelector('h3').focus();
    });
    root.querySelector('[data-reset]').addEventListener('click', function () {
      form.reset();
      results.hidden = true;
      fallback.hidden = true;
      fallback.querySelector('textarea').value = '';
      root.querySelector('.tarot-reading__context').textContent = '';
      root.querySelector('.tarot-reading__cards').replaceChildren();
      readingText = '';
      status.textContent = 'Reading cleared. Choose a focus to begin again.';
      form.elements.focus.focus();
    });
    root.querySelector('[data-copy]').addEventListener('click', async function () {
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(readingText);
        status.textContent = 'Reading copied.';
      } catch (error) {
        fallback.hidden = false;
        const field = fallback.querySelector('textarea');
        field.value = readingText;
        field.focus();
        field.select();
        status.textContent = 'Automatic copying is unavailable. Select and copy the reading below.';
      }
    });
  }
  function start() { document.querySelectorAll('.ai-tarot-reading, [data-tarot-reading]').forEach(initialize); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

