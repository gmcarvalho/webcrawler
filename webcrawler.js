//Carregando os módulos
var request = require('request')
var cheerio = require('cheerio')

request('https://www.decolar.com/passagens-aereas-baratas/?adjust_adgroup=21058474714&adjust_campaign=333698074&adjust_t=esobv7_ffxd4s_3fh53i&adjust_creative=366536070465&key=UT81AK9JAFEGJ4D69OVO6J673E&adjust_tracker_limit=1000000000&gclid=EAIaIQobChMIs6y4nPyy5AIVQgWRCh1UKgjvEAAYASABEgK09vD_BwE&mktdata=kw%3Ddecolar%2520promo%25C3%25A7%25C3%25B5es%26c%3D366536070465%26mt%3De%26n%3Dg%26p%3D%26ap%3D1t1%26d%3Dc%26dm%3D%26targetid%3Dkwd-11783769647%26campaignid%3D333698074%26adgroupid%3D21058474714%26ExperimentId%3D%26locationid%3D1001566%26accountid%3D8498672718%26pr%3DG%26adjust_adgroup%3D21058474714%26adjust_campaign%3D333698074%26adjust_t%3Desobv7_ffxd4s_3fh53i%26adjust_creative%3D366536070465%26key%3DUT81AK9JAFEGJ4D69OVO6J673E%26adjust_tracker_limit%3D1000000000%26gclid%3DEAIaIQobChMIs6y4nPyy5AIVQgWRCh1UKgjvEAAYASABEgK09vD_BwE%26id%3D2019090220245410090036072569830%26trackeame_user_id%3D122D8C1C802A15673585994085999c9ce-caa9-4e10-98c8-8139a555b1691628272', function(err, res, body){
    if(err) console.log("Error: " + err);

    var $ = cheerio.load(body);

    $('.container-offers')

    $('.slider__list li').each(function(){
        var voo = $(this).find('.slider__item a .offer__container .offer__body .header .header__title').text().trim();
        var partida = $(this).find('.slider__item a .offer__container .offer__body .offer__detail .generic-detail__description').text().trim();
        var preco = $(this).find('.slider__item a .offer__container .offer__price .price .price__description .price__amount-now').text().trim();

        console.log("-------------------------------");
        console.log("Voo: " + voo + "\n");
        console.log("Partida: " + partida + "\n");
        console.log("Preço: " + preco + "\n");
        console.log("-------------------------------");
    })
});