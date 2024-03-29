const products = [
    {
        id: 0,
        name: "Jabłko",
        description: `Nasze chrupiące jabłka to nie tylko symbol świeżości, ale także bogactwo smaku, które docenią nawet najbardziej wymagający smakosz. Ich soczyste wnętrze pełne jest witamin i minerałów, które wspierają zdrowie i dobre samopoczucie. Dodatkowo, jabłka są doskonałym źródłem błonnika, który pomaga w utrzymaniu zdrowej przewagi pokarmowej i reguluje poziom cholesterolu. Niezależnie od tego, czy wybierzesz je na przekąskę, czy też jako składnik deseru, nasze jabłka zawsze dostarczą Ci najwyższej jakości smaku i zdrowotnych korzyści.`,
        category: "ziarnkowe",
        price: 2.00,
        image: "./fruits-img/apples-640.jpg",
        bestseller: true
        // saleAmount: 200,
    },
    {
        id: 1,
        name: "Gruszka",
        description: `Delikatne i soczyste gruszki, które oferujemy, to prawdziwa poezja smaku i zdrowia. Ich miękka pulpa jest niezwykle aromatyczna i słodka, co sprawia, że każdy kęs jest prawdziwą rozkoszą dla podniebienia. Warto również podkreślić, że gruszki są bogate w błonnik, co wspomaga trawienie i reguluje poziom cukru we krwi. Dodatkowo, są one źródłem witamin z grupy B, które są niezbędne dla prawidłowego funkcjonowania układu nerwowego. Dzięki naszym gruszkom możesz cieszyć się nie tylko smakiem, ale także korzyściami zdrowotnymi, dodając koloru i zdrowia do swojej codziennej diety.`,
        category: "ziarnkowe",
        price: 4.00,
        image: "./fruits-img/pear-1280.jpg",
        smallImage: "./fruits-img/pear-640.jpg",
        // sale: true,
        // saleAmount: 200,
    },
    {
        id: 2,
        name: "Truskawka",
        description: `Nasze soczyste truskawki to prawdziwa uczta dla podniebienia, a jednocześnie skarbnica zdrowia i witamin. Ich intensywny smak i aromat są nie do pobicia, a zawartość witaminy C sprawia, że stanowią idealne wsparcie dla Twojego układu odpornościowego. Dodatkowo, truskawki są bogate w antyoksydanty, które pomagają zwalczać wolne rodniki i chronią przed szkodliwym działaniem środowiska. Zdrowe i smaczne, nasze truskawki to doskonały wybór na każdą okazję, dodając koloru i świeżości Twojemu życiu.`,
        category: "jagodowe",
        price: 10.00,
        image: "./fruits-img/strawberry-1280.jpg",
        smallImage: "./fruits-img/strawberry-640.jpg",
        bestseller: true,
        recommend: true
        // saleAmount: 200,
    },
    {
        id: 3,
        name: "Mandarynka",
        description: `Słodkie i soczyste mandarynki, które oferujemy, to nie tylko pyszna przekąska, ale także skarbnica witamin i minerałów. Ich delikatna skórka ukrywa soczystą, słodką pulpę, która doskonale orzeźwia i dodaje energii. Warto podkreślić, że mandarynki są bogate w witaminę A, która wspomaga zdrowie oczu i skóry, oraz witaminę C, która wzmacnia odporność i zapewnia ochronę przed infekcjami. Dodatkowo, są one niskokaloryczne i idealne na lekką przekąskę lub dodatek do sałatek. Dzięki naszym mandarynkom możesz cieszyć się nie tylko pysznym smakiem, ale także korzyściami zdrowotnymi, dodając świeżości i koloru do swojej codziennej diety.`,
        category: "cytrusy",
        price: 4.58,
        image: "./fruits-img/mandarins-1280.jpg",
        imageSmall: "./fruits-img/mandarins-640.jpg",
        bestseller: true,
        recommend: true
        // saleAmount: 200,
    },
    {
        id: 4,
        name: "Banan",
        description: `Nasze dojrzałe banany to nie tylko pyszna przekąska, ale także doskonałe źródło energii i składników odżywczych. Ich kremowa konsystencja i słodki smak są niezrównane, a jednocześnie zawierają one dużo potasu, który wspomaga prawidłowe funkcjonowanie mięśni i układu nerwowego. Warto również podkreślić, że banany są bogate w witaminy z grupy B, które są niezbędne dla metabolizmu energetycznego. Dodatkowo, są one łatwo przyswajalne i idealne na szybką przekąskę lub dodatek do smoothie. Dzięki naszym bananom możesz cieszyć się nie tylko pysznym smakiem, ale także korzyściami zdrowotnymi każdego dnia.`,
        category: "egzotyczne",
        price: 6.99,
        image: "./fruits-img/banana-1280.jpg",
        smallImageimage: "./fruits-img/banana-640.jpg",
        bestseller: true,
        recommend: true
        // saleAmount: 200,
    },
    {
        id: 5,
        name: "Śliwka",
        description: `Soczyste i słodkie śliwki, które oferujemy, to prawdziwy rarytas dla podniebienia, a jednocześnie skarbnica zdrowia i dobroci. Ich delikatna skórka ukrywa soczystą, słodką pulpę, która rozpływa się w ustach, dostarczając prawdziwej rozkoszy smakowej. Warto podkreślić, że śliwki są bogate w błonnik, który wspomaga trawienie i utrzymanie zdrowej przewagi pokarmowej. Dodatkowo, zawierają one antyoksydanty, które chronią komórki przed uszkodzeniami i zapewniają ochronę przed chorobami serca i nowotworami. Zdrowe i pyszne, nasze śliwki to doskonały wybór na przekąskę lub dodatek do dań, dodając zdrowia i smaku Twojemu życiu.`,
        category: "pestkowe",
        price: 10.00,
        image: "./fruits-img/plum-1280.jpg",
        smallImageimage: "./fruits-img/plum-640.jpg",
        recommend: true
        // saleAmount: 200,
    },
    {
        id: 6,
        name: "Cytryna",
        description: `Aromatyczne cytryny oferowane w naszym sklepie to nie tylko źródło orzeźwienia, ale także pełne zdrowotnych korzyści. Ich soczysta pulpa jest bogata w witaminę C, która wzmacnia układ odpornościowy i wspomaga walkę z infekcjami. Dodatkowo, cytryny zawierają przeciwutleniacze, które pomagają w oczyszczaniu organizmu z toksyn i utrzymaniu zdrowej skóry. Bez względu na to, czy użyjesz ich do przygotowania świeżego soku, czy też jako dodatek do potraw, nasze cytryny zawsze dostarczą Ci świeżości i zdrowia w każdym łyku.`,
        category: "cytrusy",
        price: 6.50,
        image: "./fruits-img/lemons-1280.jpg",
        smallImageimage: "./fruits-img/lemons-640.jpg",
        recommend: true
        // saleAmount: 200,
    },
    {
        id: 7,
        name: "Pomarańcza",
        description: `Nasze soczyste pomarańcze to nie tylko wyjątkowy smak, ale także skarbnica witamin i składników odżywczych. Ich soczystość i świeżość sprawiają, że każdy kęs to prawdziwa uczta dla zmysłów. Warto podkreślić, że pomarańcze są bogate w witaminę C, która wzmacnia odporność i zapewnia ochronę przed infekcjami. Dodatkowo, ich naturalna zawartość błonnika pomaga w regulacji trawienia i utrzymaniu zdrowej przewagi pokarmowej. Niezależnie od tego, czy spożywasz je w postaci soku czy świeżego owocu, nasze pomarańcze zawsze dostarczą Ci nie tylko wspaniałego smaku, ale także korzyści zdrowotnych.`,
        category: "cytrusy",
        price: 7.50,
        image: "./fruits-img/oranges.jpg",
        recommend: true
        // saleAmount: 200,
    }
];

// pestkowe, ziarnkowe, jagodowe, cytrusy, egzotyczne