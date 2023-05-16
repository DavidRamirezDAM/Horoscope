var express = require('express');
var router = express.Router();

router.get('/:signo', function(req, res, next) {
    var signo = req.params.signo;

    // Define your horoscope generation logic here
    var horoscopeText = generarHoroscope(signo);

    res.render('horoscope', { horoscopeText: horoscopeText });
});

function generarHoroscope(signo) {
    // Add your logic to generate the horoscope text based on the sign
    // For simplicity, let's return a static text for each sign
    switch (signo.toLowerCase()) {
        case 'aries':
            return '- A number of loving communications may come your way from people who live in distant states or exotic lands. You\'re feeling especially affectionate now, Aries, particularly regarding those closest to you. It might not be a bad idea to get on the phone and talk to people you may not have seen in a long time. They will be glad to hear from you!';
        case 'taurus':
            return '- A small amount of money might come your way today, Taurus. It could be a gift, dividend, or bonus. You may want to squander it on gifts for yourself and others rather than put it to more practical use, which is perfectly fine! Books may be especially appealing, particularly those on new spiritual or metaphysical ideas. Set some time aside for a little reading.';
        case 'gemini':
            return 'You should feel and look great today, Gemini. Your charm and social skills are at a high level, and your joviality and gift for conversation should make you a welcome guest at any social event. And you should be invited to a lot of them - perhaps too many! Enjoy this special time of sociability and friendship.';
        case 'cancer':
            return 'Your psychic abilities and imagination are operating at a very high level, Cancer. You face other people with a profound, spiritual love. They will return it! You might want to write down your thoughts or draw pictures of whatever pops into your mind, even if you don\'t feel you have talent. It\'s more important to keep a record for you than set things down for posterity.';
        case 'leo':
            return '- Some friends associated with a group you admire might take you to some kind of rally, Leo. This could be a lot of fun for you. You could make some new friends. You\'re naturally inclined toward humanitarian concerns, and these might be the focus of some animated discussions today. Take in all the information and consider it later. Right now your mind is overwhelmed!';
        case 'virgo':
            return '- You\'re naturally a kind, compassionate person, Virgo. Today your feelings are likely to be focused not only on those close to you but also on all the world\'s population. A feeling of unity with the billions you\'ve never met could overwhelm you now. You might want to write down your impressions so you can refer to them later. You might otherwise forget it all.';
        case 'libra':
            return '- With today\'s planetary aspects, Libra, you\'re likely to feel a rush of love. This includes love for family, friends, partner, and all life forms. The reality of spiritual advancement through love is all around you. Your artistic sensibilities are very high, so you might want to write, draw, or paint something that captures your thoughts and feelings.';
        case 'scorpio':
            return ' You\'re feeling especially loving and passionate, Scorpio, and likely to want to pursue a romantic encounter with the special person in your life. Money matters look positive, as your intuition regarding money management has been working well and is likely to continue. Your psychic and intuitive faculties are wide open and receptive. Don\'t be surprised by what you pick up today, even from strangers.';
        case 'sagittarius':
            return 'Today is a great time to form or strengthen romantic relationships, Sagittarius. If you aren\'t involved, chances are you will meet someone. If you are, expect your relationship to develop a new spiritual bond. New friendships, particularly with people who share your interests, are on the horizon. The coming years will be a time when everyone will have to pull together. Today you get a head start.\n';
        case 'capricorn':
            return '- This is an ideal day to begin a creative venture, Capricorn. You\'ve had many ideas and creative urges. Today it\'s time to choose one and take the first step to making your vision a reality. You will find that the form will change. This is no reason to be discouraged. It\'s part of the normal evolution of any work of art. The key here is to begin.'
        case 'aquarius':
            return ' - Your naturally loving nature gets a boost today, Aquarius. You could look especially attractive, so don\'t be surprised if you draw admiring looks from strangers. Romantic novels and movies could seem appealing now, but you\'re more interested in the real thing. If you can, try to schedule alone time with the special person in your life. You won\'t regret it!'
        case 'piscis':
            return '- Your energy might turn toward beautifying your home, Pisces. Perhaps you\'ve decided to repaint or go in a completely new direction in your decorating taste. Posters or other souvenirs of foreign lands might also be especially appealing now. Expect someone to drop by and bring some interesting news that might get your mind going a thousand miles an hour.'
        default:
            return 'Invalid sign. Please enter a valid horoscope sign.';
    }
}

module.exports = router;

