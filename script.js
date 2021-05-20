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

const dailyBattleMessages = {
    _powerful: [
        'Fate conspires for us, surprisingly!',
        'Stir! Rise and stir your resolve!',
        'I have sighted their weaknesses!',
        'MMMRRRRAAAAAAA!',
        'GLORY AND HONOR! Ever thus to the brave, my friends!',
        'You\'ve seen how I do it, now you try!',
        'KREEEE-YAAAAAA!',
        'The shadows grow too long for fooling around.',
        'Her ears perk up - strike hard and without mercy',
        'Ha haaa! Ha haa haaaaa! HAA HAAAAAAA!',
        'Power is the gift of fearlessness. It is always so.',
        'Let us press together!',
        'I will show you how we can finish this!',
        'Physique, soul, and intellect, in perfect harmony.',
        'Such power... It has infected us all.',
        'Power is not about strength, but about timing.',
        'This is a holy boon. Use it wisely.'
    ],
    _vigorous: [
        'This is beyond my knowledge, but I do feel strengthened!',
        'Roll up your sleeves! Profit requires toil!',
        'I can see for miles!',
        'Nothing will stop me.',
        'My every step sanctifies this unholy earth!',
        'A little bravery beats laudanum any day, apparently.',
        'I hear the song of the wild... The spirits watch me.',
        'Hmmm... I am feeling almost confident today.',
        'Our ideals bring us strength!',
        'Do I feel better, or is that just the pipe-weed?',
        'I suppose I must be grateful, to go on surviving.',
        'Ah! My heart roars to serve alongside such stalwarts!',
        'I am like a wolf, following tirelessly, waiting for weakness!',
        'SARTHOR\'GOR AN PHIROAH. MARASTH LIKA\'LAH BOH\'NROTH.',
        'Even steel cannot pierce a healthy immune system!',
        'My heart pounds to forgotten rhythms!',
        'As mother said... my suffering has prepared me well.'
    ],
    _focused: [
        'Strike the nerve I showed you, the art is ancient but lethal.',
        'Be calm, still your minds.',
        'Breathe like this and feel the calm grow.',
        'I live for this.',
        'Go forth, friend. TO VICTORY!',
        'Seems you\'ve caught the gist of it. Fancy that!',
        'Nothing escapes the eyes of the warhawk.',
        'Look at you, all ready to knock some skulls!',
        'Follow your instincts! They lead true!',
        'Never been much of a leader, but I\'ll try... TALLY HO!',
        'You have the killing eye. Turn it towards our victory.',
        'Yes! Our victory is assured through these tactics!',
        'Watch your target grow larger and larger, in your mind\'s eye!',
        'Ah... the serenity of total mental concentration.',
        'Ill fortune will not deter me from my goal!',
        'Discipline and focus — these are the tools of a master!',
        'The sacred fire whispers your name. You are most blessed.'
    ],
    _stalwart: [
        'This struggle may never end but I will not give in now!',
        'There is no profit without struggle!',
        'These are small bumps on life\'s long road.',
        'I come prepared. Always.',
        'I have been judged worthy!',
        'Well now... I feel positively radiant!',
        'Hear me, elder spirits! I have passed the test!',
        'Bah. Who needs brandy when you\'ve got false courage.',
        'Bah. Who needs brandy when you\ve got false courage.',
        'Blast. Seems I\'ll see tomorrow after all.',
        'The sun is brightest after darkest night.',
        'Our cause unites us!',
        'Victory is near! My soul burns!',
        'Fell energy courses through me...',
        'Even the will benefits from the immune response!',
        'To be hopeless is to be fooled by one\'s self!',
        'I cannot be extinguished when fire burns within.'
    ],
    _courageous: [
        'As long as we are one, we can prevail!',
        'He serves me now, and I have his power!',
        'We can beat them all!',
        'Keep yourselves together. T\'aint so bad.',
        'OOONWAAARD!',
        'Just stay focused on the prize. Stay focused...',
        'Look at me... You are going to make it -- ALL OF YOU!',
        'Drink this. Inebriation is your best ally, I always say.',
        'Be inspired by the purity of the hunt!',
        'Be calmed. We shall live to suffer another day.',
        'We have become as steel.',
        'Lean on me, you need not ask.',
        'We have their scent, they will fall!',
        'We have survived thus far! We can survive so much more!',
        'You see? No physic alive can match my arts!',
        'Tomorrow is for healing! Today, for glory!',
        'Do not despair. As the black deepens, my power grows...'
    ],
}

const randomizedMessage = (array) => {
    const randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}

// console.log(randomizedMessage(messages));

const dailyMessage = (object) => {
    const keys = Object.keys(object);
 
    switch(randomizedMessage(keys)) {
        case "_powerful": {
            return `Are you feeling powerful today: \n => ${randomizedMessage(object._powerful)}`;
        }
        case "_vigorous": {
            return `Does being vigorous makes you strong today: \n => ${randomizedMessage(object._vigorous)}`;
        }
        case "_focused": {
            return `Is being focused your goal today: \n => ${randomizedMessage(object._focused)}`;
        }
        case "_stalwart": {
            return `Feel sturdy stalwart today: \n => ${randomizedMessage(object._stalwart)}`;
        }
        case "_courageous": {
            return `Fearless mind today: \n => ${randomizedMessage(object._courageous)}`;
        }
        default: {
            return `Nothing for today`;
        }
    }
}

console.log(dailyMessage(dailyBattleMessages));