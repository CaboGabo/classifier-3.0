const a2 = require('./training/phrasesA2');
const a3 = require('./training/phrasesA3');
const a4 = require('./training/phrasesA4');
const a6 = require('./training/phrasesA6');
const a7 = require('./training/phrasesA7');
const a8 = require('./training/phrasesA8');
const a9 = require('./training/phrasesA9');
const b1 = require('./training/phrasesB1');
const b4 = require('./training/phrasesB4');
const b6 = require('./training/phrasesB6');
const c1 = require('./training/phrasesC1');

const classifier = require('./classifier/classifier');

async function main(posts) {
    const managers = await Promise.all([a2.trainnlp(), a3.trainnlp(), a4.trainnlp(), a6.trainnlp(), a7.trainnlp(), a8.trainnlp(), a9.trainnlp(), b1.trainnlp(), b4.trainnlp(), b6.trainnlp(), c1.trainnlp()]);
    var intents = ['perdidaInteres', 'modPeso', 'insomnio', 'fatiga', 'inutilidad',
        'disminucionPensar', 'p_muerte', 'malestar', 'bajaAutoestima',
        'desesperanza', 'consumoAfeccion'
    ];

    const start = Date.now();
    const results = await classifier.phrasesId(posts, intents, managers);
    console.log('Time:', Date.now() - start);

    return results;
}

const posts = [
    'Tengo unas ganas perras de matarme. Despertar sin ningún problema y de pronto sentir que la vida no vale nada, que no tiene sentido y que sólo somos miserables ... No sé, me siento mal pero no hay razones, mi familia está bien, tengo trabajo, tengo dinero (lo que necesito), tengo "amor", tengo "amigos" pero aún así me siento vacía sin fuerzas, sin ganas de nada y solo quisiera encontrar la paz.',
    'Nutrirnos a nosotros mismos de vez en cuando con instantes de soledad, ocio y bienestar es sinónimo de salud.',
    'Deje mi tratamiento, pensé que podía controlarme con fuerza de voluntad.-- Hoy estoy ansiosa y a punto de soltarme a llorar, me siento desanimada e irritable al mismo tiempo. Mañana me operan un ectoprion... No quiero saber nada de nadie. Como supero ésto!!! La cabeza me explota',
    'Sin dormir...',
    'Amarse a uno mismo es el comienzo de un romance para toda la vida',
    'Hoy fue uno de esos días que sólo quieres que pase...a veces siento que no doy más, el cansancio me gana y las emociones más..no soy una alumna brillante pero estoy dando todo lo que puedo...pero hoy siento que no es suficiente',
    'Estoy bien de animo, pero no tengo ganas de nada',
    'Estoy muy deprimido alguien que me ayude, me siento muy cansado, no tengo nada de energía',
    'HBO acaba de presentar un pequeño adelanto de lo que podemos esperar en los próximos meses y definitivamente se convertirán en nuestras preferidas de 2020.',
    'Alguien encontró unos audífonos rojos skullcandy cerca de las letras de escom, son inalambricos',
    'Estoy teniendo una muy mala noche y eso aumenta mi cansancio. Demasiado mala. Pienso mucho en como quitarme la vida y necesito escribir y sacarlo. Por eso elijo este espacio porque no tengo ningún otro. Estoy sola. En ese hoyo oscuro donde a veces uno cae sintiendo que es el mismo infierno y la única forma en la que siento que puedo sobrellevarlo es escribiendo',
    'No es cierto que uno se arregla. Cuando uno se rompe, es una mentira que un día vuelve a estar bien. Quizá uno ya nació roto y está condenado a esa condición eterna. Por eso no encaja con nadie ni es suficiente para nadie ni bueno para nadie ni para uno mismo.',
    'Me he sentido desconectada, siento que no pertenezco aquí y me siento un ser solitario. Escribir de esto me da muchísimo miedo, pues creo que sería triste ver estas palabras si algún día llego a recuperarme. Todo me da miedo últimamente, siento que la gente quiere hacerme daño, me siento vacía, siento que mi vida terminará pronto y no sé qué más hacer. Ya estoy llendo al psicólogo y me sentí mejor unas semanas, pero estos 3 últimos días parece que recaí. Me siento terrible. A veces pienso en que debería ir mejor con un psiquiatra y medicarme, pero no quiero depender de ello, sólo quiero sentirme mejor conmigo misma. Como antes... ¿Qué puedo hacer con todo esto? Necesito ayuda, de verdad. Estoy desesperada y no quiero tomar una mala decisión.',
    'ya wey déjate de mamadas y tráete unas birongas ándale no seas puto.',
    'En este momento me siento perdida, sin energía, sin ganas de seguir. Debo de admitir que mi vida no he vivido alguna dificultad o en un ambiente en el cual se podría considerar inseguro. Y por tal razón, el sentirme de esta manera aun teniendo todas estas bendiciones me hace sentir peor. Pero es inevitable que deje de sentir esto por el simple hecho de las actitudes pesimistas, tantos pensamientos toxicos que solo llenan me cabeza y no me dejan vivir en paz.',
    'En definitiva la vida me aburre. Trabajar, comer, relacionarse hacer hijos y morir. Me parece un ciclo muy monótono. En fin no sé que hacer, en su momento fui al psicólogo y me sentó bien pero no quiero recurrir a ello ya q no dispongo d mucho dinero y capaz recaiga de nuevo. ',
    'Soy una persona horrible, malvada… Soy egoísta e interesada, si puedo hacer algo para conseguir lo que quiero lo haré y me aprovecho de mis “amigos”, hago cosas a sus espaldas y sólo busco mi felicidad y luego si eso me preocupo por la de otros. Miento más que hablo, ya sea para dar la imagen de mi que sé que a esa persona le gustará para ver si obtengo algún beneficio, o si sé que puedo obtenerlo seré encantadora con quien sea para ganarme su favor. Por tanto, también soy falsa y mentirosa. Pero esto no acaba aquí, no señores, lo mejor es que me gusta mucho sentirme superior a todo el mundo y realmente lo siento así, nadie tiene la claridad de mente y la capacidad de hacer las cosas bien como la tengo yo. Por eso me llena de rabia que otros tengan algo que yo quiero, siento una envidia rencorosa y acaparadora aunque sea un capricho, detesto que esos idiotas tengan cosas que podrían haber sido mías. Todos me parecen gilipollas, tú que estás leyendo esto si te conociera seguro que también opinaría algo así, mientras tú piensas que soy tu mejor amigo.... ¿Alguien siente lo mismo?',
    'A veces me odio hasta el punto de querer desaparecer. Vivo sola y a veces siento que todo se me viene encima. Mis amigas de siempre me dejan de lado muchas veces, me siento desplazada, poco valorada. Noto que no valgo lo mismo que los demás y al final cuando miro a mi alrededor estoy siempre sola. Siento que estoy recayendo otra vez en este estado de tristeza constante, me estoy rindiendo... no puedo más.',
    'Tengo miedo.Estaba bastante estable desde hace bastante tiempo. Pero últimamente tengo más y más ganas de llorar. Estoy cada vez más y más triste y me estoy perdiendo en el abismo. Y aún me da más miedo volver a tocar fondo, estoy cayendo de nuevo, sin remedio. Quisiera desaparecer. Y no se que hacer para evitarlo. La pena me inunda.',
    'Hola. Actualmente me encuentro en uno de los peores períodos de mi vida. Desde los 16 años pasé de estar generalmente feliz a todo lo contrario. De repente cualquier cosa me hundía, me comía la cabeza por cualquier asunto por tonto que fuera y siempre ando preocupado y con miedo... Estoy terriblemente triste. No me gusta mi trabajo pero tampoco hay algo que llame mi atención. No me gusta la situación en la que estoy pero, la verdad, es que tampoco sé a dónde ir. Además, sé que hay millones de personas pasándolo peor que yo pero eso no me hace sentir mejor (como muchos dicen que debería ser) sino que tiene el efecto contrario porque me siento un desagradecido y un egoísta',
    'Maldito López Obrador, no me avisó que se me veía el trasero!. Soy un gordo, me comí un helado grande y una pizza',
    '¡Qué perrón ver a jóvenes mexicanos lograr sus sueños!',
    'Supongo que el adulto cínico no ha logrado matar del todo al niño dentro de mi porque esto me hizo muy feliz. Se me antoja todo ultimamente y no estoy embarazada',
    'Te vas en combi? Violencia. Te vas en camión? Violencia. Te vas en taxi? Violencia. Te vas en Uber? Violencia contra el conductor y a ti por usar la aplicación en vez de apoyar al transporte del Estado.'
];
main(posts).then();