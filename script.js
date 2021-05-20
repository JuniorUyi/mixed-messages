const messages = [
    '\“Be yourself; everyone else is already taken.\”\n― Oscar Wilde ',
    '\“You\'ve gotta dance like there\'s nobody watching,\nLove like you\'ll never be hurt,\nSing like there\'s nobody listening,\nAnd live like it\'s heaven on earth.\”\n― William W. Purkey ',
    '\“Be the change that you wish to see in the world.\”\n― Mahatma Gandhi ',
    '\“Live as if you were to die tomorrow. Learn as if you were to live forever.\”\n― Mahatma Gandhi ',
    '\“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.\”\n― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches ',
    '\“Without music, life would be a mistake.\”\n― Friedrich Nietzsche, Twilight of the Idols ',
    '\“We accept the love we think we deserve.\”\n― Stephen Chbosky, The Perks of Being a Wallflower ',
    '\“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\”\n― Albert Einstein ',
    '\“We are all in the gutter, but some of us are looking at the stars.\”\n― Oscar Wilde, Lady Windermere\'s Fan ',
    '\“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\”\n― Bill Keane ',
    '“I have not failed. I\'ve just found 10,000 ways that won\'t work.\”\n― Thomas A. Edison ',
    '“It is never too late to be what you might have been.\”\n― George Eliot ',
    '\“There is no greater agony than bearing an untold story inside you.\”\n― Maya Angelou, I Know Why the Caged Bird Sings ',
    '\“Everything you can imagine is real.\”\n― Pablo Picasso ',
    '\“You can never get a cup of tea large enough or a book long enough to suit me.\”\n― C.S. Lewis ',
    '\“Life isn\'t about finding yourself. Life is about creating yourself.\”\n― George Bernard Shaw ',
    '\“To the well-organized mind, death is but the next great adventure.\”\n― J.K. Rowling, Harry Potter and the Sorcerer\'s Stone ',
    '“Do what you can, with what you have, where you are.\”\n― Theodore Roosevelt ',
    '“Success is not final, failure is not fatal: it is the courage to continue that counts.\”\n― Winston S. Churchill ',
    '\“And, when you want something, all the universe conspires in helping you to achieve it.\”\n― Paulo Coelho, The Alchemist ',
    '\“So, this is my life. And I want you to know that I am both happy and sad and I\'m still trying to figure out how that could be.\”\n― Stephen Chbosky, The Perks of Being a Wallflower '
]
// console.log(messages[messages.length-1]);

const randomizedMessage = (array) => {
    const randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}

console.log(randomizedMessage(messages));