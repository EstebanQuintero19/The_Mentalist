import type { Moment } from "./data";

export type Season = {
  n: number;
  years: string;
  episodes: number;
  title: string;
  poster: string;
  summary: string;
  people: string;
  episodesList: Moment[];
};

export const seasons: Season[] = [
  {
    n: 1,
    years: "2008–2009",
    episodes: 23,
    title: "La nota en la puerta",
    poster: "/img/seasons/s1.jpg",
    summary:
      "Un ex médium de televisión trabaja como consultor para el CBI a cambio de una sola cosa: acceso al expediente de Red John. Cada caso es un truco; cada truco, una manera de no pensar en la pared de su dormitorio.",
    people:
      "Virgil Minelli dirige el CBI. La unidad: Lisbon, Cho, Rigsby y una recién llegada, Grace Van Pelt, que todavía cree en médiums.",
    episodesList: [
      { code: "1", title: "Piloto", text: "Jane resuelve un caso en una hora provocando a la viuda. En flashback, la burla en televisión, la carta en la puerta y la cara en la pared.", red: true },
      { code: "11", title: "Red John's Friends", text: "Jared Renfrew, preso, dice tener información sobre Red John. Jane consigue liberarlo. Aparece muerto en Tijuana, con la cara sonriente encima.", red: true },
      { code: "16", title: "Bloodshot", text: "Una bomba deja a Jane temporalmente ciego. Resuelve el caso igual: sin ver, escuchando." },
      { code: "20", title: "Miss Red", text: "Jane pesca a una estafadora reconociendo sus propios trucos. Se le nota que la admira." },
      { code: "23", title: "Red John's Footsteps", text: "Rosalind Harker, ciega, vivió con Red John y lo recuerda tocando el piano. Su cómplice Hardy atrapa a Jane; Lisbon dispara. Con Hardy muere la pista.", red: true },
    ],
  },
  {
    n: 2,
    years: "2009–2010",
    episodes: 23,
    title: "Su mano derecha roja",
    poster: "/img/seasons/s2.jpg",
    summary:
      "Le quitan a Jane el caso. Sam Bosco, viejo compañero de Lisbon, se lo queda y no piensa compartirlo. Red John responde entrando en el propio CBI, y por primera vez Jane lo ve cara a cara.",
    people:
      "Entra Bosco con su equipo; salen todos ellos. Minelli dimite. Llega Madeleine Hightower a poner orden. Rigsby y Van Pelt empiezan, y lo dejan.",
    episodesList: [
      { code: "1", title: "Redemption", text: "Jane vuelve tras el incidente con Hardy. Bosco tiene ahora el caso Red John y le avisa: si se acerca, lo detendrá." },
      { code: "8", title: "His Red Right Hand", text: "Rebecca, la secretaria de Bosco, envenena y dispara a su equipo dentro del edificio. Bosco muere pidiéndole a Jane que acabe lo que empezó.", red: true },
      { code: "11", title: "Blood In, Blood Out", text: "Un antiguo amigo de Cho de los Playboys de Avon Park. Cho tiene un pasado y por una vez se le nota en la cara." },
      { code: "13", title: "Bleeding Heart", text: "Llega Hightower. Rigsby y Van Pelt confiesan su relación y uno de los dos tendrá que dejar la unidad." },
      { code: "23", title: "Red Sky in the Morning", text: "Unos imitadores secuestran a Jane. Quien lo rescata es Red John: máscara, voz tranquila, William Blake recitado a oscuras. Kristina Frye desaparece.", red: true },
    ],
  },
  {
    n: 3,
    years: "2010–2011",
    episodes: 24,
    title: "Fresas con nata",
    poster: "/img/seasons/s3.jpg",
    summary:
      "Un sospechoso arde vivo dentro del CBI y Asuntos Internos entra en la sala con J. J. LaRoche al frente. Hay un topo. Jane descubre quién es demasiado tarde, y en un centro comercial dispara a un hombre que dice ser Red John.",
    people:
      "Entra LaRoche. Entra Bret Stiles, de Visualize. Hightower huye incriminada. Van Pelt se compromete con Craig O'Laughlin, del FBI.",
    episodesList: [
      { code: "1", title: "Red Sky at Night", text: "Kristina Frye vuelve, sentada en una mesa, convencida de que está muerta. Red John la devolvió así." , red: true },
      { code: "3", title: "The Blood on His Hands", text: "Primer encuentro con Bret Stiles y con Visualize. Jane y él se reconocen: dos hombres que viven de leer a los demás." },
      { code: "10", title: "Red Moon", text: "Todd Johnson, asesino de policías, arde en su celda del CBI. Antes de morir le susurra a Jane: «Tyger, tyger».", red: true },
      { code: "16", title: "Red Queen", text: "Pruebas plantadas señalan a Hightower como topo de Red John. Jane la ayuda a escapar. LaRoche sigue cerrando el cerco.", red: true },
      { code: "22", title: "Rhapsody in Red", text: "Jane roba de casa de LaRoche la lista de sospechosos del topo. Cuatro nombres." },
      { code: "23–24", title: "Strawberries and Cream", text: "O'Laughlin era el topo; Van Pelt lo mata. Jane cita a Red John en un centro comercial, habla con Timothy Carter, le dispara, pide un té y espera.", red: true },
    ],
  },
  {
    n: 4,
    years: "2011–2012",
    episodes: 24,
    title: "El sombrero carmesí",
    poster: "/img/seasons/s4.jpg",
    summary:
      "Jane sale absuelto de un juicio que él mismo dirige. Carter no era Red John, y eso lo sabía. Lo que sigue es un plan de seis meses: perderlo todo en Las Vegas para que Red John venga a buscarlo.",
    people:
      "Entra Luther Wainwright, el jefe más joven del CBI. Entra Lorelei Martins. Sale Wainwright, muerto con un teléfono en la mano. Rigsby es padre.",
    episodesList: [
      { code: "1", title: "Scarlet Ribbons", text: "Jane se defiende solo. Absuelto. Fuera del juzgado, admite a Lisbon que Carter no era él." },
      { code: "4", title: "Fugue", text: "Un golpe borra a Jane los últimos años. Vuelve el estafador de feria. Lisbon lo lleva a la habitación de la pared para que recuerde." , red: true },
      { code: "7", title: "Blinking Red Light", text: "Un asesino en serie presume en televisión. Jane lo humilla en directo comparándolo con Red John. Esa noche aparece muerto con la sonrisa en la pared.", red: true },
      { code: "13", title: "Red Is the New Black", text: "Susan Darcy, del FBI, reabre el caso Carter. Jane tiene que mentir a alguien que no se deja." },
      { code: "24", title: "The Crimson Hat", text: "Seis meses de caída fingida en Las Vegas. Lorelei aparece. Red John pide una prueba de lealtad. Wainwright muere en la trampa. Lorelei desaparece.", red: true },
    ],
  },
  {
    n: 5,
    years: "2012–2013",
    episodes: 22,
    title: "Siete nombres",
    poster: "/img/seasons/s5.jpg",
    summary:
      "Lorelei está en custodia y todos la quieren: el CBI, el FBI, Seguridad Nacional. Jane la saca él mismo. A cambio recibe una frase que lo cambia todo: ya le ha dado la mano a Red John.",
    people:
      "Entra Bob Kirkland, de Seguridad Nacional, que también busca a Red John. Entra Tommy Volker. Sale Lorelei, asesinada. Gale Bertram dirige el CBI.",
    episodesList: [
      { code: "1", title: "The Crimson Ticket", text: "Lorelei detenida. Kirkland se la lleva antes de que Jane pueda hablar con ella.", red: true },
      { code: "5", title: "Red Dawn", text: "Flashback: cómo un hombre recién salido del psiquiátrico se coló en el CBI y se quedó. Minelli, Lisbon, Cho y Rigsby, diez años antes." },
      { code: "8", title: "Red Sails in the Sunset", text: "Jane monta una fuga para sacar a Lorelei de prisión. Ella se le escapa con un dato: Jane y Red John ya se conocen.", red: true },
      { code: "16", title: "There Will Be Blood", text: "Lorelei mata a los que la vendieron y va a por Red John. La encuentran con la sonrisa pintada encima.", red: true },
      { code: "22", title: "Red John's Rules", text: "Jane le enseña la lista a Lisbon: siete nombres. Red John responde con un vídeo de Lorelei y una lista idéntica.", red: true },
    ],
  },
  {
    n: 6,
    years: "2013–2014",
    episodes: 22,
    title: "La habitación",
    poster: "/img/seasons/s6.jpg",
    summary:
      "Ocho episodios para cerrar diez años. Los sospechosos caen uno a uno hasta que queda un sheriff con miedo a las palomas. Después, dos años de isla, y una segunda serie dentro de la misma: el FBI de Austin.",
    people:
      "Salen Partridge, Kirkland, Stiles, Haffner, LaRoche, Bertram y Red John. El CBI se disuelve. Entran Dennis Abbott, Kim Fischer y Jason Wylie. Rigsby y Van Pelt se casan y se van.",
    episodesList: [
      { code: "1", title: "The Desert Rose", text: "Partridge muere susurrando el poema. Lisbon despierta con la sonrisa pintada en la cara.", red: true },
      { code: "3", title: "Wedding in Red", text: "Rigsby y Van Pelt se casan. Jane consigue que un asesino confiese en la boda." },
      { code: "6", title: "Fire and Brimstone", text: "Jane reúne a los cinco sospechosos vivos en su casa de Malibú y les pide que se levanten la camisa. Explosión. Stiles y Haffner mueren.", red: true },
      { code: "7", title: "The Great Red Dragon", text: "Bertram huye. LaRoche muere en la persecución. Reede Smith confiesa y nombra a la Asociación Blake.", red: true },
      { code: "8", title: "Red John", text: "La capilla, el sheriff McAllister, las palomas, el parque. Jane lo estrangula, se sienta y llora. Después, un avión.", red: true },
      { code: "9", title: "My Blue Heaven", text: "Dos años después, una isla. Jane escribe cartas a Lisbon. Abbott llega a buscarlo con una oferta." },
      { code: "15", title: "White as the Driven Snow", text: "Rigsby y Van Pelt, secuestrados por Haibach. Salen vivos y deciden salir del todo." },
      { code: "22", title: "Blue Bird", text: "Lisbon se va a Washington con Pike. Jane la detiene en el avión y le dice lo que llevaba seis temporadas callando." },
    ],
  },
  {
    n: 7,
    years: "2014–2015",
    episodes: 13,
    title: "Orquídeas blancas",
    poster: "/img/seasons/s7.jpg",
    summary:
      "Trece episodios de despedida. Jane y Lisbon juntos y sin esconderlo. Un último asesino, Lazarus, y una muerte en la unidad que rompe a Cho. Termina en un jardín, con una boda y una noticia.",
    people:
      "Entra Michelle Vega. Sale Vega, en acto de servicio. Sale Abbott, a Washington. Cho queda al mando.",
    episodesList: [
      { code: "1", title: "Nothing But Blue Skies", text: "Jane y Lisbon ocultan la relación al FBI. Les dura un episodio." },
      { code: "3", title: "Orange Blossom Ice Cream", text: "Erica Flynn vuelve, tan peligrosa como siempre. Jane y ella se entienden demasiado bien." },
      { code: "8", title: "The Whites of His Eyes", text: "Vega recibe un disparo en una redada y muere en el hospital. Cho no se lo perdona." },
      { code: "12", title: "Brown Shag Carpet", text: "Lazarus, el asesino que colecciona lo que le falta a sus víctimas. Jane hace de cebo y sale mal." },
      { code: "13", title: "White Orchids", text: "Lazarus cae. Jane y Lisbon se casan en el jardín de la cabaña que él compró sin decírselo. Ella está embarazada." },
    ],
  },
];
