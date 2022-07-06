var quoteArray = [

    /*FOUNDATIONS*/
    {
        content: "Treat your attention like a gift and share it. Set a clear intention to be fully present with the connections you make over the next few days. Whether you're having a conversation or sending a quick message, give your full attention to who you're with and what you're doing.",
        title: "The Gift of Attention"
    },
    {
        content: "We all have strong emotions sometimes. Over the next 24 hours, notice when your thoughts and feeling get triggered. When they do, take a few slow, calming breaths, drop the judgment, and practice observing your inner experiences with warmth and curiosity.",
        title: "Self-Awareness in Daily Life"
    },
    {
        content: "Over the next day or two, do your best to notice one good thing in every situation. Bring moments of appreciation into your day by paying attention to be the positive qualities of the people you interact with, the world around you, and your own strengths. The more you practice, the easier it gets.",
        title: "One Good Thing"
    },
    {
        content: "Who will you see or interact with over the next day or two? Treat these interactions as opportunities to practice kindness. With a clear intention, a simple text or a kind word can bring a lot of happiness into the world.",
        title: "Small Acts of Kindness"
    },
    {
        content: "Set a clear intention to take time to care for yourself over the next day or two. Go for a relaxing walk. Take a moment to let go and relax. Meditate. Do whatever you find energizing and nourishing. Build this into your daily routine and let compassion grow from within.",
        title: "Start with Self-Compassion"
    },
    {
        content: "Over the next day or two, pick a specific situation that might be stressful or challenging. Examine you assumption and expectations with curiosity and openness. Ask yourself, 'What do I believe here?' Then ask yourself, 'Is this really true?' See if you can open your mind to new possibilities",
        title: "Is It True"
    },
    {
        content: "Although we might feel stuck, every moment holds the possibility of transformation. Over the next day, notice how your thoughts, feelings, and perceptions are constantly changing. Let the experience of change loosen your old beliefs and open you to new possibilities.",
        title: "New Possibilities"
    },
    {
        content: "Over the next 24 hours, pick one daily activity and reflect on all the countless people that help make the activity possible - from the people who make your clothes and produce your food, to the people who have taught and cared for you over the course of your life.",
        title: "The Web of Life"
    },
    {
        content: "We all have deeper motivations for the things we do. To skill is learning to see them clearly. Pick a specific daily activity and ask yourself, 'Why do I take the time to do this? What's my deeper motivation?' Keep looking until you find a purpose that feels nourishing and uplifting.",
        title: "A Deeper Motivation"
    },
    {
        content: "Make the next 24 hours all about core values that really inspires and motivates you. Before you move on with your day, take a moment to pick one of your core values and set a clear intention to stay connected to this value throughout your day.",
        title: "Value of the day"
    },
    {
        content: "What would it be like to do the dishes as an act of generosity? Or exercise as a profound act of self-care? Shift your perspective on one specific activity over the next day or so. See if you can tie the activity to an important personal value.",
        title: "Write the Next Chapter"
    },

    /*AWARENESS*/
    {
        content: "Time is never wasted if you're paying attention on purpose. Next time you're waiting in line-whether it's in a traffic jam, the grocery store, or somewhere else-use the moment to count your breath. A few intentional breaths can transform your experience.",
        title: "Practice Waiting"
    },
    {
        content: "What does it feel like to notice your experience, without trying to control it? Open awareness is about 'being' rather than 'doing'. Next time you feel tense, see if you can step back and include those sensations in awareness. No need to control or fix, simply observe what's happening.",
        title: "Include It All"
    },
    {
        content: "When you set an intention, focus on the step you're going to take, not the result. Rome wasn't built in a day, and they definitely had their setbacks along the way. The key is to be realistic and flexible.",
        title: "One Step at a Time"
    },
    {
        content: "The key to focus is not forcing your mind to be calm. It's the gentle practice of allowing your mind to settle on its own. When you let distraction come and go on their own, you give your mind space to settle down. Stay patient and try to enjoy the process.",
        title: "Ease Into Focus"
    },

    /*CONNECTION*/

    {
        content: "What's the tone of your self-talk today? Set the intention to treat yourself with a little extra kindness, especially if things aren't going exactly how you wanted the to go.",
        title: "Be kind, Especially to Yourself"
    },
    {
        content: "If you asked your best friend, 'what is my greatest quality?' what would they say? As you go about your day, notice the time when you embody this quality, and give yourself a little internal high-five.",
        title: "What Do You Love About You?"
    },
    {
        content: "Over the next day or two, treat yourself to a little appreciation. Pick a body part, and show it some love. 'Heart, thanks for keeping the beat'. 'Lungs, way to fill up and let go'. 'Bellybutton, you're so weird. Thank you'. Have some fun with it.",
        title: "Treat Yourself"
    },
    {
        content: "Next time you find yourself annoyed with someone, use the phrase 'just like me...' to remind yourself of the qualities you share with that person. Just like you, they too want to be happy. Just like you, they sometimes fall short. Just like you, they're probably juggling a lot right now.",
        title: "Just Like Me"
    },
    {
        content: "Before you get out of bed, call to mind three good things you appreciate about your friends and loved ones. It could be something they did or a quality you admire. Extra credit: tell them about it.",
        title: "Start Your Day Off Right"
    },
    {
        content: "Who made you smile last week? Maybe a kind message from a friend or a funny colleague. Take a moment to reach out to them and show them some gratitude today.",
        title: "A Few Kind Words"
    },
    {
        content: "When you sit down to your next meal, think about the countless individuals who made it possible. From the people who planted and picked the food to the many others who helped get it to your table. Feel some appreciation before you take your first bite.",
        title: "Who Made This Bite Possible?"
    },
    {
        content: "Pick a positive quality, like generosity, courage or joy. As you go about you day-notice how many times you see it in the actions of the people around you?",
        title: "See it Once, See it Everywhere"
    },
    {
        content: "Next time you find yourself doing something super mundane and boring, ask yourself, 'who is this helping' See if that brings some new energy to the task at hand.",
        title: "Who is this helping"
    },
    {
        content: "For the next 10 seconds, take a stretch break. Let your body move however it wants to move. Give yourself permission to unwind, and release whatever tension you're holding.",
        title: "Stretch break"
    },
    {
        content: "When you remember throughout your day, notice all the little things your body is doing right. All those systems working together. Pretty incredible, if you think about it.",
        title: "Thanks body"
    }
];

var button = document.getElementById('quote-button'),
    quote = document.getElementById('quote'),
    title = document.getElementById('quote-title'),
    random;

button.addEventListener('click', randomQuote);

function randomQuote (){
    random = Math.floor(Math.random() * quoteArray.length);
    quote.innerHTML = quoteArray[random].content;
    title.innerHTML =  quoteArray[random].title;
}

