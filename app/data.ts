export type Person = {
  name: string;
  role: string;
  note: string;
  photo?: string;
  taken?: boolean;
};

export const unit: Person[] = [
  {
    name: "Patrick Jane",
    photo: "/img/cast/patrick-jane.jpg",
    role: "Consultor. Antes, «médium» de feria.",
    note: "Se burló de Red John en televisión. Volvió a casa y encontró a Angela y a Charlotte bajo una cara sonriente pintada con su sangre. Desde entonces resuelve los casos de otros para cobrarse el suyo. Duerme en esa habitación, bajo esa pared.",
  },
  {
    name: "Teresa Lisbon",
    photo: "/img/cast/teresa-lisbon.jpg",
    role: "Agente senior. Jefa de la unidad.",
    note: "Hija mayor de un padre alcohólico, crió a tres hermanos. Es la única persona a la que Jane obedece, a veces. Lo que Jane vio: alguien que no lo abandonaría aunque debiera.",
  },
  {
    name: "Kimball Cho",
    photo: "/img/cast/kimball-cho.jpg",
    role: "Agente. Interrogatorios.",
    note: "Ex pandillero, ex militar, lector compulsivo. Voz plana, cero gestos. Lo que Jane vio: el único del equipo al que no puede leer, y el único que no lo necesita.",
  },
  {
    name: "Wayne Rigsby",
    photo: "/img/cast/wayne-rigsby.jpg",
    role: "Agente. Incendios.",
    note: "Hijo de un motero criminal, experto en fuego provocado, enamorado de Van Pelt desde el primer día. Lo que Jane vio: bondad sin doblez, algo raro en ese edificio.",
  },
  {
    name: "Grace Van Pelt",
    photo: "/img/cast/grace-van-pelt.jpg",
    role: "Agente. Informática.",
    note: "Llegó de Iowa creyendo en médiums. Se comprometió con Craig O'Laughlin, el infiltrado de Red John, y tuvo que dispararle ella misma. Lo que Jane vio: fe, y luego lo que la fe cuesta.",
  },
  {
    name: "Dennis Abbott",
    photo: "/img/cast/dennis-abbott.jpg",
    role: "Agente supervisor. FBI, Austin.",
    note: "Desmanteló el CBI y luego fue a buscar a Jane a la isla. Lo que Jane vio: un hombre con un pasado en Río Bravo que necesitaba que alguien se lo guardara.",
  },
  {
    name: "Kim Fischer, Jason Wylie, Michelle Vega",
    photo: "/img/cast/kim-fischer.jpg",
    role: "FBI, Austin.",
    note: "Fischer fue el anzuelo para traer a Jane de vuelta. Wylie, el analista que sostuvo la oficina. Vega, la agente joven que murió en acto de servicio y cambió a Cho para siempre.",
  },
];

export const around: Person[] = [
  {
    name: "J. J. LaRoche",
    photo: "/img/cast/jj-laroche.jpg",
    role: "Jefe de Asuntos Internos del CBI.",
    note: "Llegó para averiguar quién quemó vivo a Todd Johnson y puso a todo el equipo bajo sospecha. En su casa guardaba un tupper que Jane le robó: dentro estaba la lengua del hombre que agredió a su madre. Raro, meticuloso, incorruptible. Cayó en la cacería final, al abrir una puerta con trampa.",
    taken: true,
  },
  {
    name: "Gale Bertram",
    photo: "/img/cast/gale-bertram.jpg",
    role: "Director del CBI.",
    note: "Político antes que policía. Uno de los siete nombres de la lista. Cuando la Asociación Blake quedó al descubierto huyó, y en una capilla llegó a hacerse pasar por Red John. Oscar Cordero, que trabajaba para el verdadero, lo ejecutó allí mismo.",
    taken: true,
  },
  {
    name: "Sam Bosco",
    photo: "/img/cast/sam-bosco.jpg",
    role: "Agente senior. Antiguo jefe de Lisbon.",
    note: "Le quitó a Jane el caso Red John. Rebecca, su propia secretaria, mató a todo su equipo dentro del CBI. Antes de morir le devolvió el caso a Jane con una frase: «Ve a por él».",
    taken: true,
  },
  {
    name: "Virgil Minelli, Madeleine Hightower, Luther Wainwright",
    photo: "/img/cast/virgil-minelli.jpg",
    role: "Los que mandaban en el CBI.",
    note: "Minelli dimitió tras la masacre del equipo de Bosco. Hightower fue incriminada por Red John y vivió escondida con sus hijos. Wainwright, el más joven, murió con un teléfono en la mano creyendo que hablaba con Jane.",
    taken: true,
  },
  {
    name: "Kristina Frye",
    photo: "/img/cast/kristina-frye.jpg",
    role: "Médium.",
    note: "Lo único que Jane no pudo descartar del todo. Red John la secuestró y la devolvió convencida de que estaba muerta.",
  },
  {
    name: "Lorelei Martins",
    photo: "/img/cast/lorelei-martins.jpg",
    role: "Discípula de Red John.",
    note: "Enviada para seducir a Jane. Fue ella quien dejó caer la frase que lo cambió todo: Jane y Red John ya se habían dado la mano.",
    taken: true,
  },
  {
    name: "Bret Stiles",
    photo: "/img/cast/bret-stiles.jpg",
    role: "Líder de Visualize.",
    note: "Gurú de una secta millonaria y sospechoso perpetuo. Ayudó a Jane más veces de las que debería. Murió en la explosión de la casa de Malibú.",
    taken: true,
  },
  {
    name: "Craig O'Laughlin, Rebecca Anderson, Oscar Cordero",
    photo: "/img/cast/craig-olaughlin.jpg",
    role: "Las manos.",
    note: "Un agente del FBI, una secretaria, un ayudante del sheriff. Red John nunca necesitó estar en la sala.",
  },
];

export const seven = [
  { name: "Bret Stiles", fate: "Murió en la explosión de Malibú." },
  { name: "Gale Bertram", fate: "Se hizo pasar por él. Ejecutado." },
  { name: "Ray Haffner", fate: "Murió en la explosión de Malibú." },
  { name: "Reede Smith", fate: "Asociación Blake. Confesó." },
  { name: "Bob Kirkland", fate: "Cazaba a Red John por su cuenta. Asesinado." },
  { name: "Brett Partridge", fate: "Primera víctima de la temporada final." },
  { name: "Thomas McAllister", fate: "Sheriff del condado de Napa.", him: true },
];

export type Moment = {
  code: string;
  title: string;
  text: string;
  red?: boolean;
};

export const moments: Moment[] = [
  {
    code: "1 · Piloto",
    title: "La nota en la puerta",
    text: "Jane vuelve a casa después de burlarse de Red John en televisión. Hay una carta clavada en la puerta y una cara sonriente en la pared del dormitorio.",
    red: true,
  },
  {
    code: "1 · 23",
    title: "Rosalind Harker",
    text: "Una mujer ciega que vivió con Red John y lo recuerda como un hombre dulce que tocaba el piano. Lisbon dispara al cómplice Hardy para salvar a Jane, y con él muere la pista.",
    red: true,
  },
  {
    code: "2 · 8",
    title: "La masacre de Bosco",
    text: "Rebecca envenena y dispara al equipo de Bosco dentro del CBI. Bosco muere pidiéndole a Jane que termine lo que empezó.",
    red: true,
  },
  {
    code: "2 · 23",
    title: "Cara a cara",
    text: "Red John rescata a Jane de unos imitadores. Máscara, voz tranquila, William Blake recitado a oscuras. Es la primera vez que se ven.",
    red: true,
  },
  {
    code: "3 · 24",
    title: "Fresas con nata",
    text: "O'Laughlin es el infiltrado; Van Pelt lo mata. Jane dispara a Timothy Carter en un centro comercial creyendo que es Red John. Se sienta, pide un té y espera a que lo detengan.",
    red: true,
  },
  {
    code: "4 · 1",
    title: "El juicio",
    text: "Jane se defiende solo y sale absuelto. Carter no era Red John. Lo sabía antes de que terminara el juicio.",
  },
  {
    code: "4 · 24",
    title: "Lorelei",
    text: "Seis meses fingiendo una caída en Las Vegas para llegar a Red John a través de su discípula. Funciona a medias: Wainwright muere y Lorelei desaparece.",
    red: true,
  },
  {
    code: "5 · 22",
    title: "Siete nombres",
    text: "Jane le enseña la lista a Lisbon. Red John responde con un vídeo de Lorelei: él ya conocía los siete.",
    red: true,
  },
  {
    code: "6 · 1",
    title: "Tyger, tyger",
    text: "Partridge muere susurrando el poema. Lisbon despierta con una cara sonriente pintada en el rostro. El reloj empieza a correr.",
    red: true,
  },
  {
    code: "6 · 6–7",
    title: "Fuego y azufre",
    text: "Jane reúne a los cinco sospechosos vivos en su casa de Malibú. Una explosión. Stiles y Haffner mueren. LaRoche cae poco después.",
    red: true,
  },
  {
    code: "6 · 8",
    title: "Red John",
    text: "Bertram cae en la capilla. McAllister se revela, dice el nombre de la Asociación Blake y huye. Jane lo alcanza en un parque. Termina con las manos, no con una pistola.",
    red: true,
  },
  {
    code: "6 · 22",
    title: "El aeropuerto",
    text: "Dos años después, ya en el FBI, Jane detiene el vuelo de Lisbon a Washington para decirle lo que llevaba seis temporadas callando.",
  },
  {
    code: "7 · 13",
    title: "Bodas blancas",
    text: "Lazarus, el último asesino, cae. Jane y Lisbon se casan en el jardín de la cabaña. Ella está embarazada. Cierra los ojos.",
  },
];
