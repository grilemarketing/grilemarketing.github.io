// Define the list of questions
const questions = [
  {
    question: "Deosebirea fundamentala dintre economia naturala si cea de schimb decurge din faptul ca: (I 1)",
    answers: [
      { text: "a) economia naturala exista doar in mediul rural", correct: false },
      { text: "b) economia de schimb este singura existenta doar in tarile mai putin dezvoltate", correct: false },
      { text: "c) economia de schimb produce preponderent pentru piata, iar cea naturala pentru autoconsum", correct: true },
      { text: "d) nu exista nici o legatura intre aceste doua notiuni", correct: false },
    ],
  },
  {
    question: "Pentru ca sa existe economia de schimb, sunt necesare: (I 2)",
    answers: [
      { text: "a) proprietatea mixta si proprietatea publica", correct: false },
      { text: "b) diversitatea economiei si specializarea factorilor de productie", correct: true },
      { text: "c) existenta economiei naturale", correct: false },
      { text: "d) doar specializarea muncii", correct: false },
    ],
  },
  {
    question: "In legatura cu resursele, problema principala a omenirii este: (I 3)",
    answers: [
      { text: "a) minimizarea consumului", correct: false },
      { text: "b) cresterea lor mai rapida in aport cu nevoile", correct: true },
      { text: "c) limitarea lor", correct: false },
      { text: "d) cresterea lor in aceeasi proportie cu cresterea cu nevoile", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele caracterizeaza resursele naturale: (I 4)",
    answers: [
      { text: "a) sunt nelimitate", correct: false },
      { text: "b) sunt resurse derivate", correct: false },
      { text: "c) nu sporesc simultan cu cresterea nevoilor", correct: true },
      { text: "d) sporesc simultan cu cresterea nevoilor", correct: false },
    ],
  },
  {
    question: "Bunurile necesare satisfacerii nevoilor pot fi: (I 5)",
    answers: [
      { text: "a) numai economice", correct: false },
      { text: "b) libere si economice", correct: true },
      { text: "c) doar servicii", correct: false },
      { text: "d) numai bunuri libere", correct: false },
    ],
  },
  {
    question: "Resursele nu pot fi: (I 6)",
    answers: [
      { text: "a) rare si recuperabile", correct: false },
      { text: "b) regenerabile si neregenerabile", correct: false },
      { text: "c) limitate", correct: false },
      { text: "d) nelimitate", correct: true },
    ],
  },
  {
    question: "Bunurile economice au drept caracteristica fundamentala: (I 7)",
    answers: [
      { text: "a) destinatia", correct: false },
      { text: "b) utilitatea", correct: false },
      { text: "c) raritatea", correct: true },
      { text: "d) calitatea", correct: false },
    ],
  },
  {
    question: "Elementele utilizate pentru producerea bunurilor necesare satisfacerii trebuintelor se numesc: (I 8)",
    answers: [
      { text: "a) resurse", correct: false },
      { text: "b) bunuri economice", correct: false },
      { text: "c) nevoi", correct: false },
      { text: "d) niciun raspuns nu este corect", correct: true },
    ],
  },
  {
    question: "In stiinta economica, caracterul relativ limitativ al resurselor: (I 9)",
    answers: [
      { text: "a) se refera numai la resursele neproductibile", correct: false },
      { text: "b) este considerat ca fiind temporar", correct: false },
      { text: "c) determina principiul rationalitatii in activitatea economica", correct: true },
      { text: "d) nu se interpreteaza in raport cu nevoile", correct: false },
    ],
  },
  {
    question: "Nevoia de hrana este o nevoie: (I 10)",
    answers: [
      { text: "a) elementara", correct: true },
      { text: "b) de lux", correct: false },
      { text: "c) elevata", correct: false },
      { text: "d) complexa", correct: false },
    ],
  },
  {
    question: "Microeconomia se ocupa cu studiul: (I 11)",
    answers: [
      { text: "a) economiei la nivelul unei ramuri", correct: false },
      { text: "b) economiei la nivelul unei firme", correct: true },
      { text: "c) economiei la nivelul unui stat", correct: false },
      { text: "d) economiei la nivel global", correct: false },
    ],
  },
  {
    question: "Nevoile au drept caracteristica fundamentala: (I 12)",
    answers: [
      { text: "a) caracterul dinamic", correct: false },
      { text: "b) pot fi regenerabile si neregenerabile", correct: false },
      { text: "c) sunt limitate", correct: false },
      { text: "d) niciun raspuns nu este corect", correct: true },
    ],
  },
  {
    question: "Resursele regenarabile sunt acelea care: (I 13)",
    answers: [
      { text: "a) nu se reproduc", correct: false },
      { text: "b) sunt nelimitate", correct: false },
      { text: "c) se recupereaza", correct: false },
      { text: "d) nici o varianta nu este corecta", correct: true },
    ],
  },
  {
    question: "Costul alternativei sacrificate se mai numeste si: (I 14)",
    answers: [
      { text: "a) cost marginal", correct: false },
      { text: "b) cost de oportunitate", correct: true },
      { text: "c) cost total mediu", correct: false },
      { text: "d) cost implicit", correct: false },
    ],
  },
  {
    question: "Un cadou primit reprezinta: (I 15)",
    answers: [
      { text: "a) un bun economic", correct: true },
      { text: "b) un bun liber", correct: false },
      { text: "c) bun economic sau liber in functie daca este util sau nu", correct: false },
      { text: "d) niciun raspuns nu este corect", correct: false },
    ],
  },
  {
    question: "Activitatea economica este: (I 16)",
    answers: [
      { text: "a) sinonima cu actvitatea umana", correct: false },
      { text: "b) o componenta a activitatii umane", correct: true },
      { text: "c) intr-o relatie de la intreg la parte cu activitatea umana", correct: false },
      { text: "d) mai cuprinzatoare decat activitatea umana", correct: false },
    ],
  },
  {
    question: "Agentii economici de piata sunt: (I 17)",
    answers: [
      { text: "a) societatile pe actiuni", correct: false },
      { text: "b) intreprinderile publice", correct: false },
      { text: "c) bancile", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "Au caracter limitativ: (I 18)",
    answers: [
      { text: "a) nevoile", correct: false },
      { text: "b) factorii de productie", correct: true },
      { text: "c) bunurile libere", correct: false },
      { text: "d) nevoile complexe", correct: false },
    ],
  },
  {
    question: "Menajele se caracterizeaza prin: (I 19)",
    answers: [
      { text: "a) consumul individual", correct: false },
      { text: "b) producerea de bunuri si servicii", correct: true },
      { text: "c) redistribuirea veniturilor statului", correct: false },
      { text: "d) realizarea de servicii pentru colectivitate", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele reprezinta un flux monetar intre agentii economici: (I 20)",
    answers: [
      { text: "a) deplasarea banilor de la cei care primsc bunurile catre cei care le-au furnizat prin vanzare-cumparare", correct: true },
      { text: "b) schimbul de bunuri propriu-zise", correct: false },
      { text: "c) deplasarea banilor de la vanzator catre cumparator", correct: false },
      { text: "d) intrarea in posesie a bunului de catre cumparator", correct: false },
    ],
  },
  {
    question: "Intreprinderile se pot clasifica dupa: (I 21)",
    answers: [
      { text: "a) provenienta angajatilor", correct: false },
      { text: "b) dupa forma de proprietate", correct: true },
      { text: "c) exclusiv dupa natura activitatii", correct: false },
      { text: "d) exclusiv dupa marime", correct: false },
    ],
  },
  {
    question: "Invatamantul de stat este finantat de: (I 22)",
    answers: [
      { text: "a) sectorul bancar", correct: false },
      { text: "b) administratie publica", correct: true },
      { text: "c) administratiile private", correct: false },
      { text: "d) intreprinderi", correct: false },
    ],
  },
  {
    question: "Bunurile si serviciile: (I 23)",
    answers: [
      { text: "a) sunt create de populatie", correct: false },
      { text: "b) sunt fabricate de agentii economici producatori", correct: true },
      { text: "c) sunt fabricate de agentii economici consumatori", correct: false },
      { text: "d) sunt cumparate pe piata resurselor si vandute pe piata externa", correct: false },
    ],
  },
  {
    question: "Sectorul bancar are drept caracteristica (I 24)",
    answers: [
      { text: "a) transformarea disponibilitatilor banesti", correct: false },
      { text: "b) colectarea impozitelor si taxelor", correct: false },
      { text: "c) producerea de bunuri nemarfare", correct: false },
      { text: "d) niciun raspuns nu este corect", correct: true },
    ],
  },
  {
    question: "Fluxurile economice ale agentilor economici pot fi: (I 25)",
    answers: [
      { text: "a) fluxuri publice si private", correct: false },
      { text: "b) fluxuri reale si monetare", correct: true },
      { text: "c) fluxuri individuale si colective", correct: false },
      { text: "d) niciun raspuns nu este corect", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele fac parte dintre sectoarele institutionale: (I 26)",
    answers: [
      { text: "a) menajele", correct: false },
      { text: "b) intreprinderile", correct: false },
      { text: "c) bancile", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii este falsa: (I 27)",
    answers: [
      { text: "a) rationalitatea economica presupune compararea efectelor cu eforturile astfel incat sa se maximizeze raportul efecte/eforturi", correct: false },
      { text: "b) proprietatea mixta presupunea existenta proprietatii publice si private", correct: false },
      { text: "c) proprietatea mixta presupunea existenta a doi proprietari", correct: true },
      { text: "d) piata reprezinta locul de intalnire al agentilor economici in economia de piata", correct: false },
    ],
  },
  {
    question: "Diviziunea muncii conduce si la unele consecinte negative, cum ar fi: (I 28)",
    answers: [
      { text: "a) pierderea capacitatii de munca", correct: false },
      { text: "b) monotonia", correct: true },
      { text: "c) diminuarea efortului", correct: false },
      { text: "d) nu exista nici o consecinta negativa", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele reprezinta un flux real intre agentii economici (I 29)",
    answers: [
      { text: "a) deplasarea banilor de la cei care primesc bunurile catre cei care le-au furnizat prin vanzare-cumparare", correct: false },
      { text: "b) schimburi de bunuri propriu-zise", correct: true },
      { text: "c) platirea pretului de catre cumparator", correct: false },
      { text: "d) deplasarea banilor de la vanzator catre cumparator", correct: false },
    ],
  },
  {
    question: "Ecuatia cantitativa a banilor este creatia lui: (I 30)",
    answers: [
      { text: "a) John Maynard Keynes", correct: false },
      { text: "b) Paul Samuelson", correct: false },
      { text: "c) Hermann Heinrich Grossen", correct: false },
      { text: "d) Irvin Fisher", correct: true },
    ],
  },
  {
    question: "Care este principala sursa a avutiei nationale? (I 31)",
    answers: [
      { text: "a) soldul pozitiv a balantei comerciale", correct: false },
      { text: "b) cantitatea de resurse naturale", correct: true },
      { text: "c) formele efective de organizare a economiei", correct: false },
      { text: "d) factorul de productie capital", correct: false },
    ],
  },
  {
    question: "Nivelul preturilor si puterea de cumparare a banilor: (I 32)",
    answers: [
      { text: "a) nu sunt intotdeauna strans corelate", correct: false },
      { text: "b) sunt intotdeauna egale", correct: false },
      { text: "c) variaza proportional", correct: false },
      { text: "d) variaza invers proportional", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele tranzactii intra in PIB din 2020 (I 33)",
    answers: [
      { text: "a) cumpararea unei case construite in anul 2000", correct: false },
      { text: "b) prestarea unor servicii de coafura in decursul anului respectiv", correct: true },
      { text: "c) producerea si consumarea unor legume de catre o familie din mediul rural", correct: false },
      { text: "d) cumpararea unei materii prime utilizate pentru obtinerea unui bun final ce urmeaza a fi vandut in decurscul anului respectiv", correct: false },
    ],
  },
  {
    question: "Veniturile realizate de catre cei peste 50 000 de cetateni romani care lucreaza in Israel sunt incluse in: (I 34)",
    answers: [
      { text: "a) PIB al Romaniei si PNB al Israelului", correct: false },
      { text: "b) PNB al al Romaniei si PIB al Israelului", correct: true },
      { text: "c) PIN al al Romaniei si PNN al Israelului", correct: false },
      { text: "d) numai in PIB al Romaniei", correct: false },
    ],
  },
  {
    question: "Legea lui Okun coreleaza: (I 35)",
    answers: [
      { text: "a) modificarea preturilor cu modificarea salariilor", correct: false },
      { text: "b) modificarea efectiva a preturilor cu modificarea lor anticipata", correct: true },
      { text: "c) rata somajului cu productia", correct: false },
      { text: "d) rata somajului cu iluzia monetara", correct: false },
    ],
  },
  {
    question: "Produsul intern brut: (I 36)",
    answers: [
      { text: "a) este valoarea de piata a bunurilor si serviciilor produse de cetatenii unei tari intr-o anumita perioada indiferent de locul unde isi desfasoara activiatatea", correct: false },
      { text: "b) este venitul de care dispune populatia dupa plata impozitelor pe venit si care poate fi utilizat pentru consum si economii", correct: false },
      { text: "c) este valoarea bunurilor si serviciilor cumparate de administratiile publice centrale si locale intr-un an", correct: false },
      { text: "d) este valoarea de piata a tuturor bunurilor finale si a serviciilor produse in interiorul unei tari intr-o anumita perioada", correct: true },
    ],
  },
  {
    question: "Inflatia, ca dezechilibru monetar-material macroeconomic, caracterizeaza: (I 37)",
    answers: [
      { text: "a) tarile in dezvoltare", correct: false },
      { text: "b) tarile in tranzitie la economia de piata", correct: false },
      { text: "c) toate tarile, indiferent de modul de dezvoltare", correct: true },
      { text: "d) economiile centralizate", correct: false },
    ],
  },
  {
    question: "Politica fiscala adecvata in cazul unei expansiuni prelungite consta in: (I 38)",
    answers: [
      { text: "a) majorarea impozitelor", correct: true },
      { text: "b) cresterea cheltuielilor bugetare", correct: false },
      { text: "c) marirea deficitului bugetar", correct: false },
      { text: "d) emisiune monetara suplimentara", correct: false },
    ],
  },
  {
    question: "Problemele fundamentale ale macroeconomiei se refera la: (I 39)",
    answers: [
      { text: "a) masurarea rezultatelor economice la nivel de orase", correct: false },
      { text: "b) masurarea rezultatelor economice la nivelul agentilor economici", correct: false },
      { text: "c) interdependenta dintre cererea globala si oferta globala simultan pe toate pietele", correct: true },
      { text: "d) relatiile economice dintre doua tari", correct: false },
    ],
  },
  {
    question: "Dintre conditiile cererii agregate se numara: (I 40)",
    answers: [
      { text: "a) previziunile agentilor economici consumatori si producatori", correct: false },
      { text: "b) politica economica a guvernului", correct: false },
      { text: "c) conjunctura economiei mondiale", correct: false },
      { text: "d) productivitatea factorilor de productie", correct: true },
    ],
  },
  {
    question: "Care din urmatoarele variabile constituie un exemplu de agregat macroeconomic? (I 41)",
    answers: [
      { text: "a) productia totala realizata de o mare firma", correct: false },
      { text: "b) produsul national brut al Romaniei", correct: true },
      { text: "c) nivelul ocuparii in cadrul agriculturii", correct: false },
      { text: "d) somajul la nivelul unei localitati", correct: false },
    ],
  },
  {
    question: "Tranzactiile generatoare de bunuri si servicii ce nu sunt luate in calcul la determinarea PIB sunt: (I 42)",
    answers: [
      { text: "a) munca prestata de imigrantii ilegali", correct: false },
      { text: "b) jocurile ilegale de noroc", correct: false },
      { text: "c) primirea de bacsisuri nedeclarate integral", correct: false },
      { text: "d) toate cele de mai sus", correct: true },
    ],
  },
  {
    question: "Echilibrul economic se caracterizeaza prin: (I 43)",
    answers: [
      { text: "a) somaj si inflatie", correct: false },
      { text: "b) cheltuieli agregate suficiente pentru a cumpara productia", correct: true },
      { text: "c) excedent al balantei comerciale si de plati", correct: false },
      { text: "d) deficit al balantei comerciale si de plati", correct: false },
    ],
  },
  {
    question: "Somajul creste daca: (I 44)",
    answers: [
      { text: "a) investitiile cresc", correct: false },
      { text: "b) economia este in recesiune", correct: true },
      { text: "c) exportul creste", correct: false },
      { text: "d) statul acorda facilitati pentru crearea de noi intreprinderi", correct: false },
    ],
  },
  {
    question: "Investitiile scad atunci cand: (I 45)",
    answers: [
      { text: "a) se reduc impozitele", correct: false },
      { text: "b) se accelereaza amortizarea capitalului tehnic fix", correct: false },
      { text: "c) se annticipeaza reducerea profiturilor viitoare", correct: true },
      { text: "d) creste cererea de consum", correct: false },
    ],
  },
  {
    question: "Daca consumul excede venitul personal disponibil, atunci: (I 46)",
    answers: [
      { text: "a) economia personala este pozitiva", correct: false },
      { text: "b) economia personala creste", correct: false },
      { text: "c) economia personala scade", correct: false },
      { text: "d) economisirea personala este negativa", correct: true },
    ],
  },
  {
    question: "Care din functiile banilor face posibila utilizarea banilor ca instrument de economisire? (I 47)",
    answers: [
      { text: "a) functia ca mijloc de masurare", correct: false },
      { text: "b) functia ca mijloc de rezerva", correct: true },
      { text: "c) functia ca mijloc de schimb", correct: false },
      { text: "d) functia ca mijloc de plata", correct: false },
    ],
  },
  {
    question: "Reducerea excedentului ofertei de munca fata de cererea de munca este determinata in principal de (I 48)",
    answers: [
      { text: "a) cresterea productivitatii muncii", correct: false },
      { text: "b) cresterea numarului locurilor de munca", correct: true },
      { text: "c) reducerea gradului de ocupare", correct: false },
      { text: "d) reducerea natalitatii", correct: false },
    ],
  },
  {
    question: "Piata mondiala se dezvolta ca urmare a faptului ca: (I 49)",
    answers: [
      { text: "a) diferentierea inzestrarii tarilor cu facori de productie se reduce", correct: false },
      { text: "b) toate tarile obtin rezultate economice din ce in ce mai bune", correct: false },
      { text: "c) specializarea economiilor nationale se reduce", correct: false },
      { text: "d) nicio tara nu poate sa-si asigure toate bunurile de care are nevoie", correct: true },
    ],
  },
  {
    question: "Balanta de plati externe reprezinta (I 50)",
    answers: [
      { text: "a) un instrument valutar-financiar util analizei si controlului fluxurilor interne si externe al unei tari pe timp de un an", correct: false },
      { text: "b) tablou statistico-economic in care se include si prin care se compara incasarile si platile realizate de o tara din relatiile sale economice, financiare si monetare cu alte tari pe timp de un an", correct: true },
      { text: "c) fluxurile valorice cu strainatatea si stocul de resurse financiar-valutare, aflate la dispozitia unei economii nationale la un moment dat", correct: false },
      { text: "d) componenta a balantei comerciale", correct: false },
    ],
  },
  {
    question: "Cererea de munca se exprima prin: (I 51)",
    answers: [
      { text: "a) numarul somerilor", correct: false },
      { text: "b) numarul celor care doresc sa se angajeze in conditii salariale", correct: false },
      { text: "c) numarul de locuri de munca", correct: true },
      { text: "d) populatia apta de munca", correct: false },
    ],
  },
  {
    question: "Evaluarea produsului national net poate fi efectuata in felul urmator: (I 52)",
    answers: [
      { text: "a) PNB plus amortizare", correct: false },
      { text: "b) venitul national plus impozitele indirecte", correct: false },
      { text: "c) consumul plus investitiile", correct: false },
      { text: "d) PNB minus amortizarea", correct: true },
    ],
  },
  {
    question: "Deficitul bugetului de stat se formeaza in cazul cand: (I 53)",
    answers: [
      { text: "a) suma cheltuielilor publice devanseaza suma veniturilor publice", correct: true },
      { text: "b) cheltuielile publice cresc", correct: false },
      { text: "c) veniturile publice scad", correct: false },
      { text: "d) toate raspunsurile sunt corecte", correct: false },
    ],
  },
  {
    question: "Ce reprezinta costul de oportunitate al detinerii de bani lichizi? (I 54)",
    answers: [
      { text: "a) bunurile se pot cumpara cu bani lichizi", correct: false },
      { text: "b) costul bunurilor ce se pot cumpara cu bani lichizi", correct: false },
      { text: "c) dobanda care se pierde ca urmare a nedepunerii banilor la banca", correct: true },
      { text: "d) dobanda care se castiga prin depunerea banilor la banca", correct: false },
    ],
  },
  {
    question: "Elevii si studentii in varsta de munca si apti de munca nu sunt luati in considerare in determinarea somajului deoarece (I 55)",
    answers: [
      { text: "a) nu au timp pentru a munci", correct: false },
      { text: "b) beneficiaza de burse", correct: false },
      { text: "c) primesc bani de la familiile lor", correct: false },
      { text: "d) nu intra in populatia activa disponibila", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii cu privire la indemnizatia sau ajutorul de somaj sunt corecte? (I 56)",
    answers: [
      { text: "a) o primeste orice persoana care nu lucreaza", correct: false },
      { text: "b) se acorda pe o perioada nelimitata", correct: false },
      { text: "c) este atribuita in mod facultativ", correct: false },
      { text: "d) este mai mica decat salariul", correct: true },
    ],
  },
  {
    question: "In conditiile recesiunii economice cunosc o tendinta de scadere: (I 57)",
    answers: [
      { text: "a) inflatia", correct: false },
      { text: "b) puterea de cumparare", correct: true },
      { text: "c) deficitul bugetar", correct: false },
      { text: "d) ratele dobanzilor", correct: false },
    ],
  },
  {
    question: "Cresterea economica este un obiectiv prioritar al oricarei politici macroeconomice pentru ca: (I 58)",
    answers: [
      { text: "a) influenteaza gradul de ocupare si nivelul veniturilor", correct: false },
      { text: "b) asigura sporirea masei monetare", correct: false },
      { text: "c) este sursa principala de imbunatatire a standardului de viata a populatiei", correct: true },
      { text: "d) apar descoperiri stiintifice noi", correct: false },
    ],
  },
  {
    question: "Rata dobanzii se reduce daca: (I 59)",
    answers: [
      { text: "a) nevoile de finantare din economie nu se modifica", correct: false },
      { text: "b) oferta de moneda se reduce, iar cererea de moneda creste", correct: true },
      { text: "c) deficitul trezoreriei creste", correct: false },
      { text: "d) banca centrala emite mai putina moneda", correct: false },
    ],
  },
  {
    question: "Deflatia reprezinta procesul: (I 60)",
    answers: [
      { text: "a) de crestere sustinuta a nivelului general al preturilor", correct: false },
      { text: "b) de scadere sustinuta a nivelului general al preturilor", correct: true },
      { text: "c) de crestere sustinuta a puterii de cumparare a banilor", correct: false },
      { text: "d) de scadere sustinuta a puterii de cumparare a banilor", correct: false },
    ],
  },
  {
    question: "Stiinta managementului studiaza: (I 61)",
    answers: [
      { text: "a) procesele si relatiile de management", correct: true },
      { text: "b) piata", correct: false },
      { text: "c) consumatorul", correct: false },
      { text: "d) concurenta", correct: false },
    ],
  },
  {
    question: "In calitate de stiinta economica de sinteza, managementul preia diverse categorii economice si metode, de la urmatoarele discipline din domeniu: (I 62)",
    answers: [
      { text: "a) economie", correct: true },
      { text: "b) fizica", correct: false },
      { text: "c) chimie", correct: false },
      { text: "d) biologie", correct: false },
    ],
  },
  {
    question: "Scopul unei firme este: (I 63)",
    answers: [
      { text: "a) producerea unui bun sau prestarea unui serviciu care satisface nevoile clientilor sai", correct: true },
      { text: "b) de a intra in lichidare", correct: false },
      { text: "c) de a mentine starea de sanatate a consumatorilor", correct: false },
      { text: "d) de a repartiza sarcini consumatorilor", correct: false },
    ],
  },
  {
    question: "Procesul de management prezinta urmatoarele functii/atribute: (I 64)?",
    answers: [
      { text: "a) rationalizarea", correct: false },
      { text: "b) previziunea", correct: true },
      { text: "c) eficienta", correct: false },
      { text: "d) redistribuirea", correct: false },
    ],
  },
  {
    question: "Fazei previzionale ii corespunde: (I 65)",
    answers: [
      { text: "a) managementul de tip anticipativ", correct: true },
      { text: "b) managementul de criza", correct: false },
      { text: "c) managementul prin obiective", correct: false },
      { text: "d) managementul costurilor", correct: false },
    ],
  },
  {
    question: "Organizarea, dupa continutul sau poate fi: (I 66)",
    answers: [
      { text: "a) pe zone geografice", correct: false },
      { text: "b) structurala", correct: true },
      { text: "c) dupa clienti", correct: false },
      { text: "d) temporala", correct: false },
    ],
  },
  {
    question: "Functia de antrenare are caracter: (I 67)",
    answers: [
      { text: "a) operational", correct: true },
      { text: "b) preventiv", correct: false },
      { text: "c) permanent", correct: false },
      { text: "d) anticipativ", correct: false },
    ],
  },
  {
    question: "Functia de control-evaluare trebuie sa aiba caracter: (I 68)",
    answers: [
      { text: "a) continuu", correct: true },
      { text: "b) operational", correct: false },
      { text: "c) structural", correct: false },
      { text: "d) conceptual", correct: false },
    ],
  },
  {
    question: "Stilul de management reflecta: (I 69)",
    answers: [
      { text: "a) stilul de viata al unui angajat", correct: false },
      { text: "b) modul in care un manager gandeste si actioneaza", correct: true },
      { text: "c) tinuta vestimentara", correct: false },
      { text: "d) obiceiurile", correct: false },
    ],
  },
  {
    question: "In sistemele autoritare, instrumentele de exercitare a puterii managerilor sunt: (I 70)",
    answers: [
      { text: "a) directivarea si controlul", correct: true },
      { text: "b) motivarea", correct: false },
      { text: "c) stimularea", correct: false },
      { text: "d) relatiile interpersonale bune cu membri colectivitatii", correct: false },
    ],
  },
  {
    question: "Comportamentul managerilor este influentat de: (I 71)",
    answers: [
      { text: "a) gradul de pregatire", correct: true },
      { text: "b) varsta", correct: false },
      { text: "c) autoritatea manageriala", correct: false },
      { text: "d) atitudinea", correct: false },
    ],
  },
  {
    question: "Criteriile multidimensionale de clasificare a stilurilor de management sunt: (I 72)",
    answers: [
      { text: "a) aria deciziilor si volumul informatiilor", correct: true },
      { text: "b) autoritatea manageriala", correct: false },
      { text: "c) atitudinea fata de responsabilitate", correct: false },
      { text: "d) tipologia managerilor", correct: false },
    ],
  },
  {
    question: "Firmele producatoare de bunuri materiale denumite si firme de productie, pot fi: (I 73)",
    answers: [
      { text: "a) firme industriale", correct: true },
      { text: "b) firme comerciale", correct: false },
      { text: "c) lanturi hoteliere", correct: false },
      { text: "d) banci", correct: false },
    ],
  },
  {
    question: "Abilitatile de comunicare ale intreprinzatorului sunt: (I 74)",
    answers: [
      { text: "a) capacitatea intreprinzatorului de a transmite mesaje orale si scrise clare, sintetice, usor de inteles", correct: true },
      { text: "b) capacitatea decizionala", correct: false },
      { text: "c) cunostinte de specialitate", correct: false },
      { text: "d) calitatile fizice si fiziologice", correct: false },
    ],
  },
  {
    question: "Componentele micromediului sunt: (I 75)",
    answers: [
      { text: "a) mediul natural", correct: false },
      { text: "b) mediul demografic", correct: false },
      { text: "c) mediul ambiental", correct: false },
      { text: "d) furnizorii", correct: true },
    ],
  },
  {
    question: "Componentele macromediului sunt: (I 76)",
    answers: [
      { text: "a) clientii", correct: false },
      { text: "b) mediul economic", correct: true },
      { text: "c) intermediarii", correct: false },
      { text: "d) organismele publice", correct: false },
    ],
  },
  {
    question: "Avantajele retelei de intreprinderi sunt: (I 77)",
    answers: [
      { text: "a) se gestioneaza toata informatia, in vederea redistribuirii ei in regim de liber acces", correct: true },
      { text: "b) nu permite interconectarea cu alte retele", correct: false },
      { text: "c) necesita cheltuieli ridicate", correct: false },
      { text: "d) nu incurajeaza initiativele si tot ceea ce contribuie la cresterea eficacitatii", correct: false },
    ],
  },
  {
    question: "Dupa elementele care le definesc posturile de munca, pot fi: (I 78)",
    answers: [
      { text: "a) posturi de conducere", correct: true },
      { text: "b) compartimente de munca", correct: false },
      { text: "c) birouri", correct: false },
      { text: "d) servicii", correct: false },
    ],
  },
  {
    question: "Dupa modul de exercitare a autoritatii managerului compartimentele de munca pot fi: (I 79)",
    answers: [
      { text: "a) comparimente elementare (simple)", correct: true },
      { text: "b) compartimente de stat major", correct: false },
      { text: "c) compartimente de decizie", correct: false },
      { text: "d) compartimente operative", correct: false },
    ],
  },
  {
    question: "Instrumentele programarii sunt: (I 80)",
    answers: [
      { text: "a) organigrama", correct: false },
      { text: "b) programele operative si bugetele", correct: true },
      { text: "c) planurile de durata medie si lunga", correct: false },
      { text: "d) strategia", correct: false },
    ],
  },
  {
    question: "Obiectivele economice ale marketingului sunt: (I 101)",
    answers: [
      { text: "a) procesele si relatiile de management", correct: false },
      { text: "b) cresterea cifrei de afaceri si a vanzarilor", correct: true },
      { text: "d) imaginea in cadrul pietei", correct: false },
      { text: "d) concurenta", correct: false },
    ],
  },
  {
    question: "Obiectivele psihologice ale marketingului sunt: (I 102)",
    answers: [
      { text: "a) cresterea profitului si a ratei profitului", correct: false },
      { text: "b) cresterea nivelului investitiilor", correct: false },
      { text: "c) reducerea riscului", correct: false },
      { text: "d) imagine favorabila in randul consumatorilor sau imaginea de marca sau firma", correct: true },
    ],
  },
  {
    question: "Principiile marketingului sunt: (I 103)",
    answers: [
      { text: "a) maximizarea consumului", correct: true },
      { text: "b) cercetarea pietei, a nevoilor de utilizare sau consum", correct: false },
      { text: "c) imbunatatirea permanenta a capacitatii de adaptare a firmei la cerintele pietei", correct: false },
      { text: "d) fidelizarea consumatorilor", correct: false },
    ],
  },
  {
    question: "Mediul politic si institutional prezinta urmatoarele componente: (I 104)",
    answers: [
      { text: "a) sistemul politic si arsenalul lui legislativ", correct: true },
      { text: "b) societatile de investitii financiare", correct: false },
      { text: "c) furnizorii", correct: false },
      { text: "d) asociatiile consumatorilor", correct: false },
    ],
  },
  {
    question: "Din punct de vedere al intereselor de marketing piata poate fi: (I 105)",
    answers: [
      { text: "a) libera", correct: false },
      { text: "b) totala", correct: true },
      { text: "c) concurentiala", correct: false },
      { text: "d) reglementata", correct: false },
    ],
  },
  {
    question: "Una dintre caile de crestere a pietei este: (I 106)",
    answers: [
      { text: "a) accelerata", correct: false },
      { text: "b) structurala", correct: false },
      { text: "c) intensiv-extensiva", correct: true },
      { text: "d) temporala", correct: false },
    ],
  },
  {
    question: "In functie de scopul cercetarii, cercetarile de marketing pot fi: (I 107)",
    answers: [
      { text: "a) operationala", correct: false },
      { text: "b) competitiva", correct: true },
      { text: "c) permanenta", correct: false },
      { text: "d) anticipativa", correct: false },
    ],
  },
  {
    question: "In functie de frecventa cercetarii, cercetarile de marketing pot fi: (I 108)",
    answers: [
      { text: "a) permanente", correct: true },
      { text: "b) analitice", correct: false },
      { text: "c) aplicative", correct: false },
      { text: "d) de birou", correct: false },
    ],
  },
  {
    question: "Metodele de culegere a informatiilor folosite in cercetarile de marketing sunt: (I 109)",
    answers: [
      { text: "a) cercetarea directa", correct: true },
      { text: "b) cercetarea exploratorie", correct: false },
      { text: "c) esantionul", correct: false },
      { text: "d) colectivitatea totala", correct: false },
    ],
  },
  {
    question: "In functie de scopul urmarit de firme, strategiile de piata pot fi: (I 110)",
    answers: [
      { text: "a) de patrundere", correct: true },
      { text: "b) concentrate", correct: false },
      { text: "d) leaderului", correct: false },
      { text: "d) urmaritorului", correct: false },
    ],
  },
  {
    question: "In functie de exigentele pietei firma poate opta pentru una din urmatoarele strategii: (I 111)",
    answers: [
      { text: "a) strategia de diferentiere", correct: false },
      { text: "b) strategia calitatii ridicate", correct: true },
      { text: "c) strategia de consolidare", correct: false },
      { text: "d) strategia de extindere", correct: false },
    ],
  },
  {
    question: "Elementele acorporale ale produsului sunt: (I 112)",
    answers: [
      { text: "a) pretul", correct: true },
      { text: "b) culoarea", correct: false },
      { text: "c) mirosul", correct: false },
      { text: "d) imaginea", correct: false },
    ],
  },
  {
    question: "Produsul este un sistem format din: (I 113)",
    answers: [
      { text: "a) componente materiale", correct: false },
      { text: "b) elemente corporale", correct: true },
      { text: "c) ambalaje", correct: false },
      { text: "d) elemente sintetice", correct: false },
    ],
  },
  {
    question: "Pentru fundamentarea strategiei de produs firma trebuie sa aiba in vedere urmatorii factori: (I 114)",
    answers: [
      { text: "a) pozitia detinuta pe piata sau pe pietele carora se adreseaza", correct: true },
      { text: "b) gradul de utilizare al produsului", correct: false },
      { text: "c) nivelul cererii de consum", correct: false },
      { text: "d) stabilitatea economica", correct: false },
    ],
  },
  {
    question: "In practica intreprinderii, preturile se stabilesc in functie de: (I 115)",
    answers: [
      { text: "a) costuri", correct: true },
      { text: "b) mediul demografic", correct: false },
      { text: "c) preferintele clientilor", correct: false },
      { text: "d) localizare", correct: false },
    ],
  },
  {
    question: "Preturile de referinta pot fi: (I 116)",
    answers: [
      { text: "a) pretul minim indicat", correct: true },
      { text: "b) preturi promotionale", correct: false },
      { text: "c) pretul promis", correct: false },
      { text: "d) preturi de circumstanta", correct: false },
    ],
  },
  {
    question: "Canalul de marketing prezinta urmatoarele dimensiuni: (I 117)",
    answers: [
      { text: "a) profunzimea", correct: false },
      { text: "b) elasticitatea", correct: false },
      { text: "c) lungimea", correct: true },
      { text: "d) ciclicitatea", correct: false },
    ],
  },
  {
    question: "Una dintre formele publicitatii exterioare este: (I 118)",
    answers: [
      { text: "a) televiziunea", correct: false },
      { text: "b) cinematograful", correct: false },
      { text: "c) radioul", correct: false },
      { text: "d) afisul", correct: true },
    ],
  },
  {
    question: "Dupa modul de desfasurare in timp a activitatii promotionale deosebim: (I 119)",
    answers: [
      { text: "a) strategia activitatii promotionale permanente", correct: true },
      { text: "b) strategia de promovare a imaginii", correct: false },
      { text: "c) strategia de extindere a imaginii", correct: false },
      { text: "d) strategia de promovare exclusiva a produsului", correct: false },
    ],
  },
  {
    question: "Dupa rolul activitatii promotionale strategiile pot fi: (I 120)",
    answers: [
      { text: "a) strategia de promovare a imaginii", correct: false },
      { text: "b) strategia activitatii intermitente", correct: false },
      { text: "c) strategia ofensiva", correct: true },
      { text: "d) strategia de extindere a imaginii", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta unul dintre efectele activarii unei companii pe plan international pentru companie: (I 121)",
    answers: [
      { text: "a) se bucura de o anumita stabilitate, deoarece nu mai depind de o singura piata", correct: false },
      { text: "b) costurile sunt destul de ridicate, iar profiturile tind sa scada odata cu internationalizarea activitatilor companiei", correct: true },
      { text: "c) pot sa invete de la competitorii lor de pe toate pietele pe care activeaza", correct: false },
      { text: "d) beneficiaza de personal talentat de pe pietele externe", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii reprezinta definitia marketingului international? (I 122)",
    answers: [
      { text: "a) marketingul international reprezinta procesul prin care se stabilesc oportunitatile si se identifica resursele pentru valorificarea acestora, se determina obiectivele de marketing si se dezvolta planuri de implementare a strategiei de marketing", correct: false },
      { text: "b) marketingul international reprezinta procesul de planificare si conducere a tranzactiilor dincolo de barierele nationale pentru a crea schimburi care sa satisfaca obiectivele unor persoane sau organizatii", correct: true },
      { text: "c) marketingul international reprezinta mijloacele moderne prin care se urmareste sensibilizarea companiilor si a publicului larg cu privire la procesul de degradare a mediului ambiant", correct: false },
      { text: "d) marketingul international reprezinta atragerea, perfectionarea si mentinerea angajatilor in functii care sa asigure utilizarea maxima si eficienta a capacitatii lor de munca si totodata un sistem de motivatii care sa permita satisfacerea atat a necesitatilor materiale cat si a aspiratiilor de ordin profesional ale personalului firmei", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii reprezinta definitia globalizarii? (I 123)",
    answers: [
      { text: "a) o grupare integrationista, bazata pe liber schimb", correct: false },
      { text: "b) un process care implica o transformare in organizarea spatiala a relatiilor si tranzactiilor sociale - atat in termeni de marime, calitate, frecventa si impact - generand fluxuri si retele transcontinentale si interregionale de activitate, interactiune si exercitare a puterii", correct: true },
      { text: "c) realizarea unor intelegeri intre competitori care activeaza pe mai multe piete", correct: false },
      { text: "d) ansamblu de procese prin care diferite state constituie un grup sau un bloc continental", correct: false },
    ],
  },
  {
    question: "Dintre elementele definitorii ale globalizarii nu face parte: (I 124)",
    answers: [
      { text: "a) infrastructura", correct: false },
      { text: "b) institutiile", correct: false },
      { text: "c) sistemele de exercitare a puterii", correct: false },
      { text: "d) actiunea la distanta", correct: true },
    ],
  },
  {
    question: "Infrastructura, ca element al globalizarii, se refera la: (I 125)",
    answers: [
      { text: "a) acele sisteme care faciliteaza relatiile si fluxurile globale", correct: true },
      { text: "b) o initiativa inter-statala, de o cuprindere deosebita, ce incearca sa reglementeze si sa controloze relatiile internationale", correct: false },
      { text: "c) faptul ca apar noi entitati, iar dimensiunea militara nu mai reprezinta esenta puterii la nivel international", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii nu face parte din cadrul infrastructurii fizice, ca element al gobalizarii? (I 126)",
    answers: [
      { text: "a) transporturi", correct: false },
      { text: "b) utilizarea limbii engleze drept forma de comunicare pe plan international", correct: true },
      { text: "c) internetul", correct: false },
      { text: "d) sistemele de clearing din sistemul bancar", correct: false },
    ],
  },
  {
    question: "Ce tip de manageri se concentreaza pe piete de produs clar delimitate, care sunt definite ca beneficii specifice oferite unui grup de consumatori prin utilizarea unei anumite tehnologii in cadrul unei regiunui geografice si culturi omogene? (I 127)",
    answers: [
      { text: "a) cu o perspectiva etnocentrica", correct: false },
      { text: "b) cu o perspectiva policentrica", correct: false },
      { text: "c) cu o perspectiva regionala", correct: true },
      { text: "d) cu o perspectiva geocentrica", correct: false },
    ],
  },
  {
    question: "Ce tip de manageri se afla in permanenta in cautarea de oportunitati pentru coordonarea aprovizionarii, productiei si marketingului pe piata globala de produs, indiferent de granitele nationale? (I 128)",
    answers: [
      { text: "a) cu o perspectiva etnocentrica", correct: false },
      { text: "b) cu o perspectiva policentrica", correct: false },
      { text: "c) cu o perspectiva regionala", correct: false },
      { text: "d) cu o perspectiva geocentrica", correct: true },
    ],
  },
  {
    question: "Adeptii carui curent al globalizarii cred intr-o lume perfect integrata, cu o civilizatie omogena, cu modele de consum similare pe tot Globul, in care vechile forme de guvernanta (ce apartineau fiecarui stat in parte) vor lasa loc unor organisme cu vocatie globala? (I 129)",
    answers: [
      { text: "a) scepticii", correct: false },
      { text: "b) hiperglobalistii", correct: true },
      { text: "c) transformationalistii", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Adeptii carui curent al globalizarii afirma ca diferentele sociale, culturale, religioase sau etnice nu mai sunt inter-nationale (vechea distinctie Nord-Sud, respectiv state dezvoltate - state in curs de dezvoltare sau subdezvoltate) ci se gasesc in fiecare mare oras din lume? (I 130)",
    answers: [
      { text: "a) scepticii", correct: false },
      { text: "b) hiperglobalistii", correct: false },
      { text: "c) transformationalistii", correct: true },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Dintre avantajele standardizarii produselor nu face parte: (I 131)",
    answers: [
      { text: "a) reducerea costurilor", correct: false },
      { text: "b) patrunderea cu usurinta pe piete noi, cu puternice traditii de consum", correct: true },
      { text: "c) posibilitatea crearii unei marci globale", correct: false },
      { text: "d) mentinerea clientilor care au o mobilitate internationala ridicata", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente reprezinta avantajul adaptarii locale? (I 132)",
    answers: [
      { text: "a) mentinerea clientilor care au o mobilitate internationala ridicata", correct: false },
      { text: "b) produsele vor fi mai usor acceptate de catre consumatori", correct: true },
      { text: "c) posibilitatea uniformizarii eforturilor de promovare ale companiei", correct: false },
      { text: "d) compania beneficiaza de economii de scala", correct: false },
    ],
  },
  {
    question: "Ce defineste Asociata Americana de Marketing ca fiind 'un nume, un termen, un semn, un simbol sau design sau o combinatie intre aceastea prin care se intentioneaza identificarea bunurilor sau serviciilor oferite de catre un vanzator sau un grup de vanzatori si diferentierea acestora fata de cele oferite de catre concurenta'? (I 133)",
    answers: [
      { text: "a) marketing strategic", correct: false },
      { text: "b) numele de marca", correct: true },
      { text: "c) unitatea strategica de afaceri", correct: false },
      { text: "d) mixul de marketing", correct: false },
    ],
  },
  {
    question: "Care este ordinea corecta a elementelor mixului de marketing, pornind de la elementul cel mai usor de standardizat catre elementul cel mai dificil de standardizat? (I 134)",
    answers: [
      { text: "a) produsul, pretul, promovarea, distributia", correct: false },
      { text: "b) produsul, promovarea, distributia, pretul", correct: true },
      { text: "c) promovarea, distributia, produsul, pretul", correct: false },
      { text: "d) distributia, produsul, promovarea, pretul", correct: false },
    ],
  },
  {
    question: "Numele de marca monolitica reprezinta: (I 135)",
    answers: [
      { text: "a) strategia de a utiliza numele companiei ca si nume de marca pentru gamele de produse desfacute", correct: true },
      { text: "b) reprezinta strategia de a utiliza, pe langa numele de marca al companiei, si numele de marca specifice unor anumite categorii sau game de produse realizate de catre companie, care permit diferentierea intre produsele aceleiasi companii", correct: false },
      { text: "c) strategia de a promova in mod proeminent numele de marca al produsului dar de a alatura si numele de marca al companiei pentru a familiariza consumatorii cu noul nume de marca", correct: false },
      { text: "d) strategia prin care anumite produse sau game de produse ale companiei au capatat o asemenea recunoastere, incat alaturarea numelui companiei producatoare nu mai este necesara", correct: false },
    ],
  },
  {
    question: "Numele de marca separat reprezinta: (I 136)",
    answers: [
      { text: "a) strategia de a utiliza numele companiei ca si nume de marca pentru gamele de produse desfacute", correct: false },
      { text: "b) reprezinta strategia de a utiliza, pe langa numele de marca al companiei, si numele de marca specifice unor anumite categorii sau game de produse realizate de catre companie, care permit diferentierea intre produsele aceleiasi companii", correct: false },
      { text: "c) strategia de a promova in mod proeminent numele de marca al produsului dar de a alatura si numele de marca al companiei pentru a familiariza consumatorii cu noul nume de marca", correct: false },
      { text: "d) strategia prin care anumite produse sau game de produse ale companiei au capatat o asemenea recunoastere, incat alaturarea numelui companiei producatoare nu mai este necesara", correct: true },
    ],
  },
  {
    question: "Care este al cincilea 'P' propus pentru mixul de marketing? (I 137)",
    answers: [
      { text: "a) produsul", correct: false },
      { text: "b) pretul", correct: false },
      { text: "c) parteneriatele", correct: true },
      { text: "d) promovarea", correct: false },
    ],
  },
  {
    question: "Nu reprezinta un element al mediului politic: (I 138)",
    answers: [
      { text: "a) guvernul", correct: false },
      { text: "b) personalul de marketing", correct: true },
      { text: "c) grupurile de presiune", correct: false },
      { text: "d) politicienii", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii nu face parte din activitatile prin care guvernul se implica asupra oricarei companii: (I 139)",
    answers: [
      { text: "a) prin legislatia privind orele de munca si salariul minim pe economie (unele companii isi relocalizeaza productia in tari unde platesc un salariu mai mic angajatilor)", correct: false },
      { text: "b) guvernul, prin taxele impuse, poate determina cresterea pretului unor produse si pierderea unor clienti de catre companii", correct: false },
      { text: "c) prin agentiile sale reglementeaza acordarea unor ajutoare catre populatie (de exemplu alocatii pentru copii, ajutor de crestere a copilui pentru mame, etc.)", correct: false },
      { text: "d) actioneaza independent asupra economiei, nefiind permisa implicarea niciunei organizatii", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta unul dintre motivele pentru care personalul de marketing ar trebui sa urmareasca mediul politic in continua schimbare? (I 140)",
    answers: [
      { text: "a) guvernele sunt responsabile pentru protejarea intereselor populatiei in general, impunand o serie de restrictii pentru companii (cum ar fi de exemplu controlul poluarii, care pentru acestea inseamna costuri ridicate)", correct: false },
      { text: "b) politicienii nu au impact asupra activitatii companiilor, ci doar actiunile diferitelor grupuri de presiune", correct: true },
      { text: "c) in majoritatea tarilor vest-europene, situatia politica este relativ stabila, insa in tarile mai putin dezvlotate exista un anumit grad de instabilitate care poate afecta companiile ce investesc pe pietele respective", correct: false },
      { text: "d) companiile sunt afectate de orice schimbare in sistemul de guvernare; schimbarea de guvern inseamna taxe noi care pot fi prevazute chiar pentru domeniul in care acestea activeaza", correct: false },
    ],
  },
  {
    question: "Liberatea afacerilor, ca si componenta al Indicelui Libertatii Economice publicat de catre Fundatia Heritage din S.U.A. se refera la: (I 141)",
    answers: [
      { text: "a) reglementarile din domeniul bancar, fiind cu atat mai ridicata cu cat acestea sunt mai reduse", correct: false },
      { text: "b) stablitatea preturilor (in principal inflatia)", correct: false },
      { text: "c) cat de liberi sunt intreprinzatorii de a infiinta noi afaceri, de a obtine licente sau de a-si lichida afacerea", correct: true },
      { text: "d) ponderea cheltuielilor guvernamentale in PIB ca masura a interventiei acestuia in economie", correct: false },
    ],
  },
  {
    question: "Libertatea comertului, ca si componenta a Indicelui Libertatii Economice publicat de catre Fundatia Heritage din S.U.A. se refera la: (I 142)",
    answers: [
      { text: "a) reglementarile din domeniul bancar, fiind cu atat mai ridicata cu cat acestea sunt mai reduse", correct: false },
      { text: "b) calculul atat a marimii medie a taxelor vamale (80% din subindice) cat si a barierelor nontarifare in calea comertului (pondere de 20%)", correct: true },
      { text: "c) gradul de coruptie din tara respectiva si este cu atat mai ridicata cu cat coruptia este mai redusa", correct: false },
      { text: "d) ponderea cheltuielilor guvernamentale in PIB ca masura a interventiei acestuia in economie", correct: false },
    ],
  },
  {
    question: "Libertatea fiscala, ca si componenta a Indicelui Libertatii Economice publicat de catre Fundatia Heritage din S.U.A. se refera la: (I 143)",
    answers: [
      { text: "a) marimea taxelor, indicele fiind cu atat mai mare cu cat taxele sunt mai mici", correct: true },
      { text: "b) stabilitatea preturilor (in principal inflatia)", correct: false },
      { text: "c) gradul de coruptie din tara respectiva si este cu atat mai ridicata cu cat coruptia este mai redusa", correct: false },
      { text: "d) piata fortei de munca, indicele fiind atat mai redus cu cat exista restrictii in ceea ce priveste nivelul salariilor iar flexibilitatea de pe piata fortei de munca este mai redusa", correct: false },
    ],
  },
  {
    question: "Libertatea fata de interventia guvernului, ca si componenta a Indicelui Libertatii Economice publicat de catre Fundatia Heritage din S.U.A. se refera la: (I 144)",
    answers: [
      { text: "a) reglementarile din domeniul bancar, fiind cu atat mai ridicata cu cat acestea sunt mai reduse", correct: false },
      { text: "b) stabilitatea preturilor (in principal inflatia)", correct: false },
      { text: "c) masura a cat de liberi sunt intreprinzatorii de a infiinta noi afaceri, de a obtine licente sau de a-si lichida afacerea", correct: false },
      { text: "d) ponderea cheltuielilor guvernamentale in PIB ca masura a interventiei acestuia in economie", correct: true },
    ],
  },
  {
    question: "Libertatea monetara, ca si componenta a Indicelui Libertatii Economice publicat de catre Fundatia Heritage din S.U.A. se refera la: (I 145)",
    answers: [
      { text: "a) reglementarile din domeniul bancar, fiind cu atat mai ridicata cu cat acestea sunt mai reduse", correct: false },
      { text: "b) stabilitatea preturilor (in principal inflatia)", correct: true },
      { text: "c) gradul de coruptie din tara respectiva si este cu atat mai ridicata cu cat coruptia este mai redusa", correct: false },
      { text: "d) piata fortei de munca, indicele fiind atat mai redus cu cat exista restrictii in ceea ce priveste nivelul salariilor iar flexibilitatea de pe piata fortei de munca este mai redusa", correct: false },
    ],
  },
  {
    question: "Libertatea de coruptie, ca si componenta a Indicelui Libertatii Economice publicat de catre Fundatia Heritage din S.U.A. se refera la: (I 146)",
    answers: [
      { text: "a) reglementarile din domeniul bancar, fiind cu atat mai ridicata cu cat acestea sunt mai reduse", correct: false },
      { text: "b) stabilitatea preturilor (in principal inflatia)", correct: false },
      { text: "c) gradul de coruptie din tara respectiva si este cu atat mai ridicata cu cat coruptia este mai redusa", correct: true },
      { text: "d) ponderea cheltuielilor guvernamentale in PIB ca masura a interventiei acestuia in economie", correct: false },
    ],
  },
  {
    question: "Libertatea fortei de munca, una dintre componentele Indicelui Libertatii Economice publicat de catre Fundatia Heritage din S.U.A. se refera la: (I 147)",
    answers: [
      { text: "a) marimea taxelor, indicele fiind cu atat mai mare cu cat taxele sunt mai mici", correct: false },
      { text: "b) stabilitatea preturilor (in principal inflatia)", correct: false },
      { text: "c) gradul de coruptie din tara respectiva si este cu atat mai ridicata cu cat coruptia este mai redusa", correct: false },
      { text: "d) piata fortei de munca, indicele fiind atat mai redus cu cat exista restrictii in ceea ce priveste nivelul salariilor iar flexibilitatea de pe piata fortei de munca este mai redusa", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta una dintre cele trei dimensiuni ale dezvoltarii umane cuprinse in cadrul Indicelui Dezvoltarii Umane? (I 148)",
    answers: [
      { text: "a) o viata indelungata si sanatoasa, masurata prin asteptarile de la viata", correct: false },
      { text: "b) cunoasterea, masurata prin rata de alfabetizare a adultilor dar si prin gradul de inscriere in invatamantul primar, secundar si tertiar", correct: false },
      { text: "c) un standard decent de viata, reprezentat prin valoarea PIB/locuitor", correct: false },
      { text: "d) niciun raspuns corect", correct: true },
    ],
  },
  {
    question: "Criza care a avut loc in S.U.A. in anul 1907 a avut drept cauza: (I 149)",
    answers: [
      { text: "a) colapsul sistemului bancar", correct: true },
      { text: "b) schimbarea conducerii politice a tarii", correct: false },
      { text: "c) scaderea preturilor materiilor prime (petrol, gaz metan) de care aceasta tara era dependenta", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii nu reprezinta una dintre caracteristicile crizei economice mondiala din anul 1973? (I 150)",
    answers: [
      { text: "a) au fost afectate tarile importatoare de petrol, in prezent existand preocupari pentru gasirea unor noi surse alternative de energie", correct: false },
      { text: "b) a avut efecte si in plan politic in sensul ca in multe state a fost instaurata dictatura", correct: true },
      { text: "c) pretul petrolului a explodat de la 3$ la 12$ pe baril", correct: false },
      { text: "d) criza s-a datorat deciziei statelor membre O.P.E.C. de a stopa furnizarea de petrol catre S.U.A., Olanda, s.a.", correct: false },
    ],
  },
  {
    question: "Publicitatea inselatoare reprezinta: (I 151)",
    answers: [
      { text: "a) orice modatlitate de a face publicitate prin care se identifica explicit sau implicit un competitor sau bunurile oferite de catre acesta", correct: false },
      { text: "b) utilizarea hartuirii sau constrangerii pentru a distorsiona semnificativ libertatea de alegere a unui consumator in ceea ce priveste produsul, pe care il achizitioneaza exclusiv datorita acestor actiuni negative", correct: false },
      { text: "c) orice activitate de publicitate care deceptioneaza persoanel carora le este adresata si care, prin natura sa inselatoare, este cel mai probabil a le afecta comportamentul viitor, avand efecte negative si asupra activitatii unor competitori", correct: true },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Publicitatea comparativa reprezinta: (I 152)",
    answers: [
      { text: "a) orice modalitate de a face publicitate prin care se identifica explicit sau implicit un competitor sau bunurile oferite de catre acesta", correct: true },
      { text: "b) utilizarea hartuirii sau constrangerii pentru a distorsiona semnificativ libertatea de alegere a unui consumator in ceea ce priveste produsul, pe care il achizitioneaza exclusiv datorita acestor actiuni negative", correct: false },
      { text: "c) orice activitate de publicitate care deceptioneaza persoanel carora le este adresata si care, prin natura sa inselatoare, este cel mai probabil a le afecta comportamentul viitor, avand efecte negative si asupra activitatii unor competitori", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Care este scopul politicii in domeniul concurentei, asa cum afirma si fostul comisar pe probleme de concurenta Mario Monti? (I 153)",
    answers: [
      { text: "a) interzicerea oricaror fuziuni", correct: false },
      { text: "b) bunastarea consumatorilor", correct: true },
      { text: "c) protejarea micilor investitori", correct: false },
      { text: "d) obtinerea unor sume importante din amenzi pentru Comisia Europeana", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii referitoare la concurenta perceputa ca stare (structura a pietei) nu este corecta? (I 154)",
    answers: [
      { text: "a) aceasta perspectiva este specifica Uniunii Europene", correct: false },
      { text: "b) statul se poate implica in sensul stimularii rivalitatii intre aceste firme precum si prin protejarea acestei structuri a pietei (prin interzicerea fuziunilor sau achizitiilor)", correct: false },
      { text: "c) acest criteriu pune accent pe alocarea eficienta a resurselor", correct: true },
      { text: "d) o piata este concurentiala atunci cand exista un numar suficient de mare de firme producatoare care sa se concureze activ si care sa aiba o putere de piata redusa in raport cu furnizorii, concurentii si clientii", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii cu privire la situatie de monopol si cea de pozitie dominanta nu este adevarata? (I 155)",
    answers: [
      { text: "a) o cota de piata de peste 75% inseamna monopol", correct: false },
      { text: "b) o cota de piata de 40-50% poate conferi o pozitie dominanta", correct: false },
      { text: "c) sub 25% nu sunt luate in considerare pentru pozitia dominanta", correct: false },
      { text: "d) niciun raspuns corect", correct: true },
    ],
  },
  {
    question: "Refuzul de aprovizionare, ca forma a abuzului de pozitie dominanta reprezinta: (I 156)",
    answers: [
      { text: "a) cazul in care o companie integrata pe verticala, care detine o pozitie dominanta refuza o oferta rezonabila din partea unei alte companii, de a achizitiona materii prime utilizate in obtinerea produselor companiei", correct: true },
      { text: "b) obligarea consumatorului in momentul in care doreste sa cumpere un produs (produsul principal) sa mai achizitioneze un alt produs (produsul legat)", correct: false },
      { text: "c) intelegerea dintre o companie aflata in pozitie dominanta si un furnizor sau distribitor de a vinde, produce, achizitiona sau revinde numai produsele precizate in contract sau in unele cazuri, exclusivitatea poate fi si pana la doar 80%", correct: false },
      { text: "d) cazul unei companii aflata intr-o pozitie dominanta atat pe piata produsului final, cat si pe cea a materiilor prime, aceasta comercializand produsul sau la preturi scazute, dar percepand totodata companiilor concurente preturi foarte ridicate pentru materiile prime pe care le comercializeaza, avand ca efect un pret ridicat pentru produsul final al acestora", correct: false },
    ],
  },
  {
    question: "Legarea, ca forma a abuzului de pozitie dominanta reprezinta: (I 157)",
    answers: [
      { text: "a) cazul in care o companie integrata pe verticala, care detine o pozitie dominanta refuza o oferta rezonabila din partea unei alte companii, de a achizitiona materii prime utilizate in obtinerea produselor companiei", correct: false },
      { text: "b) obligarea consumatorului in momentul in care doreste sa cumpere un produs (produsul principal) sa mai achizitioneze un alt produs (produsul legat)", correct: true },
      { text: "c) intelegerea dintre o companie aflata in pozitie dominanta si un furnizor sau distribitor de a vinde, produce, achizitiona sau revinde numai produsele precizate in contract sau in unele cazuri, exclusivitatea poate fi si pana la doar 80%", correct: false },
      { text: "d) cazul unei companii aflata intr-o pozitie dominanta atat pe piata produsului final, cat si pe cea a materiilor prime, aceasta comercializand produsul sau la preturi scazute, dar percepand totodata companiilor concurente preturi foarte ridicate pentru materiile prime pe care le comercializeaza, avand ca efect un pret ridicat pentru produsul final al acestora", correct: false },
    ],
  },
  {
    question: "Preturile agresive, ca forma a abuzului de pozitie dominanta reprezinta: (I 158)",
    answers: [
      { text: "a) cazul in care o companie integrata pe verticala, care detine o pozitie dominanta refuza o oferta rezonabila din partea unei alte companii, de a achizitiona materii prime utilizate in obtinerea produselor companiei", correct: false },
      { text: "b) cazul unei companii care comercializeaza doua produse, A si B impreuna, fara optiunea din partea consumatorilor de a le achizitiona individual, in cele mai multe situatii, aceste practici fiind rezultatul unui monopol", correct: false },
      { text: "c) strategia companiei de a vinde o perioada scurta de timp la preturi foarte scazute, pentru a-si slabi concurentii, urmand o perioada de crestere substantiala a preturilor, in care se va recupera pierderea initiala, compania obtinand profituri mult mai ridicate decat inainte de utilizarea acestui comportament", correct: true },
      { text: "d) situatia in care o companie in pozitie dominanta pretinde preturi variate pentru consumatori diferiti", correct: false },
    ],
  },
  {
    question: "Care sunt cele mai reprezentative acorduri pe orizontala? (I 159)",
    answers: [
      { text: "a) distrubutia exclusiva", correct: false },
      { text: "b) cartelurile", correct: true },
      { text: "c) preturile agresive", correct: false },
      { text: "d) fuziuni", correct: false },
    ],
  },
  {
    question: "Controlul de catre producator a preturilor practicate de catre distribuitorii independenti, ca forma a acordurilor pe verticala, se refera la: (I 160)",
    answers: [
      { text: "a) operatiunea prin care doua sau mai multe intreprinderi se unesc intr-o companie noua, companiile respective (originare) incetandu-si existenta ca entitati juridice independente", correct: false },
      { text: "b) legislatia in domeniul concurentei interzice producatorului sa fixeze in forma absoluta preturile pe care distribuitorii le practica si sa apeleze doar la preturi recomandate ", correct: true },
      { text: "c) cazul in care producatorul acorda exclusivitate pe un anumit teritoriu unui anumit distribuitor independent", correct: false },
      { text: "d) o tranzactie prin care o companie achizitioneaza integral o alta companie", correct: false },
    ],
  },
  {
    question: "Distributia exclusiva, ca forma a acordurilor pe verticala, se refera la: (I 161)",
    answers: [
      { text: "a) operatiunea prin care doua sau mai multe intreprinderi se unesc intr-o companie noua, companiile respective (originare) incetandu-si existenta ca entitati juridice independente", correct: false },
      { text: "b) legislatia in domeniul concurentei interzice producatorului sa fixeze in forma absoluta preturile pe care distribuitorii le practica si sa apeleze doar la preturi recomandate", correct: false },
      { text: "c) cazul in care producatorul acorda exclusivitate pe un anumit teritoriu unui anumit distribuitor independent", correct: true },
      { text: "d) o tranzactie prin care o companie achizitioneaza integral o alta companie", correct: false },
    ],
  },
  {
    question: "Care este elementul esential al mediului geografic si se refera la impartirea suprafetei de teren pe zone de o anumita importanta: (I 162)",
    answers: [
      { text: "a) religia", correct: false },
      { text: "b) localizarea", correct: true },
      { text: "c) interactiunile", correct: false },
      { text: "d) mobilitatea populatiei", correct: false },
    ],
  },
  {
    question: "Localizarea, ca element al mediului geografic, se refera la: (I 163)?",
    answers: [
      { text: "a) impartirea suprafetei de teren pe zone de o anumita importanta", correct: true },
      { text: "b) interactiunile dintr mediul natural si interventia umana", correct: false },
      { text: "c) calitatea, cantitatea si structura fortei de munca disponibile", correct: false },
      { text: "d) transferul de bunuri sau de capital", correct: false },
    ],
  },
  {
    question: "Dintre caracteristicile localizarii nu face parte: (I 164)",
    answers: [
      { text: "a) geologia", correct: false },
      { text: "b) hidrologia", correct: false },
      { text: "c) clima", correct: false },
      { text: "d) populatia", correct: true },
    ],
  },
  {
    question: "Din punctul de vedere al mediului geografic, geologia se refera la: (I 165)",
    answers: [
      { text: "a) rauri, lacuri si alte zone cu apa", correct: false },
      { text: "b) calitatea, cantitatea si structura fortei de munca disponibile", correct: false },
      { text: "c) prezenta anumitor zacaminte importante", correct: true },
      { text: "d) formele de relief ale zonei respective", correct: false },
    ],
  },
  {
    question: "Din punctul de vedere al mediului geografic, hidrologia se refera la: (I 166)",
    answers: [
      { text: "a) rauri, lacuri si alte zone cu apa", correct: true },
      { text: "b) calitatea, cantitatea si structura fortei de munca disponibile", correct: false },
      { text: "c) prezenta anumitor zacaminte importante", correct: false },
      { text: "d) formele de relief ale zonei respective", correct: false },
    ],
  },
  {
    question: "Calitatea fortei de munca se refera la: (I 167)",
    answers: [
      { text: "a) atitudinea, educatia si indemanarea persoanelor disponibile", correct: true },
      { text: "b) numarul persoanelor disponibile care au deprinderile necesare pentru a satisface nevoile angajatorilor", correct: false },
      { text: "c) persoanele care merg intr-o tara straina in mod legal pentru a presta un anumit tip de munca", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Cantitatea fortei de munca se refera la: (I 168)",
    answers: [
      { text: "a) atitudinea, educatia si indemanarea persoanelor disponibile", correct: false },
      { text: "b) numarul persoanelor disponibile care au deprinderile necesare pentru a satisface nevoile angajatorilor", correct: true },
      { text: "c) persoanele care merg intr-o tara straina in mod legal pentru a presta un anumit tip de munca", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Lucratorii invitati se refera la: (I 169)",
    answers: [
      { text: "a) atitudinea, educatia si indemanarea persoanelor disponibile", correct: false },
      { text: "b) numarul persoanelor disponibile care au deprinderile necesare pentru a satisface nevoile angajatorilor", correct: false },
      { text: "c) persoanele care merg intr-o tara straina in mod legal pentru a presta un anumit tip de munca", correct: true },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Nu reprezinta una dintre cazurile migratiei fortei de munca: (I 170)",
    answers: [
      { text: "a) problemele economice din tara de origine", correct: false },
      { text: "b) problemele politice din tara de origine", correct: false },
      { text: "c) perceptia existentei unui oportunitati in tara de destinatie", correct: false },
      { text: "d) niciun raspuns corect", correct: true },
    ],
  },
  {
    question: "Dintre tendintele mediului geografic nu face parte urmatoarea afirmatie: (I 171)",
    answers: [
      { text: "a) persoanele aloca mai mult timp si bani pentru vacante", correct: false },
      { text: "b) creste rolul femeii in societate, tendinta fiind de a se obtine un echilibru al timpului petrecut in cadrul familiei precum si cel la locul de munca de catre barbati si femei in mod egal; femile cu studii superioare si cariera sunt un element obisunuit al mediului in care traim", correct: false },
      { text: "c) creste speranta de viata pe masura ce oamenii sunt preocupati de mentinerea unei vieti sanatoase (ceea ce include sport si alimentatie corespunzatoare)", correct: false },
      { text: "d) nu exista o prea mare disponibilitate pe plan international din partea populatiei de a munci si de a-si schimba domiciliul intr-o alta tara", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii cu privire la limbaj, ca si element al culturii nu este corecta? (I 172)",
    answers: [
      { text: "a) este considerata oglinda culturii", correct: false },
      { text: "b) este importanta pentru strangerea de informatii", correct: false },
      { text: "c) diferentele de limbaj nu sunt importante in cadrul incheierii contractelor", correct: true },
      { text: "d) managerii de filiale sunt primii posesori de informatii de pe piata unde-si desfasoara activitatea si pot transmite companiei-mama aceste informatii", correct: false },
    ],
  },
  {
    question: "Care este religia cu cei mai multi adepti? (I 173)",
    answers: [
      { text: "a) hinduism", correct: false },
      { text: "b) budism", correct: false },
      { text: "c) islamism", correct: false },
      { text: "d) crestinism", correct: true },
    ],
  },
  {
    question: "Care dintre afirmatiile legate de confucianism nu este adevarata? (I 174)",
    answers: [
      { text: "a) este o doctrina etica, se pune accent prin indeplinirea corecta a obligatiilor atat familiale, cat si profesionale", correct: false },
      { text: "b) se bazeaza pe cinci tipuri de relatii sociale intre membrii societatii: suveran-supus, tata-fiu, frate mai mare-frate mai mic, sot-sotie, prieten-prieten", correct: false },
      { text: "c) pe baza acestei doctrine, suveranii numeau in functiile publice doar membrii ai familiei", correct: true },
      { text: "d) reprezinta mai mult un cod de conduita, decat o religie, bazandu-se pe loialitate, apartenenta la un grup si pe respectul ierarhiei", correct: false },
    ],
  },
  {
    question: "Care curent religios reprezinta baza medicinii naturiste chineze, considerand ca fiecare om, pentru a obtine o stare de sanatate si echilibru, trebuie sa armonizeze cele doua energii vitale yn si yang? (I 175)",
    answers: [
      { text: "a) taoismul", correct: true },
      { text: "b) confucianismul", correct: false },
      { text: "c) hinduismul", correct: false },
      { text: "d) islamismul", correct: false },
    ],
  },
  {
    question: "Valorile, ca element al religiei, reprezinta: (I 176)",
    answers: [
      { text: "a) credinte comune ale indivizilor", correct: true },
      { text: "b) evaluarea unor alternative in functie de valori", correct: false },
      { text: "c) modul in care societatea isi organizeaza activitatile economice", correct: false },
      { text: "d) perceptia fiecarei culturi despre ceea ce este considerat de bun gust, precum si diferitele simboluri pentru anumite culori", correct: false },
    ],
  },
  {
    question: "Atitudinile, ca element al religiei, reprezinta: (I 177)",
    answers: [
      { text: "a) credinte comune ale indivizilor", correct: false },
      { text: "b) evaluarea unor alternative in functie de valori", correct: true },
      { text: "c) modul in care societatea isi organizeaza activitatile economice", correct: false },
      { text: "d) perceptia fiecarei culturi despre ceea ce este considerat de bun gust, precum si diferitele simboluri pentru anumite culori", correct: false },
    ],
  },
  {
    question: "Profilul culturii nationale, fiind una dintre dimensiunile culturii nationale se refera la: (I 178)",
    answers: [
      { text: "a) faptul ca in cadrul relatiilor interpersonale, regulile pe care le aplicam fata de cei din jurul nostru si comportamentul fata de acestea este specific tarii de provenienta a fiecarui individ", correct: true },
      { text: "b) teoria atribuirii, care reprezinta explicatia pe care o persoana o dezvolta in legatura cu o intamplare", correct: false },
      { text: "c) faptul ca diferentele culturale nationale pot fi cauza unor perceptii diferite ale managerilor asupra a ceea ce poate fi considerat etic sau lipsit de etica", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Importanta culturii nationale in luarea deciziilor de catre manageri, fiind una dintre dimensiunile culturii nationale se refera la: (I 179)",
    answers: [
      { text: "a) faptul ca in cadrul relatiilor interpersonale, regulile pe care le aplicam fata de cei din jurul nostru si comportamentul fata de acestea este specific tarii de provenienta a fiecarui individ", correct: false },
      { text: "b) teoria atribuirii, care reprezinta explicatia pe care o persoana o dezvolta in legatura cu o intamplare", correct: true },
      { text: "c) faptul ca diferentele culturale nationale pot fi cauza unor perceptii diferite ale managerilor asupra a ceea ce poate fi considerat etic sau lipsit de etica", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Relatia dominanta, in urma clasificarii relatiilor in functie de natura acestora, nu se refera la faptul ca: (I 180)",
    answers: [
      { text: "a) oamenii considera ca sunt superiori naturii pe care o domina prin stiinta si tehnologie", correct: false },
      { text: "b) persoanele simt ca detin controlul asupra vietii lor", correct: false },
      { text: "c) indivizii atribuie razultatul vietii lor muncii depuse si vointei; nu exista incredere in soara sau noroc, ci doar in fortele proprii", correct: false },
      { text: "d) tari in special din Asia au drept credinta faptul ca orice rezultat obtinut de catre oameni este prestabilit de Dumnezeu", correct: true },
    ],
  },
  {
    question: "Relatia de subordonare, in urma clasificarii relatiilor in functie de natura acestora, nu se refera la faputl ca: (I 181)",
    answers: [
      { text: "a) acest tip de relatie este sustinuta in S.U.A., Canada, Australia si Marea Britanie unde este sustinuta suprematia omului fata de natura", correct: true },
      { text: "b) persoanele cred ca nu au nici o putere sa-si schimbe ceea ce le este sortit, iar evenimentele din viata fiecaruia se intampla doar din voia lui Dumnezeu", correct: false },
      { text: "c) in aceasta cultura tot ceea ce se intampla se considera cauzat de soarta si noroc (forte externe)", correct: false },
      { text: "d) persoanele nu depun prea mult efort pentru ca 'soarta le este deja scrisa'", correct: false },
    ],
  },
  {
    question: "La ce se refera repatrierea profiturilor, ca aspect sensibil al unei investitii straine directe: (I 182)",
    answers: [
      { text: "a) fiecare stat urmareste dezvoltarea sa industriala prin atragerea unor investitii straine directe cat mai intensive in tehnologie", correct: false },
      { text: "b) transferul profiturilor realizate de o filiala catre tara de origine a societatii cu activitate internationala", correct: true },
      { text: "c) standardizarea versus adaptarea locala a produselor", correct: false },
      { text: "d) costuri scazute ale fortei de munca", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii nu este corecta? (I 183)",
    answers: [
      { text: "a) decizia de internationalizarea a unei firme implica o schimbare strategica fundamentala in managementul companiei", correct: false },
      { text: "b) decizia este luata la cel mai intal nivel de management, de regula chiar de catre presedintele companiei impreuna cu Consiliul de Administratie precum si actionarii sai principali", correct: false },
      { text: "c) activitatea de intrare pe pietele straine presupune o activitate semnificativa de cercetare-dezvoltare care sa genereze o inovatie continua", correct: false },
      { text: "d) decizia de internationalizare are in vedere un termen scurt", correct: true },
    ],
  },
  {
    question: "Primul pas in luarea deciziei de internationalizare il reprezinta: (I 184)",
    answers: [
      { text: "a) realizarea unor schimbari in cadrul politicii de produs a companiei", correct: false },
      { text: "b) constientizarea existentei oportunitatilor de afaceri pe piata internationala", correct: true },
      { text: "c) evaluare pozitiei pe piata fata de principalii competitori", correct: false },
      { text: "d) determinarea segmentului de consumatori carora li se adreseaza produsele companiei respective", correct: false },
    ],
  },
  {
    question: "Cele mai de succes firme de pe piata internationala sunt cele care iau decizia de internationalizare pe baza unor motivatii: (I 185)",
    answers: [
      { text: "a) proactive", correct: true },
      { text: "b) reactive", correct: false },
      { text: "c) negative", correct: false },
      { text: "d) nici un raspuns corect", correct: false },
    ],
  },
  {
    question: "Care este cea mai importanta motivatie a unei firme pentru a se implica in afacerile internationale? (I 186)",
    answers: [
      { text: "a) presiunile concurentei", correct: false },
      { text: "b) cunostinte speciale asupra unui client extern", correct: false },
      { text: "c) profiturile", correct: true },
      { text: "d) supraproductia", correct: false },
    ],
  },
  {
    question: "Ce inseamna obtinerea unor 'economii de scala'? (I 187)",
    answers: [
      { text: "a) salarii mai mici angajatilor", correct: false },
      { text: "b) marirea profiturilor prin procurarea unor materii prime mai ieftine", correct: false },
      { text: "c) diminuarea numarului de angajati", correct: false },
      { text: "d) diminuarea costurilor pe unitatea de produs prin marirea productiei", correct: true },
    ],
  },
  {
    question: "In cazul in care corelam optiunea unei firme de internationalizare a afacerilor cu ciclul de viata al produsului, carei forme de internationalizare a afacerilor ii corespunde etapa de lansare si crestere a produsului? (I 188)",
    answers: [
      { text: "a) licentiere", correct: false },
      { text: "b) societati mixte", correct: false },
      { text: "c) export", correct: true },
      { text: "d) investitia straina directa", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii legate de societatile mixte nu este corecta? (I 189)",
    answers: [
      { text: "a) reprezinta o forma de cooperare prin care doi sau mai multi partenerei din diferite tari desfasoara in comun, in cadrul unei entitati independente, cu personalitate juridica, activitati de productie, marketing si comercializare, financiare s.a.m.d. prin partajarea riscurilor si a beneficiilor afacerii", correct: false },
      { text: "b) cooperarea are un caracter organic (institutionalizat), in sensul ca partenerii detin parti dintr-o societate, care poate fi creata sau rezultata din transformarea unei societati deja existente (prin preluarea de actiunui de catre unul dintre parteneri)", correct: false },
      { text: "c) relatiile dintre parti sunt de scurta durata", correct: true },
      { text: "d) cooperarea dintre parti are caracter complex si evolutiv", correct: false },
    ],
  },
  {
    question: "Cel mai inalt grad de patrundere pe o piata straina, conform etapelor procesului de internationalizarea o reprezinta: (I 190)",
    answers: [
      { text: "a) exportul direct", correct: false },
      { text: "b) licentierea", correct: false },
      { text: "c) investitia straina directa", correct: true },
      { text: "d) exportul indirect", correct: false },
    ],
  },
  {
    question: "Strategia de marketing reprezinta: (I 191)",
    answers: [
      { text: "a) un plan pe termen lung destinat atingerii unui scop sau obiectiv", correct: true },
      { text: "b) modul in care o persoana accepta o idee noua", correct: false },
      { text: "c) un plan pe termen scurt destinat atingerii unui scop sau obiectiv", correct: false },
      { text: "d) nicio varianta corecta", correct: false },
    ],
  },
  {
    question: "Una dintre strategiile lui Ansoff (clasificate in functie de piata si produs), si anume strategia de patrundere pe piata, se identifica atunci cand: (I 192)",
    answers: [
      { text: "a) compania doreste sa intre pe o noua piata (atat geografica cat si ca produs), pe care nu o deservea pana in prezent", correct: true },
      { text: "b) compania doreste sa isi creasca vanzarile prin incercarea de a mari piata in ansamblul ei (ca, de exemplu, sa ii convinga pe consumatori sa consume mai des produsul sau)", correct: false },
      { text: "c) se adauga noi functionalitati si servicii produselor companiei", correct: false },
      { text: "d) compania lanseaza si produse pe care anterior nu le avea in oferta sa", correct: false },
    ],
  },
  {
    question: "Stratgegia de pionierat, conform clasificarii efectuate de Backhaus, in functie de dimensiunea temporala a activitatilor, se refera la urmatoarea situatie: (I 193)",
    answers: [
      { text: "a) compania este cea care lanseaza un produs inovator, la care a ajuns prin propriile eforturi de cercetare si dezvoltare", correct: true },
      { text: "b) compania urmareste un pionier care a lansat un nou produs inovator", correct: false },
      { text: "c) compania ia decizia de a intra pe o piata pe care deja se manifeste o concurenta destul de importanta datorata prezentei unui numar destul de mare de producatori", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Conform structurii realizate de Arthur Little referitoare la pozitia pe care o poate ocupa o companie in raport cu concurenta, o pozitia favorabila se refera la urmatoarea situatie: (I 194)",
    answers: [
      { text: "a) compania controleaza comportamentul altor concurenti si dispune de un numar de avantaje strategice", correct: false },
      { text: "b) compania inregistreaza performante nesatisfacatoare, dar exista o posibilitate de imbunatatire a acestora; ea trebuie sa isi schimbe situatia sau sa se retraga de pe piata", correct: false },
      { text: "c) compania dispune de o forta exploatabila prin anumite strategii si are bune posibilitati de a-si exploata pozitia", correct: true },
      { text: "d) compania nu detine rezultate satisfacatoare si nici nu dispune de posibilitati de imbunatatire", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii referitoare la strategia dominatiei prin costuri totale, propusa de Michael Porter nu este corecta? (I 195)",
    answers: [
      { text: "a) constructia unor facilitati de productie de mare capacitate care sa asigure reducerea semnificativa a costurilor datoritat atat conomiilor de scala cat si curbelor invatarii determinate de productia de volum ridicat", correct: false },
      { text: "b) evitarea clientilor care nu sunt importanti", correct: false },
      { text: "c) investitii permanente majore in cercetare si dezvoltare", correct: true },
      { text: "d) permite obtinerea unor cote de piata ridicate", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii referitoare la strategia de diferentiere, propusa de Michael Porter nu este corecta? (I 196)",
    answers: [
      { text: "a) constructia unor facilitati de productie de mare capacitate care sa asigure reducerea semnificativa a costurilor datorita atat ecnomiilor de scala cat si curbelor invatarii determinate de productia de volum ridicat", correct: true },
      { text: "b) se bazeaza pe diferentierea produsului oferit de catre companie printr-o anumita caracteristica prin care dobandeste unicitate in respectivul sector de activitate", correct: false },
      { text: "c) se bazeaza pe fidelizarea clientilor fata de marca comerciala si a unei sensibilitati mai mici a acestora la modificarile de pret", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Strategia liderului de piata, conform clasificarii strategiilor concurentiale realizata de Ph. Kotler, se refera la: (I 197)",
    answers: [
      { text: "a) mentinerea pozitiei actuale prin cresterea pietei totale (identificarea de noi utilizatori, noi utilizari si cresterea frecventei utilizarii produsului respectiv) si prin apararea pozitiei detinute pe piata (in principal prin inovare continua si diversificare)", correct: true },
      { text: "b) faptul ca, fiind o strategie ofensiva, se doreste cresterea cotei de piata in special printr-un razboi al preturilor", correct: false },
      { text: "c) faptul ca presupune o apropriere pana la similitudine cu strategia celor care detin suprematia pe piata si anume copierea tuturor elementelor mixului de marketing", correct: false },
      { text: "d) concentrarea activitatii pe segmente mici de piata sau nise de piata", correct: false },
    ],
  },
  {
    question: "Strategia de provocare, conform clasificarii strategiilor concurentiala realizata de Ph. Kotler, se refera la: (I 198)",
    answers: [
      { text: "a) mentinerea pozitiei actuale prin cresterea pietei totale (identificarea de noi utilizatori, noi utilizari si cresterea frecventei utilizarii produsului respectiv) si prin apararea pozitiei detinute pe piata (in principal prin inovare continua si diversificare)", correct: false },
      { text: "b) faptul ca, fiind o strategie ofensiva, se doreste cresterea cotei de piata in special printr-un razboi al preturilor", correct: true },
      { text: "c) faptul ca presupune o apropriere pana la similitudine cu strategia celor care detin suprematia pe piata si anume copierea tuturor elementelor mixului de marketing", correct: false },
      { text: "d) concentrarea activitatii pe segmente mici de piata sau nise de piata", correct: false },
    ],
  },
  {
    question: "Strategia urmaritorului, conform clasificarii strategiilor concurentiala realizata de Ph. Kotler, se refera la: (I 199)",
    answers: [
      { text: "a) mentinerea pozitiei actuale prin cresterea pietei totale (identificarea de noi utilizatori, noi utilizari si cresterea frecventei utilizarii produsului respectiv) si prin apararea pozitiei detinute pe piata (in principal prin inovare continua si diversificare)", correct: false },
      { text: "b) faptul ca, fiind o strategie ofensiva, se doreste cresterea cotei de piata in special printr-un razboi al preturilor", correct: false },
      { text: "c) faptul ca presupune o apropriere pana la similitudine cu strategia celor care detin suprematia pe piata si anume copierea tuturor elementelor mixului de marketing", correct: true },
      { text: "d) concentrarea activitatii pe segmente mici de piata sau nise de piata", correct: false },
    ],
  },
  {
    question: "Strategia specialistului, conform clasificarii strategiilor concurntiale realizata de Ph. Kotler, se refera la: (I 200)",
    answers: [
      { text: "a) mentinerea pozitiei actuale prin cresterea pietei totale (identificarea de noi utilizatori, noi utilizari si cresterea frecventei utilizarii produsului respectiv) si prin apararea pozitiei detinute pe piata (in principal prin inovare continua si diversificare)", correct: false },
      { text: "b) faptul ca, fiind o strategie ofensiva, se doreste cresterea cotei de piata in special printr-un razboi al preturilor", correct: false },
      { text: "c) faptul ca presupune o apropriere pana la similitudine cu strategia celor care detin suprematia pe piata si anume copierea tuturor elementelor mixului de marketing", correct: false },
      { text: "d) concentrarea activitatii pe segmente mici de piata sau nise de piata", correct: true },
    ],
  },
  {
    question: "Serviciile sunt definite ca fiind: (I 201)",
    answers: [
      { text: "a) activitati standardizate, ce trebuie realizate printr-un efort sustinut pentru a realiza performanta", correct: false },
      { text: "b) efecte utile, imateriale si intangibile, rezultate din desfasurarea unor activitati interconditionate", correct: true },
      { text: "c) simple utilitati sociale", correct: false },
      { text: "d) acivitati utile dar neproductive", correct: false },
    ],
  },
  {
    question: "In servicii, recastigarea increderii clientilor este un obiectiv specific al: (I 202)",
    answers: [
      { text: "a) activitatii de distributie", correct: false },
      { text: "b) actiitatii promotionale", correct: true },
      { text: "c) activitatii de prestatie", correct: false },
      { text: "d) activitatii de gestionare a personalului", correct: false },
    ],
  },
  {
    question: "Sunt considerate elemente componente defintorii ale conceptului de servicii: (I 203)",
    answers: [
      { text: "a) elementele supuse procesarii", correct: false },
      { text: "b) utilitatea (efectul) si succesiunea de activitati interconditionate", correct: true },
      { text: "c) componentele procesuale ale procesului de prestatie", correct: false },
      { text: "d) niciuna dintre acestea", correct: false },
    ],
  },
  {
    question: "Pe piata serviciilor, consumatorii percep: (I 204)",
    answers: [
      { text: "a) informatii mai multe si mai complexe", correct: false },
      { text: "b) informatii mai putine si mai omogene", correct: false },
      { text: "c) in mod uniform calitatea", correct: false },
      { text: "d) un risc mai mare si mai intens", correct: true },
    ],
  },
  {
    question: "In servicii, clientul apare si in calitate de: (I 205)",
    answers: [
      { text: "a) concurent", correct: false },
      { text: "b) co-prestator/participant la realizarea prestatiei", correct: true },
      { text: "c) numai consumator", correct: false },
      { text: "d) numai prestator", correct: false },
    ],
  },
  {
    question: "Segmantarea pietei este o componenta a: (I 206)",
    answers: [
      { text: "a) managementului strategic", correct: false },
      { text: "b) managementului si marketingului strategic", correct: false },
      { text: "c) marketinglui strategic", correct: true },
      { text: "d) strategiei manageriale", correct: false },
    ],
  },
  {
    question: "Misiunea firmei, orientata spre piata este o componenta a: (I 207)",
    answers: [
      { text: "a) marketingului strategic", correct: false },
      { text: "b) marketingul si managementul strategic", correct: false },
      { text: "c) managementului strategic orientat spre piata", correct: true },
      { text: "d) managementului operational", correct: false },
    ],
  },
  {
    question: "Imbunatatirea calitatii serviciilor este un obiectiv strategic major al politicii: (I 208)",
    answers: [
      { text: "a) produsului partial", correct: false },
      { text: "b) produsului global + produsului partial", correct: false },
      { text: "c) produsului global", correct: true },
      { text: "d) produsului forfetar", correct: false },
    ],
  },
  {
    question: "Marketingul intern al firmei prestatoare de servicii reprezinta: (I 209)",
    answers: [
      { text: "a) sinonimul 'mediul intern'", correct: false },
      { text: "b) o componenta definitorie a marketingului serviciilor", correct: true },
      { text: "c) un domeniu specializat al managementului firmei", correct: false },
      { text: "d) niciuna dintre acestea", correct: false },
    ],
  },
  {
    question: "Marketingul extern al firmei prestatoare de servicii reprezinta: (I 210)",
    answers: [
      { text: "a) un compartiment specializat al marketingului serviciilor", correct: false },
      { text: "b) o componenta definitorie a obiectului marketingului serviciilor", correct: true },
      { text: "c) sinonimul 'mediul intern'", correct: false },
      { text: "d) niciuna dintre acestea", correct: false },
    ],
  },
  {
    question: "Dezvoltarea si diversificarea serviciilor este o strategie de tipul: (I 211)",
    answers: [
      { text: "a) servicii existente - piete existente", correct: false },
      { text: "b) servicii existente - piete noi", correct: false },
      { text: "c) servicii noi - piete existente", correct: true },
      { text: "d) toate variantele sunt corecte", correct: false },
    ],
  },
  {
    question: "In servicii, strategiile de parteneriat sunt strategii de: (I 212)",
    answers: [
      { text: "a) produs", correct: false },
      { text: "b) promovare", correct: false },
      { text: "c) distributie", correct: true },
      { text: "d) toate variantele sunt corecte", correct: false },
    ],
  },
  {
    question: "Intermediarii pe piata serviciilor, sunt: (I 213)?",
    answers: [
      { text: "a) producator - grosist - detailist", correct: false },
      { text: "b) producator - agent - grosist", correct: false },
      { text: "c) franchisorii si agentii", correct: true },
      { text: "d) angrosistii si detailistii", correct: false },
    ],
  },
  {
    question: "In servicii, distributia include: (I 214)",
    answers: [
      { text: "a) reteaua de unitati implicate", correct: false },
      { text: "b) drumul parcurs de la oferta initiala la consumatorul final", correct: false },
      { text: "c) ambele (a si b)", correct: true },
      { text: "d) niciuna dintre acestea", correct: false },
    ],
  },
  {
    question: "In servicii, rolul politicii promotionale este: (I 215)?",
    answers: [
      { text: "a) irelevant, deoarece serviciile se promoveaza de la sine", correct: false },
      { text: "b) deosebit de important, divers si complex", correct: true },
      { text: "c) depinde de situatie", correct: false },
      { text: "d) toate variantele sunt corecte", correct: false },
    ],
  },
  {
    question: "In cadrul firmelor prestatoare de servicii, la nivelul verigilor operative se constituie, de regula: (I 216)?",
    answers: [
      { text: "a) un comportament de marketing traditional", correct: false },
      { text: "b) un comportament specializat denumit 'servicii cu clienti'", correct: true },
      { text: "c) un post de responsabil de proiect", correct: false },
      { text: "d) un post de responsabil de marketing", correct: false },
    ],
  },
  {
    question: "Atragerea si mentinerea celui mai bun personal reprezinta: (I 217)",
    answers: [
      { text: "a) o politica de piata", correct: false },
      { text: "b) un obiectiv al politicii de prestatie", correct: false },
      { text: "c) o strategie a utilizarii personalului", correct: true },
      { text: "d) o strategie a politicii de distributie", correct: false },
    ],
  },
  {
    question: "Managementul serviciilor promise presupune obligatoriu: (I 218)",
    answers: [
      { text: "a) conducerea diferentiata a verigilor operative", correct: false },
      { text: "b) educarea clientilor potentiali", correct: false },
      { text: "c) prezentarea ofertei in forma scrisa, atent elaborate si redactare", correct: true },
      { text: "d) toate acestea", correct: false },
    ],
  },
  {
    question: "Misiunea firmei, orientata spre piata este o componenta a: (I 219)",
    answers: [
      { text: "a) marketingului strategic", correct: false },
      { text: "b) marketingului si managementului strategic", correct: false },
      { text: "c) managementului strategic orientat spre piata", correct: true },
      { text: "d) managementului operational", correct: false },
    ],
  },
  {
    question: "Axul central al proceselor de marketing si management in servicii este reprezentat de: (I 220)",
    answers: [
      { text: "a) consumator, in calitate de variabila complexa", correct: false },
      { text: "b) mixul promotional", correct: false },
      { text: "c) mixul de marketing", correct: false },
      { text: "d) relatiile prestator-clienti", correct: true },
    ],
  },
  {
    question: "Spre deosebire de bunurile materiale, serviciile au anumite particularitati, cum ar fi: (I 221)",
    answers: [
      { text: "a) au aspect imaterial, are loc un transfer de proprietate consumul este precedat de productie", correct: false },
      { text: "b) au aspect imaterial, productia, vanzarea, consumul se desfasoara in locuri diferite", correct: false },
      { text: "c) clientul participa efectiv la productie, au aspect imaterial", correct: true },
      { text: "d) fabricantul produce in absenta consumatorului, se preteaza in totalitate standardizarii", correct: false },
    ],
  },
  {
    question: "Spre deosebire de servicii, bunurile materiale au anumite particularitati, cum ar fi: (I 222)",
    answers: [
      { text: "a) au aspet imaterial, nu se transfera proprietatea", correct: false },
      { text: "b) produsul poate fi transportat, consumul nu este precedat de productie", correct: false },
      { text: "c) clientul participa efectiv la productie, au aspect imaterial", correct: false },
      { text: "d) fabriacantul produce in absenta consumatorului, consumul este precedat de productie", correct: true },
    ],
  },
  {
    question: "A doua jumatate a secolului XX s-a confruntat cu o adevarata 'explozie' a serviciilor datorata mai multor cauza, cum ar fi: (I 223)",
    answers: [
      { text: "a) schimbarea gusturilor si comportamentului de cumparare ale clientilor, accentuarea procesului de globalizare a pietelor", correct: true },
      { text: "b) schimbarea caracteristicilor produselor", correct: false },
      { text: "c) accesul neingradit al consumatorilor la oferte", correct: false },
      { text: "d) largirea campului de alegere a consumatorului", correct: false },
    ],
  },
  {
    question: "Perisabilitatea este o caracteristica a serviciilor ce se refera la: (I 224)",
    answers: [
      { text: "a) aspectul imaterial", correct: false },
      { text: "b) variabilitatea serviciilor", correct: false },
      { text: "c) unicitatea serviciilor", correct: false },
      { text: "d) capacitatea acestora de a nu putea fi stocate sau inventariate", correct: true },
    ],
  },
  {
    question: "Din perspectiva principalelor caracteristici al serviciilor, au fost identificate elemente de baza ce diferentiaza bunurile materiale de servicii, cum ar fi: (I 225)",
    answers: [
      { text: "a) elementele tangibile determina, in cea mai mare masura, crearea valorii", correct: false },
      { text: "b) consumatorii nu obtin dreptul de proprietate asupra serviciilor, serviciile sunt intangibile (efemere) si nu pot fi inventariate", correct: true },
      { text: "c) clientul participa efectiv la productie, au aspect material", correct: false },
      { text: "d) distributia serviilor se face prin aceleasi canale ca si bunurile materiale", correct: false },
    ],
  },
  {
    question: "Rolul serviciilor in sustinerea productiei bunurilor materiale se exercita prin: (I 226)",
    answers: [
      { text: "a) serviciile 'coproductive si cele care conditioneaza actul productive'", correct: true },
      { text: "b) serviciile preindustriale", correct: false },
      { text: "c) serviciile coindustriale", correct: false },
      { text: "d) dezvoltarea unei industrii eficiente si competitive", correct: false },
    ],
  },
  {
    question: "Rolul serviciilor in cresterea continua a calitatii vietii se exercita prin: (I 227)",
    answers: [
      { text: "a) aspectul imaterial", correct: false },
      { text: "b) diversificarea si specializarea serviciilor pentru a satisface nevoile materiale, biologice, culturale si spirituale ale omului raportate la condiile mediului si spatiului existential individual si social", correct: true },
      { text: "c) unicitatea serviciilor", correct: false },
      { text: "d) capacitatea acestora de a nu putea fi stocate sau inventariate", correct: false },
    ],
  },
  {
    question: "Clasificarea serviciilor dupa functiile economice indeplinite, presupune: (I 228)",
    answers: [
      { text: "a) servicii productive si neproductive", correct: false },
      { text: "b) servicii sociale, personale, de productie si de distributie", correct: true },
      { text: "c) servicii non-marfa sau non comerciale", correct: false },
      { text: "d) servicii materiale si nemateriale", correct: false },
    ],
  },
  {
    question: "Clasificarea serviilor dupa forma de proprietate si modul de organizare a prestatorilor de servicii, presupune: (I 229)",
    answers: [
      { text: "a) servicii ale sectorului public, ale sectorului asociativ, ale sectorului privat", correct: true },
      { text: "b) servicii care privesc bunurile ", correct: false },
      { text: "c) servicii care privesc persoanele", correct: false },
      { text: "d) servicii cu influenta mixta", correct: false },
    ],
  },
  {
    question: "In politica de produs a firmei de servicii exista trei elemente care difera ca semnificatie de cele intalnite in cadrul bunurilor materiale: (I 230)",
    answers: [
      { text: "a) acoperirea rapida a cheltuielilor", correct: false },
      { text: "b) exclusivitatea, marca, gestionarea capactiatii de deservire", correct: true },
      { text: "c) promovarea unui serviciu nou", correct: false },
      { text: "d) patrunderea pe piata", correct: false },
    ],
  },
  {
    question: "Cele mai relevante tipuri de segmentare a pietei de servicii, in viziunea lui Philip Kotler sunt: (I 231)",
    answers: [
      { text: "a) segmentarea diferentiala", correct: false },
      { text: "b) segmentarea geostrategica", correct: false },
      { text: "c) segmentarea teritoriala", correct: false },
      { text: "d) segmentarea demografica, geodemografica, comportamentala, prin beneficii, psihologica, prin loialitate", correct: true },
    ],
  },
  {
    question: "Strategia clasica care determina alegerea pietei-tinta, presupune: (I 232)",
    answers: [
      { text: "a) atragerea de noi clienti prin producerea unor servicii cat mai atractive", correct: true },
      { text: "b) fidelizarea clientilor", correct: false },
      { text: "c) alegerea pietei-tinta", correct: false },
      { text: "d) orientarea focusata", correct: false },
    ],
  },
  {
    question: "Strategia moderna care determina alegrea pietei-tinta, presupune: (I 233)",
    answers: [
      { text: "a) atragerea de noi clienti prin producerea unor bunuri cat mai atractive", correct: false },
      { text: "b) excelenta operationala", correct: false },
      { text: "c) fidelizarea clientilor si atragerea de clienti loiali", correct: true },
      { text: "d) orientarea focusata pe operatiunui comerciale (marketingul tranzactional)", correct: false },
    ],
  },
  {
    question: "In domeniul serviciilor, calitatea are doua componente: (I 234)",
    answers: [
      { text: "a) calitate proceslui servirii si nivelul calitativ al efectului servirii-serviciului real", correct: true },
      { text: "b) calitatea locatiei", correct: false },
      { text: "c) calitatea bunurilor materiale si a oamenilor", correct: false },
      { text: "d) calitatea angajamentului si fatorii de influenta", correct: false },
    ],
  },
  {
    question: "Din perspectiva delegarii lor, serviciile publice se impart in: (I 235)",
    answers: [
      { text: "a) servicii productive si neproductive", correct: false },
      { text: "b) servicii sociale, personale, de productie si de distributie", correct: false },
      { text: "c) servicii cu caacterexclusiv administrative si servicii care pot fi delegate altor persoane", correct: true },
      { text: "d) servicii administrativ-teritoriale", correct: false },
    ],
  },
  {
    question: "Serviciile statele includ: (I 236)",
    answers: [
      { text: "a) servicii subcontractate", correct: false },
      { text: "b) servicii de aparare, ordine publica si siguranta nationala, serviciile de autorizare a constructiilor, serviciile de stare civila", correct: true },
      { text: "c) servicii teritoriale", correct: false },
      { text: "d) servicii comerciale", correct: false },
    ],
  },
  {
    question: "Servicille socio-culturale includ: (I 237)",
    answers: [
      { text: "a) servicii edilitare", correct: false },
      { text: "b) servicii publicitare", correct: false },
      { text: "c) invatamantul, sanatatea si asistenta sociala, religioase, culturale, recreative si suportive, etc.", correct: true },
      { text: "d) servicii administrative", correct: false },
    ],
  },
  {
    question: "Intangibilitatea este o caracteristica ce creeaza probleme atat vanzatorilor cat si cumparatorilor, in sensul ca: (I 238)",
    answers: [
      { text: "a) producerea si consumul nu se realizeaza simultan", correct: false },
      { text: "b) nu pot fi gustate, atinse, vazute auzite sau simtite anterior cumpararii, ca in cazul bunurilor materiale", correct: true },
      { text: "c) nu pot fi stocate", correct: false },
      { text: "d) se transfera proprietatea", correct: false },
    ],
  },
  {
    question: "Politica de produs in serviile publice reprezinta anumite particularitati: (I 239)",
    answers: [
      { text: "a) lipsa rivalitatii in consum si accesul universal", correct: true },
      { text: "b) sunt servicii publicitare si comerciale", correct: false },
      { text: "c) sunt servicii subventianate si costisitoare", correct: false },
      { text: "d) nicio varianta nu este corecta", correct: false },
    ],
  },
  {
    question: "Politica de pret a serviciilor publice trebuie sa tina seama de o serie de cerinte: (I 240)",
    answers: [
      { text: "a) sa asigurea continuitatea serviciilor", correct: false },
      { text: "b) sa asigure bunul mers al activitatii in institutiile publice", correct: false },
      { text: "c) sa asigure satisfacerea nevoilor tuturor cetatenilor tarii, fara discriminare, in conditii de echitate si egalitate", correct: true },
      { text: "d) sa mentina preturile la un nivel competitiv", correct: false },
    ],
  },
  {
    question: "In servicii rolul managementului resurselor umane este: (I 241)",
    answers: [
      { text: "a) mai important si mai complex", correct: true },
      { text: "b) depinde de situatie", correct: false },
      { text: "c) o componenta nesemnificativa a managementului general", correct: false },
      { text: "d) o componenta a prestatiei", correct: false },
    ],
  },
  {
    question: "Dezvoltarea si diversificarea serviciilor este o strategie ce se refera la: (I 242)",
    answers: [
      { text: "a) servicii actuale si piete noi", correct: false },
      { text: "b) servicii noi si piete vechi", correct: false },
      { text: "c) doar servicii fara a tine seama de piete", correct: false },
      { text: "d) servicii noi si piete actuale", correct: true },
    ],
  },
  {
    question: "Plata serviciilor prestate reprezinta o componenta a: (I 243)",
    answers: [
      { text: "a) politicii de produs", correct: false },
      { text: "b) politicii de pret", correct: false },
      { text: "c) politicii de distributie", correct: true },
      { text: "d) politicii de personal", correct: false },
    ],
  },
  {
    question: "In servicii axul central al proceselor de marketing este preprezentat de: (I 244)",
    answers: [
      { text: "a) relatia prestator-consumator", correct: true },
      { text: "b) instrumentele operative de management", correct: false },
      { text: "c) situatia conjuncturala a pietei", correct: false },
      { text: "d) mixul de marketing", correct: false },
    ],
  },
  {
    question: "Planificarea strategica reprezinta: (I 245)",
    answers: [
      { text: "a) o componenta a politicii de produs", correct: false },
      { text: "b) o etapa necesara in cadrul programului de marketing al firmei", correct: true },
      { text: "c) o componenta a politicii de distributie", correct: false },
      { text: "d) o etapa de cercetare a situatiei conjuncturale a economiei", correct: false },
    ],
  },
  {
    question: "Marketingul interactiv subliniaza caracterul specific al: (I 246)",
    answers: [
      { text: "a) tuturor resurselor angrenate in procesul de organizare", correct: false },
      { text: "b) relatiei angajat-angajator", correct: false },
      { text: "c) politicii de distributie", correct: false },
      { text: "d) relatiei producator (ofertant) - cumparator", correct: true },
    ],
  },
  {
    question: "In servicii unul dintre punctele slabe ale mixului de marketing il poate reprezenta: (I 247)",
    answers: [
      { text: "a) punerea accentului pe una dintre cele 4 componente, uitandu-se de multe ori integrarea lor intr-o politica unitara", correct: true },
      { text: "b) politica de produs", correct: false },
      { text: "c) politica de personal", correct: false },
      { text: "d) politica de distributie", correct: false },
    ],
  },
  {
    question: "Principalele tipuri de piata a serviciilor sunt: (I 248)",
    answers: [
      { text: "a) piata concurentiala", correct: false },
      { text: "b) piata omogena, grupata si eterogena", correct: true },
      { text: "c) piata de distributie", correct: false },
      { text: "d) piata serviciilor in general", correct: false },
    ],
  },
  {
    question: "In servicii cercetarea de piata trebuie sa furnizeze: (I 249)",
    answers: [
      { text: "a) toate informatiile necesare politicii de produs", correct: false },
      { text: "b) informatii diferite", correct: false },
      { text: "c) toate informatiile de care are neovie o firma/companie de servicii pentru fundamentarea deciziilor de piata", correct: true },
      { text: "d) informatii generale", correct: false },
    ],
  },
  {
    question: "Personalizarea serviciilor reprezinta: (I 250)",
    answers: [
      { text: "a) un instrument important al politicii de produs", correct: true },
      { text: "b) un instrument optional", correct: false },
      { text: "c) o componenta a politicii generale", correct: false },
      { text: "d) o etapa decizionala de conjunctura", correct: false },
    ],
  },
  {
    question: "Importanta fortelor de vanzare rezida din faptul ca acestea participa activ la atingerea principalelor obiective organizationale, cum ar fi: (I 251)",
    answers: [
      { text: "a) dezvoltarea mijloacelor de comunicatie interna si externa", correct: false },
      { text: "b) prospectarea, orientarea, comunicarea, vanzarea, serviciile, culegerea de informatii", correct: true },
      { text: "c) informarea privind acordarea de asistenta tehnica post-vanzare si mijloace de comunicare media", correct: false },
      { text: "d) forta de vanzare isi produpune atingerea unor obiective specifice", correct: false },
    ],
  },
  {
    question: "Agentii de vanzari, prin activitatea lor, au ca scop atingerea obiectivelor specifice cum ar fi: (I 252)",
    answers: [
      { text: "a) asistarea la demonstratiile practice pentru prezentarea produsului", correct: false },
      { text: "b) cunoasterea si definirea comportamentului si a obiceiurilor cumparatorilor potentiali", correct: false },
      { text: "c) realizarea unui tip de comunicare directa/personala cu cumparatorul, urmarirea produsului pana la consumatorul final si chiar in perioada post-garantie", correct: true },
      { text: "d) definirea diverselor activitati de promovare a produselor si a firmei pe care o reprezinta", correct: false },
    ],
  },
  {
    question: "In opinia lui Philip Kotler termenul de agent de vanari acopera o gama larga de functii din cadrul unei economii cum ar fi: (I 253)",
    answers: [
      { text: "a) de receptioner (receptor), adica o persoana care preia comenzile desfasurandu-si activitatea in interiorul firmei de misionar", correct: false },
      { text: "b) de misionar cu sarcini in consolidarea reputatiei unei firme, fara a prelua comenzi", correct: false },
      { text: "c) de tehnician (consultant pe probleme tehnice) si creator de cerere, adica aceea de a prezenta intr-o lumina cat mai favorabila produsele tangibile in vederea vanzarii acestora", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "Regula de baza pentru stabilirea obiectivelor specifice ale fortelor de vanzare este cunoscuta de catre practicieni sub denumirea de SMART, care inseamna (I 254)",
    answers: [
      { text: "a) specific, masurabil, de atins, realist, in timp de baza", correct: true },
      { text: "b) standardizat, managerial, autocritic, realizabil, temporal", correct: false },
      { text: "c) specializat, masurabil, realist,, in timp optim", correct: false },
      { text: "d) specific, masurabil, aprioric, realizabil, in timp optim", correct: false },
    ],
  },
  {
    question: "Pozitionarea fortei de vanzare in afara activitatii de marketing presupune: (I 255)",
    answers: [
      { text: "a) identificarea continua a unor noi categorii de potentiali cumparatori", correct: false },
      { text: "b) accentuarea rolului fortei de vanzare in comercializarea produselor, fiind considerate un canal direct de distributie", correct: false },
      { text: "c) localizarea ariei teritoriale a cumparatorilor potentiali", correct: false },
      { text: "d) un grup de persoane cu atributii, in principal, de vanzari, avand doar legaturi tangentiale cu marketingul", correct: true },
    ],
  },
  {
    question: "Pozitionarea fortei de vanzare in cadrul activitatii de marketing, ca o componenta a submixului de comunicatie promotionala este motivata prin faptul ca: (I 256)",
    answers: [
      { text: "a) rolul personalului este deosebit de important", correct: false },
      { text: "b) presupune neglijarea tuturor celorlalte obiective pe care forta de vanzare le poate indeplini, pe langa vanzarea propriu-zisa", correct: false },
      { text: "c) agentii de vanzari acorda clientilor sprijin in rezolvarea unor probleme", correct: false },
      { text: "d) marketingul se ocupa in primul rand de formarea imaginii si apoi de vanzarea produselor", correct: true },
    ],
  },
  {
    question: "Forta de vanzare, alaturi de distribuitori, a fost considerata una dintre principalele componenete ale procesului de distributie, iar astazi este considerata veriga cheie a sistemului comunicational al organizatiei, deoarece: (I 257)",
    answers: [
      { text: "a) contribuie la cresterea cifrei de afaceri, isi asuma rolul de consultatnt in procesul vanzarii si participa la activitatea promotionala a firmei", correct: true },
      { text: "b) vand produse si servicii pe piata organizationala", correct: false },
      { text: "c) si-au deplasat treptat centrul de greutate de la orientarea spre produs la cea de vanzari", correct: false },
      { text: "d) acopera o mare varietate de atributii", correct: false },
    ],
  },
  {
    question: "Distributia pe plan intern a produselor prin intermediul grosistilor si a mai multor intermediari poate avea urmatoarea forma de organizare: (I 258)",
    answers: [
      { text: "a) Producator - Grosist - Detailist - Consumator", correct: false },
      { text: "b) Producator - Agent - Grosist - Detailist - Consumator", correct: false },
      { text: "c) Producator - Consumator - Grosist - Agent - Detailist", correct: false },
      { text: "d) variantele a si b sunt cele corecte", correct: true },
    ],
  },
  {
    question: "Unul dintre obiectivele specifice de cercetare ale fortei de vanzare, din perspectiva rolului de reprezentare a organizatiei, este: (I 259)",
    answers: [
      { text: "a) desfasurarea activitatii de promovare privind imaginea de marca si de produs", correct: false },
      { text: "b) educarea consumatorului", correct: false },
      { text: "c) culegerea, prelucrarea si stocarea informatiilor despre clienti si despre concurenta", correct: true },
      { text: "d) identificarea clientilor potentiali si adaptarea planului de comunicatie", correct: false },
    ],
  },
  {
    question: "Fortele de vanzare urmaresc realizarea unor obiective generale, cum ar fi: (I 260)",
    answers: [
      { text: "a) identificarea continua a unor noi categorii de potentiali cumparatori, cunoasterea si definirea comportamentului si a obiceiurilor cumparatorilor potentiali", correct: false },
      { text: "b) informarea cat mai completa a cumparatorilor potentiali, realizarea demonstratiilor practice pentru prezentarea produsului si informarea privind acordarea de asistenta tehnica post-vanzare", correct: false },
      { text: "c) localizarea ariei teritoriale a cumparatorilor potentiali si alte activitati de promovare a produselor si a firmei pe care o reprezinta", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "Pozitionarea fortei de vanzare in cadrul activitatii de marketing, ca o componenta a submixului de distributie este motivata prin faptul ca: (I 261)",
    answers: [
      { text: "a) rolul personalului este deosebit de important", correct: false },
      { text: "b) presupune neglijarea tuturor celorlalte obiective pe care forta de vanzare le poate indeplini, pe langa vanzarea propriu-zisa", correct: false },
      { text: "c) accentueaza rolul fortei de vanzare in comercializarea produselor, fiind considerate un canal direct de distributie catre clienti, avand totodata un rol esential in conturarea imaginii firmei", correct: true },
      { text: "d) marketingul se ocupa in primul rand de formarea imaginii si apoi de vanzarea produelor", correct: false },
    ],
  },
  {
    question: "Daca firma vinde mai multe tipuri de produse unor clienti diferiti, trebuie sa dispuna de: (I 262)",
    answers: [
      { text: "a) o forta de vanzare structurata teritorial", correct: false },
      { text: "b) o forta de vanzare structurata pe produse si pe clienti", correct: true },
      { text: "c) o forta de vanzare structurata geografic", correct: false },
      { text: "d) o forta de vanzare nestructurata", correct: false },
    ],
  },
  {
    question: "Daca firma vinde un singur gen de articole unor clienti situati in mai multe locuri, trebuie sa dispuna de: (I 263)",
    answers: [
      { text: "a) o forta de vanzare structurata superior", correct: false },
      { text: "b) o forta de vanzare structurata teritorial", correct: true },
      { text: "c) o forta de vanzare structurata aleatoriu", correct: false },
      { text: "d) un management corespunzator", correct: false },
    ],
  },
  {
    question: "Organizarea compartimentului de vanzari pe criteriul pietelor presupune: (I 264)",
    answers: [
      { text: "a) o subordonare a personalului de vanzare unui manager de vanzari pe fiecare piata, aflat in subordinea managerului general al vanzarilor", correct: false },
      { text: "b) mentinerea relatiilor cu distribuitorii si cu importatorii din alte tari", correct: false },
      { text: "c) fiecare agent de vanzari este specializat in vanzarea pe o anumita piata (catre o anumita categorie de clienti)", correct: false },
      { text: "d) variantele a si c sunt corecte", correct: true },
    ],
  },
  {
    question: "Cel mai important aspect referitor la satisfacerea clientilor este:  (I 265)",
    answers: [
      { text: "a) garantarea cresterii productivitatii muncii", correct: false },
      { text: "b) capacitatea de a concepe produsul din perspectiva beneficiarului", correct: false },
      { text: "c) livrarea numai a produselor care corespund in totalitate exigentelor consumatorilor si asigurarea unor bune relatii cu acestia", correct: true },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "In functie de strategia aleasa, structurarea fortei de vanzare a firmei cuprinde: (I 266)",
    answers: [
      { text: "a) structura teritoriala, pe produse, pe clienti si complexa", correct: true },
      { text: "b) structura geografica, pe reteaua de vanzare si pe tipuri de activitati", correct: false },
      { text: "c) structura geografica, pe produse si pe canale de distributie", correct: false },
      { text: "d) structura de produs, pe client si pe tipuri de activitati", correct: false },
    ],
  },
  {
    question: "Organizarea pe produs a fortei de vanzare prezinta o serie de avantaje, deosebit de importante pentru firma, cum ar fi: (I 267)",
    answers: [
      { text: "a) o buna cunoastere a nevoilor specifice", correct: false },
      { text: "b) dependenta vanzatorului fata de o singura gama de produse", correct: false },
      { text: "c) mai buna cunoastere a produselor", correct: false },
      { text: "d) sfaturi mai bune pentru clienti furnizate de vanzator", correct: true },
    ],
  },
  {
    question: "Unul dintre avantajele structurarii fortei de vanzare pe clienti sau piete este: (I 268)",
    answers: [
      { text: "a) mai buna cunoastere a procesului de decizie al clientului", correct: true },
      { text: "b) o responsabilizare mai mare a vanzatorilor", correct: false },
      { text: "c) avantajul clientilor", correct: false },
      { text: "d) implica dificultati de recrutare a viitorilor angajati sau colaboratori", correct: false },
    ],
  },
  {
    question: "Functiile specifice in activitatea de vanzari sunt urmatoarele: (I 269)",
    answers: [
      { text: "a) director de zona geografica", correct: false },
      { text: "b) sef serviciu administrativ", correct: false },
      { text: "c) delegat comercial, inginer comercial, tehnician comercial, promotor de vanzari", correct: true },
      { text: "d) manager/director general", correct: false },
    ],
  },
  {
    question: "Pe langa forta de vanzare externa, in mod frecvent, firmele utilizeaza si personal de vanzare cu activitate interna, ca de exemplu: (I 270)",
    answers: [
      { text: "a) personalul specializat care acorda asistenta tehnica, furnizeaza telefonic informatiile necesare celor cu activitate externa, oferind raspunsurile de specialitate la intrebarile clientilor", correct: true },
      { text: "b) reprezentanti comerciali", correct: false },
      { text: "c) inspectorii de vanzari", correct: false },
      { text: "d) negociatorii sau inginerii de afaceri", correct: false },
    ],
  },
  {
    question: "Organizarea liniara orizontala a fortelor de vanzare presupune: (I 271)",
    answers: [
      { text: "a) o subordonare a personalului de vanzare unui manager general al vanzarilor, aflat, la randul sau, in subordinea sefului compartimentului de marketing", correct: true },
      { text: "b) o specializare a personalului de vanzare pe anumite aspecte si etape ale procesului de vanzare", correct: false },
      { text: "c) o subordonare a personalului de vanzare unui manager districtual, aflat in subordinea unui manager regional, aflat, la randul sau, in subordinea managerului general al vanzarilor", correct: false },
      { text: "d) fiecarui agent de vanzari ii este repartizat un teritoriu propriu", correct: false },
    ],
  },
  {
    question: "Fortele de vanzare, in calitate de canal de comunicatie, confera o serie de avantaje cum ar fi: (I 272)",
    answers: [
      { text: "a) au posibilitatea de a urmari procesul de comunicare pana la vanzarea finala", correct: false },
      { text: "b) permit adaptarea mai rapida la cerintele, nevoile si exigentele consumatorului", correct: false },
      { text: "c) comunicarea directa/personala si nu una impersonala/in masa", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "Prognozarea activitatii fortei de vanzare externe pe criteriul geografic presupune: (I 273)",
    answers: [
      { text: "a) vanzator specializat pe o clientela precisa si o cunoastere excelenta a acesteia", correct: false },
      { text: "b) un vanzator viziteaza, in cadrul sectorului sau, toti clientii si toti prospectii pentru toate produsele", correct: true },
      { text: "c) vanzator specializat pe o singura gama de produse (cunostinte tehnice aprofundate)", correct: false },
      { text: "d) mai multi vanzatori pentru acelasi sector", correct: false },
    ],
  },
  {
    question: "Prognozarea activitatii fortei de vanzare externe pe criteriul produselor presupune: (I 274)",
    answers: [
      { text: "a) un vanzator viziteaza, in cadrul sectorului sau, toti clientii si toti prospectii pentru toate produsele", correct: false },
      { text: "b) mai multi vanzatori pentru acelasi client", correct: false },
      { text: "c) un vanzator viziteaza, in cadrul sectorului sau, toti clientii si toti prospectii pentru o singura gama de produse", correct: true },
      { text: "d) mai multi vanzatori pentru acelasi sector", correct: false },
    ],
  },
  {
    question: "Progonozarea activitatii fortei de vanzare externe pe criteriul clientilor presupune: (I 275)",
    answers: [
      { text: "a) vanzator specializat pe o clientela precisa si o cunoastere excelenta a acesteia", correct: true },
      { text: "b) vanzator specializat pe o singura gama de produse (cunostinte tehnice aprofundate)", correct: false },
      { text: "c) piata de distributie", correct: false },
      { text: "d) fiecare vanzator este responsabil de sectorul sau", correct: false },
    ],
  },
  {
    question: "Telemarketerii sunt: (I 276)",
    answers: [
      { text: "a) angajati care isi desfasoara activitatea la sediul firmei si care, prin intermediul telefonului si al internetului intretin relatiile cu clienti existenti, gasesc permanent modalitati de atragere a unor noi clienti si ii preselecteaza pentru contactul direct cu agentii externi", correct: true },
      { text: "b) personalul specializat care acorda asistenta tehnica", correct: false },
      { text: "c) angajatii din administratie", correct: false },
      { text: "d) agenti de vanzari", correct: false },
    ],
  },
  {
    question: "Informatiile obtinute de agentii de vanzari cu privire la descrierea posturilor sunt sintetizate in: (I 277)",
    answers: [
      { text: "a) anuntul de angajare", correct: false },
      { text: "b) fisa de evaluare", correct: false },
      { text: "c) graficele de lucru", correct: false },
      { text: "d) fisa postului", correct: true },,
    ],
  },
  {
    question: "Avantajele recrutarii agentilor de vanzari din surese interne sunt: (I 278)",
    answers: [
      { text: "a) stabilitatea si loialitatea fata de firma cresc", correct: false },
      { text: "b) imbunatatirea performantelor prefesionale ale angajatilor, datorita faptului ca percep cu mai multa incredere eventualele oportunitati de promovare", correct: false },
      { text: "c) selectie rapida si eficienta cu costuri si riscuri reduse", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "Avantajele recrutarii agentilor de vanzari din surse externe sunt: (I 279)",
    answers: [
      { text: "a) riscul aparitiei unor nemultumiri in randul propriilor angajati", correct: false },
      { text: "b) reducerea costurilor efectuate la nivelul organizatiei pentru formarea profesionala a angajatilor", correct: true },
      { text: "c) selectie rapida si eficienta cu costuri si riscuri reduse", correct: false },
      { text: "d) stabilitatea si loialitatea fata de firma cresc", correct: false },
    ],
  },
  {
    question: "Caracteristicile solicitate la angajare sunt prevazute in: (I 280)",
    answers: [
      { text: "a) specializarea postului", correct: false },
      { text: "b) specificatia postului", correct: true },
      { text: "c) descrierea postului", correct: false },
      { text: "d) continutul postului", correct: false },
    ],
  },
  {
    question: "Cerintele fundamentale ale politicilor de recompensare, prezentate de M. Armstrong sunt: (I 281)",
    answers: [
      { text: "a) sa derive din obiectivele si strategiile organizatiei", correct: false },
      { text: "b) sa fie legate de performantele obtinute", correct: false },
      { text: "c) sa sprijine valorile organizationale", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "In functie de tipul si numarul intermediarilor, precum si de natura legaturilor dintre diversele componente, canalele de distributie pot fi caracterizate prin: (I 282)",
    answers: [
      { text: "a) lungime, latime si profunzime", correct: true },
      { text: "b) intensitatea comunicarii interne si externe", correct: false },
      { text: "c) gradul de concentrare teritoriala in vederea aproprierii distribuitorului de punctele de vanzare", correct: false },
      { text: "d) scurte sau lungi", correct: false },,
    ],
  },
  {
    question: "Pentru clasificarea consumatorilor in categorii de clienti, care dintre urmatoarele activitati nu este importanta: (I 283)",
    answers: [
      { text: "a) identificarea clientului/decidentului", correct: false },
      { text: "b) identificarea consumatorului/beneficiarului", correct: false },
      { text: "c) identificarea cerintelor de baza ale clientului", correct: false },
      { text: "d) sustinerea relatiilor cu distribuitorii", correct: true },
    ],
  },
  {
    question: "Cel mai important aspect referitor la satisfacerea clientilor este: (I 284)",
    answers: [
      { text: "a) garantarea cresterii productivitatii muncii", correct: false },
      { text: "b) cresterea profitului", correct: false },
      { text: "c) livrarea numai a produselor care corespund in totalitate exigentelor consumatorilor si atingerea unor bune relatii cu acestia", correct: true },
      { text: "d) cresterea profitului", correct: false },
    ],
  },
  {
    question: "'Notiunea de distributie' care reuneste un ansamblu de activitati, relativ eterogene, menite sa dirijeze fluxurile de produse si servicii intr-o maniera cat mai favorabila atat pentru firmele participante cat si pentru consumatorii finali, cu misiunea de a armoniza in timp si spatiu relatia dintre cerere si oferta: (I 285)",
    answers: [
      { text: "a) orientate spre costuri", correct: false },
      { text: "b) organizatorice, economice si tehnice", correct: true },
      { text: "c) orientate spre venituri", correct: false },
      { text: "d) mai putin costisitoare", correct: false },
    ],
  },
  {
    question: "La determinarea cerintelor clientilor, initiatorii/proiectantii produsului vor avea in vedere: (I 286)",
    answers: [
      { text: "a) caracteristicile care il fac un produs superior din punct de vedere", correct: false },
      { text: "b) competitive", correct: true },
      { text: "c) cerintele consumatorului", correct: false },
      { text: "d) modul in care pot fi eliminate erorile", correct: false },
    ],
  },
  {
    question: "Unul dintre obiectivele specifice de comunicare ale fortei de vanzare, din perspectiva rolului de reprezentare a consumatorilor, este: (I 287)",
    answers: [
      { text: "a) colaborarea cu toate departamentele din cadrul organizatiei pentru satisfacerea la cel mai inalt nivel al nevoilor consumatorilor", correct: true },
      { text: "b) cresterea vanzarilor si profitului", correct: false },
      { text: "c) culegerea, prelucrarea si stocarea informatiilor despre clienti si despre concurenta", correct: false },
      { text: "d) educarea consumatorului", correct: false },
    ],
  },
  {
    question: "In prezent pe piata se intalnesc mai multe variante organizatorice ale intermediarilor en gros, diferentiate in functie de productie/serviciile oferite furnizorilor si clientilor, cum ar fi: (I 288)",
    answers: [
      { text: "a) Cash and Carry, agentul/reprezentatul, firmele de comert en gros de marfuri generale si specializate", correct: true },
      { text: "b) concesionarii, remizierii, mandatarii", correct: false },
      { text: "c) firmele comerciale partial-independente", correct: false },
      { text: "d) firmele specializate", correct: false },
    ],
  },
  {
    question: "Forta de vanzare, alaturi de distribuitori, a fost considerata una dintre principalele componente ale procesului de distributie, iar astazi este considerata veriga cheie a sistemului comunicational al organizatiei deoarece: (I 289)",
    answers: [
      { text: "a) vand produse si servicii pe piata organizationala", correct: false },
      { text: "b) acopera o mare varietate de atributii", correct: false },
      { text: "c) contribuie la cresterea cifrei de afaceri, isi asuma rolul de consultant in procesul vanzarii si participa la activitatea promotionala a firmei", correct: true },
      { text: "d) nici o varianta nu este corecta", correct: false },
    ],
  },
  {
    question: "Evaluarea performantelor poate fi benefica atat organizatiei cat si indivizilor numai daca este efectuata corect, deoarece ea sta la baza tuturor deciziilor de personal privind: (I 290)",
    answers: [
      { text: "a) profitabilitatea organizatiei", correct: false },
      { text: "b) dependenta de nivelul productiei", correct: false },
      { text: "c) promovari, recompense, penalizari", correct: true },
      { text: "d) coordonarea activitatii organizatiei", correct: false },
    ],
  },
  {
    question: "Recrutarea reprezinta: (I 291)",
    answers: [
      { text: "a) un proces de evaluare a performantei organizationale", correct: false },
      { text: "b) procesul de atragere de candidati calificati pentru posturile libere din cadrul organizatiei", correct: true },
      { text: "c) procesul de selectie a celui mai bun candidat", correct: false },
      { text: "d) un proces de asigurare a necesarului de personal", correct: false },
    ],
  },
  {
    question: "Dimensiunea functionala a planificarii posturilor presupune: (I 292)",
    answers: [
      { text: "a) procesul de anticipare a necesitatilor viitoare de personal", correct: true },
      { text: "b) cresterea functionalitatii activitatii de personal din cadrul firmei", correct: false },
      { text: "c) asigurarea cresterii gradului de competitivitate al firmei", correct: false },
      { text: "d) un proces sistemic", correct: false },
    ],
  },
  {
    question: "Lipsa de preocupare pentru planificarea angajatilor ce formeaza forta de vanzare poate genera disproportii majore, cum ar fi: (I 293)",
    answers: [
      { text: "a) scaderea accentuata a producivitatii muncii", correct: false },
      { text: "b) scaderea eficientei economice", correct: false },
      { text: "c) aparitia unei insemnate scaderi a costurilor de productie", correct: false },
      { text: "d) lipsa personalului competent", correct: true },
    ],
  },
  {
    question: "Sistemul de recompense vine in completarea sistemului de salarizare, iar strategiile referitoare la acestea, trebuie sa indeplineasca o serie de cerinte, deosebit de importante, cum ar fi: (I 294)",
    answers: [
      { text: "a) sa derive din obiectivele si strategiile organizatiei", correct: false },
      { text: "b) sa sprijine valorile organizationale", correct: false },
      { text: "c) sa fie legate de performantele obtinute", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "Comisioanele progresive ca forma de stimulare individuala menita sa atraga agentii de vanzari, reprezinta: (I 295)",
    answers: [
      { text: "a) valoarea comisionului pe care il primeste agentul de vanzari care scade procentual in raport cu pragul valoric prestabilit al vanzarilor", correct: false },
      { text: "b) cea mai simpla si utilizata metoda de recompensare a agentilor de valoare procentuala fixa, prestabilita, indiferent de volumul si valoarea produselor vandute", correct: false },
      { text: "c) valoarea comisionului pe care il primeste agentul de vanzari care creste procentual in raport cu pragul valoric prestabilit", correct: true },
      { text: "d) o suma fixa plus comisionul", correct: false },
    ],
  },
  {
    question: "Comisioanele regresive ca forma de stimulare individuala menita sa atraga agentii de vanzari, reprezinta: (I 296)",
    answers: [
      { text: "a) valoarea comisionului pe care il primeste agentul de vanzari care scade procentual in raport cu pragul valoric prestabilit al vanzarilor", correct: true },
      { text: "b) o suma fixa plus comisionul care creste procentual in raport cu pragul valoric prestabilit al vanzarilor", correct: false },
      { text: "c) o suma fixa plus comisionul", correct: false },
      { text: "d) o suma de bani care se acorda conform politicii interne privind acordarea recompenselor", correct: false },
    ],
  },
  {
    question: "Salariul fix are avantajul ca ii confera agentului comercial o minima siguranta, insa, acesta se utilieaza numai in anumite situatii: (I 297)",
    answers: [
      { text: "a) pentru a-i incuraja pe agentii comerciali sa se instruiasca sau sa indeplineasca alte sarcini decat vanzarea propriu-zisa", correct: false },
      { text: "b) cand vanzarea se realizeaza de catre agenti comerciali ultraspecializati, care conditioneaza incadrarea in firma de acordarea unui salariu fix", correct: false },
      { text: "c) pentru controlul activitatii vanzatorilor", correct: false },
      { text: "d) varianta c nu este cea corecta", correct: true },
    ],
  },
  {
    question: "Strategia manageriala a firmei referitoare la gestiunea/administrarea fortei de vanzare are in vedere o serie de cerinte, cum ar fi: (I 298)",
    answers: [
      { text: "a) stabilirea principalelor obiective ce trebuie atinse intr-o perioada determinata de timp si intr-o maniera precis definita, ca de exemplu volumul de vanzari, cota de piata, profitul obtinut, etc.", correct: false },
      { text: "b) determinarea dimensiunii optime a fortei de vanzari, identificarea si adoptarea unor criterii multiple si eficiente de recrutare a agentilor de vanzari", correct: false },
      { text: "c) pregatirea agentilor de vanzari pe baza unor programe adaptate cerintelor pietei, diferentiate pe categorii de personal - angajati cu experienta, noi angajati, etc.", correct: false },
      { text: "d) toate variantele sunt corecte", correct: true },
    ],
  },
  {
    question: "In firmele care vand produse si servicii pe piata organizationala, angajatii de vanzari vin in contact direct cu clientii, iar in altele, forta de vanzare are un rol catalizator, de culise la fel de important, deoarece: (I 299)",
    answers: [
      { text: "a) angajatii de vanzari au sarcini in consolidarea reputatiei unei firme, fara a prelua comenzi", correct: false },
      { text: "b) forta de vanzare este considerata una dintre principalele componente ale procesului de administrare", correct: false },
      { text: "c) lucreaza cu angrosistii si cu detailistii, inlesnind cooperarea dintre acestia, ajutandu-i sa fie cat mai eficienti", correct: true },
      { text: "d) acopera o mare varietate de atributii", correct: false },
    ],
  },
  {
    question: "Obiectivele specifice de cercetare ale fortei de vanzare, din perspectiva rolului de reprezentare a organizatiei sunt: (I 300)",
    answers: [
      { text: "a) culegerea, prelucrarea si stocarea informatiilor despre clienti si despre concurenta", correct: true },
      { text: "b) tinerea evidentei vanzarilor", correct: false },
      { text: "c) desfasurarea activitatii de promovare privind imaginea de marca si de produs", correct: false },
      { text: "d) educarea consumatorului", correct: false },
    ],
  },
  {
    question: "Conform Institutului de Logistica din Marea Britanie, logistica reprezinta: (I 301)",
    answers: [
      { text: "a) totalitatea operatiunilor de pastrare a marfurilor intr-un depozit", correct: false },
      { text: "b) totalitatea valorilor materiale si spirituale create de omenire si a institutiilor necesare pentru comunicarea acestor valori", correct: false },
      { text: "c) pozitionarea unei resurse la timpul potrivit, in locul potrivit, la un pret corect si avand o calitate corespunzatoare", correct: true },
      { text: "d) schimbul de valori dintre utilizator si o organizatie", correct: false },
    ],
  },
  {
    question: "Aparitia logisticii ca stiinta, este asociata cu urmatorul domeniu: (I 302)",
    answers: [
      { text: "a) alimentar", correct: false },
      { text: "b) militar", correct: true },
      { text: "c) servicii de internet", correct: false },
      { text: "d) educational", correct: false },
    ],
  },
  {
    question: "Printre avantajele managementului lantului de aprovizionare nu se numara: (I 303)",
    answers: [
      { text: "a) cresterea preciziei estimarii cererii de resurse materiale cu 25 pana la 80%", correct: false },
      { text: "b) reducerea costurilor cu 25 pana la 60%", correct: false },
      { text: "c) imbunatatirea respectarii termenelor de livrare cu 16 pana la 28%", correct: false },
      { text: "d) scaderea productivitatii cu 10 pana la 16%", correct: true },
    ],
  },
  {
    question: "Printre dezanvantajele managementului lantului de aprovizionare nu se numara: (I 304)",
    answers: [
      { text: "a) costul ridicat al implementarii sistemului", correct: false },
      { text: "b) la costurile ridicate asociate schimbarii unui partener pe lantul de aprovizionare", correct: false },
      { text: "c) barierele ridicate la intrarea in lantul de aprovizionare pentru noi furnizori", correct: false },
      { text: "d) posibilitatea efectuarii unor activitati de cercetare-dezvoltare", correct: true },
    ],
  },
  {
    question: "Un sistem de management al lantului de aprovizionare tip integrat se refera la faptl ca: (I 305)",
    answers: [
      { text: "a) fiecare agent este in masura sa solicite informatii de la un alt agent, astfel incat fiecare agent este atat client, cat si ofertant de servicii", correct: false },
      { text: "b) functiile managementului lantului de aprovizionare sunt repartizate la un numar de agenti independenti", correct: false },
      { text: "c) fiecare agent poate colabora si valorifica competentele de specialitate ale altor agenti", correct: true },
      { text: "d) fiecare agent trebuie sa fie in masura sa se adapteze unui numar mai mare de domenii", correct: false },
    ],
  },
  {
    question: "Un sistem de management al lantului de aprovizionare tip respondent se refera la faptul ca: (I 306)",
    answers: [
      { text: "a) fiecare agent este in masura sa solicite informatii de la un alt agent, astfel incat fiecare agent este atat client, cat si ofertant de servicii", correct: true },
      { text: "b) unctiile managementului lantului de aprovizionare sunt repartizate la un numar de agenti independenti", correct: false },
      { text: "c) fiecare agent poate coopera cu alti agenti pentru a identifica o solutie la o anumita problema", correct: false },
      { text: "d) fiecare agent trebuie sa fie in masura sa se adapteze unui numar mai mare de domenii", correct: false },
    ],
  },
  {
    question: "Un sistem de management al lantului de aprovizionare tip general se refera la faptul ca: (I 307)",
    answers: [
      { text: "a) fiecare agent este in masura sa solicite informatii de la un alt agent, astfel incat fiecare agent este atat client, cat si ofertant de servicii", correct: false },
      { text: "b) functiile managementului lantului de aprovizionare sunt repartizate la un numar de agenti independenti", correct: false },
      { text: "c) fiecare agent poate coopera cu alti agenti pentru a identifica o solutie la o anumita problema", correct: false },
      { text: "d) fiecare agent trebuie sa fie in masura sa se adapteze unui numar mai mare de domenii", correct: true },
    ],
  },
  {
    question: "Care dintre etapele, in dezvoltarea logisticii, se caracterizeaza prin faptul ca sistematizarea si planificarea activitatilor de distributie si vanzare era aproape inexistenta, in majoritatea cazurilor aceste operatiuni fiind facute in mod neplanificat, de catre producatori: (I 308)",
    answers: [
      { text: "a) 1970-1980", correct: false },
      { text: "b) 2010-prezent", correct: false },
      { text: "c) 1990-2000", correct: false },
      { text: "d) 1950-1960", correct: true },
    ],
  },
  {
    question: "Conform etapelor importante pentru dezvoltarea logisticii, perioada de dupa 2010 pana in prezent, se caracterizeaza prin faptul ca: (I 309)",
    answers: [
      { text: "a) elementul central il reprezinta consumatorul", correct: true },
      { text: "b) extinderea pe veriticala a companiilor producatoare", correct: false },
      { text: "c) distribuitorii sunt interesati in aceeasi masura ca si producatorul in promovarea produselor", correct: false },
      { text: "d) apare conceptul de logistica integrata", correct: false },
    ],
  },
  {
    question: "Distributia inversa are in vedere: (I 310)",
    answers: [
      { text: "a) procesul de retragere a produslui de pe piata", correct: true },
      { text: "b) transferul bunurilor de la producator la consumatorul final", correct: false },
      { text: "c) aprovizionarea companiei producatoare cu materiile prime necesare", correct: false },
      { text: "d) stocarea marfurilor in cadrul depozitelor", correct: false },
    ],
  },
  {
    question: "Logistica totala isi propune: (I 311)",
    answers: [
      { text: "a) ambalarea individuala a fiecarui produs in parte", correct: false },
      { text: "b) sa acorde importanta atat tuturor elementelor logisticii in general, cat si interconditionalitatii dntre ele", correct: true },
      { text: "c) depozitarea eficienta prin utilizarea la maxim a spatiului disponibil", correct: false },
      { text: "d) alegerea celui mai bun mijloc de transport", correct: false },
    ],
  },
  {
    question: "Dintre principalii indicatori care pot fi valorificati in vederea imbunatatirii sistemului informational asociat gestiunii integrate a resurselor materiale nu face parte urmatorul element: (I 312)",
    answers: [
      { text: "a) numarul sedintelor informative ale managementului de varf cu angajatii", correct: false },
      { text: "b) compararea cifrei de afaceri a companiei cu cea a principalilor competitori", correct: true },
      { text: "c) procentul echipamentelor asociate gestiunii resurselor materiale care sunt integrate cu ajutorul calculatoarelor in sistemul informational al unitatii economice", correct: false },
      { text: "d) numarul de decizii care pot fi luate de angajati fara a fi necesar controlul supervizorilor", correct: false },
    ],
  },
  {
    question: "Costul materialelor, fata de costul total al produselor, conform rapoartelor financiare ale intreprinderilor productive, reprezinta: (I 313)",
    answers: [
      { text: "a) 20%", correct: false },
      { text: "b) 5%", correct: false },
      { text: "c) 60%", correct: true },
      { text: "d) 90%", correct: false },
    ],
  },
  {
    question: "Rata de recuperare a investitiilor (ROI) este dependenta de: (I 314)",
    answers: [
      { text: "a) modalitatea de gestiune a resurselor materiale", correct: true },
      { text: "b) calitatea materiilor prime", correct: false },
      { text: "c) utilizarea transportului aerian", correct: false },
      { text: "d) numarul de produse returnate de catre clienti", correct: false },
    ],
  },
  {
    question: "Se estimeaza faptul ca reducerea costurilor resurselor materiale cu 10% permite o crestere a profitului cu: (I 315)",
    answers: [
      { text: "a) 5%", correct: false },
      { text: "b) 50%", correct: true },
      { text: "c) 10%", correct: false },
      { text: "d) 80%", correct: false },
    ],
  },
  {
    question: "Costul comenzilor se refera la: (I 316)",
    answers: [
      { text: "a) costul determinat in functie de pretul de achizitie si de cantitatea achizitionata", correct: false },
      { text: "b) costurile asociate lansarii si derularii comenzilor", correct: true },
      { text: "c) costul determinat de stocarea resurselor materiale", correct: false },
      { text: "d) costuri de oportunitate datorate lipsurilor de resurse materiale", correct: false },
    ],
  },
  {
    question: "Printre avantajele oferite de o gestiune integrata a resurselor materiale nu se numara: (I 317)",
    answers: [
      { text: "a) o mai buna evidenta a resurselor materiale, ca urmare a faptului ca exista o singura entitate organizatorica centrala care tine evidenta acestor resurse materiale", correct: false },
      { text: "b) exista o mare psobilitate de previziune in cadrul gestiunii productiei", correct: true },
      { text: "c) cresterea performantei, ca urmare a reducerii timpului intre comanda materialelor si primirea lor", correct: false },
      { text: "d) o mai buna adaptare la sistemele electronice de gestiune a materialelor, ca urmare a existentei unitatii centrale responsabile cu colectarea datelor referitoare la materiale", correct: false },
    ],
  },
  {
    question: "Planificarea materialelor necesare, ca si tip de sistem managerial, se refera la: (I 318)",
    answers: [
      { text: "a) calculul costurilor pentru fiecare tip de produs in parte, fara utilizarea unui cost estimativ pentru un grup de produse", correct: false },
      { text: "b) un sistem computerizat de inventariere, care ofera informatii de mare acuratete despre necesarul de materiale ale companiei, oferind suport activitatilor de depozitare si transport", correct: true },
      { text: "c) eliminarea costurilor inutile, care pot determina ca pretul final al produsului sa creasca, productia de bunuri fiind adaptata cererii consumatorilor", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Una dntre activitatile cheie ale logisticii o reprezinta: (I 319)",
    answers: [
      { text: "a) ambalarea", correct: false },
      { text: "b) depozitarea", correct: false },
      { text: "c) transportul", correct: true },
      { text: "d) achizitionarea de materii prime", correct: false },
    ],
  },
  {
    question: "Ambalarea primara se caracterizeaza prin: (I 320)",
    answers: [
      { text: "a) ceea ce vad consumatorii cand achizitioneaza produsul si are mai mult un scop estetic", correct: true },
      { text: "b) gruparea bunurilor intr-o unitate, de obicei o cutie subtire de carton sau folie transparenta", correct: false },
      { text: "c) toate activitatile necesare pentru ca produsul sa ajunga in siguranta la consumator", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Nu reprezinta una dintre componentele analizei mediului extern al companiei: (I 321)",
    answers: [
      { text: "a) auditul general al influentelor de mediu", correct: true },
      { text: "b) natura mediului de afaceri", correct: false },
      { text: "c) aparitia unui nou 'P' specific afacerilor internationale", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Dintre elementele componente ale auditului general al influentelor de mediu nu fac parte: (I 322)",
    answers: [
      { text: "a) factorii politici si legali", correct: false },
      { text: "b) factorii economici", correct: false },
      { text: "c) factorii tehnologici", correct: false },
      { text: "d) interconectarea departamentelor de logistica din cadrul companiei", correct: true },
    ],
  },
  {
    question: "Nu reprezinta unul dintre factorii economici ce participa la auditul general al influentelor de mediu, urmatorul element: (I 323)",
    answers: [
      { text: "a) nivelul investitiilor", correct: false },
      { text: "b) nivelul educational", correct: true },
      { text: "c) prognoze pentru evolutia PIB", correct: false },
      { text: "d) rata inflatiei", correct: false },
    ],
  },
  {
    question: "Dinamica mediului de afaceri se refera la: (I 324)",
    answers: [
      { text: "a) rata si frecventa schimbarilor de pe piata", correct: true },
      { text: "b) diversitatea influentelor de mediu, cantitatea de cunostinte necesare pentru a face fata acestor schimbari, presupunandu-se ca factorii de pe piata sunt interconectati", correct: false },
      { text: "c) cooperarea intre participantii la sistemul de logistica al unei companii", correct: false },
      { text: "d) gestionarea situatiilor de conflict intre producatori si distribuitori", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele tipuri de mediu de afaceri este caracterizat printr-un numar mare de elemente externe relativ diferite, care se schimba rapid si imprevizibil? (I 325)",
    answers: [
      { text: "a) mediul de afaceri cu grad redus de incertitudine", correct: false },
      { text: "b) mediul de afaceri cu grad scazut - moderat de incertitudine", correct: false },
      { text: "c) mediul de afaceri cu grad moderat - ridicat de incertitudine", correct: false },
      { text: "d) mediul de afaceri cu grad ridicat de incertitudine", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente reprezinta un nou 'P' specific mediului de afaceri? (I 326)",
    answers: [
      { text: "a) produsul", correct: false },
      { text: "b) parteneriatele", correct: true },
      { text: "c) pretul", correct: false },
      { text: "d) promovarea", correct: false },
    ],
  },
  {
    question: "Dintre preocuparile companiilor in domeniul productiei si aprovizionarii nu se numara: (I 327)",
    answers: [
      { text: "a) acces la cele mai noi tehnologii aparute pe piata", correct: false },
      { text: "b) fabrici specializate in crearea anumitor produse", correct: false },
      { text: "c) utilizarea unor furnizori locali", correct: true },
      { text: "d) aproprierea de consumatorul final", correct: false },
    ],
  },
  {
    question: "Dintre provocarile actuale ale logisticii nu face parte urmatorul element: (I 328)",
    answers: [
      { text: "a) cresterea brusca a ciclului de viata al produsului", correct: true },
      { text: "b) posibilitatea efectuarii unui inventar in orice moment", correct: false },
      { text: "c) stocuri cat mai mici, deoarece poate scadea cererea pentru produsul respectiv", correct: false },
      { text: "d) productia trebuie sa se adreseze si unor consumatori de peste granitele tarii de origine a marfurilor", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii nu reprezeinta una dintre tendintele cu privire la comportamentul consumatorilor: (I 329)",
    answers: [
      { text: "a) nu returneaza produsele in cazul unei nemultumiri cu privire la calitatea acestora", correct: true },
      { text: "b) cresc achizitiile on-line", correct: false },
      { text: "c) se trece de la sistemul clasic de livrare in cantitati mari si de la utilizarea unor vehicule de capacitate mare, la livrari de mici dimensiuni", correct: false },
      { text: "d) pentru a atrage consumatorii este important sa se asigure de catre companii un serviciu post-vanzare care sa intareasca imaginea marcii respective", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii nu este adevarata? (I 330)",
    answers: [
      { text: "a) principalul competitor reprezinta centrul preocuparilor oricarei companii", correct: true },
      { text: "b) in prezent exista tendinta de a achizitiona produse on-line, chiar si din alte tari, creandu-se o imagine de disponibilitate permanenta a produselor", correct: false },
      { text: "c) pentru orice companie este important sa se asigure un serviciu post-vanzare care sa intareasca imaginea marcii respective, chiar si in situatiile delicate in care clientii nu sunt multumiti de un anumit produs si trebuie sa existe sisteme de colectare a informatiilor referitoare la asteptarile consumatorilor cu privire la n anumit produs", correct: false },
      { text: "d) dupa anii '90, managerii de logistica au inceput sa ia in considerare transporturile navale (a caror viteze de deplasare a crescut in ultimii ani), precum si transportul aerian, care a devenit mai accesibil; in prezent un furnizor poate fi penalizat daca nu livreaza marfa in timpul promis", correct: false },
    ],
  },
  {
    question: "Utilizarea oportunitatilor oferite de mediul extern pentru depasirea propriilor puncte slabe, reprezinta o strategie: (I 331)",
    answers: [
      { text: "a) agresiva", correct: false },
      { text: "b) de diversificare", correct: false },
      { text: "c) de reorientare", correct: true },
      { text: "d) defensiva", correct: false },
    ],
  },
  {
    question: "Dintre erorile tipice in cadrul logisticii nu face parte: (I 332)",
    answers: [
      { text: "a) notificarea gresita cu privire la disponibilitatea produsului", correct: false },
      { text: "b) preluarea incorecta a cerintelor specificate in comanda initiala", correct: false },
      { text: "c) imbunatatiri aduse produsului", correct: true },
      { text: "d) livrarea la o adresa incorecta", correct: false },
    ],
  },
  {
    question: "Conturarea precesului de logistica, ca si componenta a strategiei de logistica, se refera la: (I 333)",
    answers: [
      { text: "a) faptul ca toate comenzil trebuie onorate la timp, indiferent de distantele parcurse (de exemplu exista si situatia trecerii granitelor altor state)", correct: true },
      { text: "b) operatiunile necesare transferului fizic de bunuri de la locul de productie pana la consumatorul final (inventar, numarul de depozite, mijloace de transport utilizate, s.a.)", correct: false },
      { text: "c) totalitatea informatiilor vitale desfasurarii operatiunilor logistice si anume planificarea tuturor tipurilor de resurse necesare logisticii", correct: false },
      { text: "d) optimizarea operatiunilor de transport, precum si la alegerea unor manager competenti in vederea luarii celor mai bune decizii; de asemnea, acestia trebuie sa posede nu doar cunostinte de specialitate, ci si sa fie pregatiti sa lucreze intr-un mediu multicultural", correct: false },
    ],
  },
  {
    question: "Conturarea retelelor logistice, ca si componenta a strategiei de logistica se refera la: (I 334)",
    answers: [
      { text: "a) faptul ca toate comenzil trebuie onorate la timp, indiferent de distantele parcurse (de exemplu exista si situatia trecerii granitelor altor state)", correct: false },
      { text: "b) operatiunile necesare transferului fizic de bunuri de la locul de productie pana la consumatorul final (inventar, numarul de depozite, mijloace de transport utilizate, s.a.)", correct: true },
      { text: "c) totalitatea informatiilor vitale desfasurarii operatiunilor logistice si anume planificarea tuturor tipurilor de resurse necesare logisticii", correct: false },
      { text: "d) optimizarea operatiunilor de transport, precum si la alegerea unor manager competenti in vederea luarii celor mai bune decizii; de asemnea, acestia trebuie sa posede nu doar cunostinte de specialitate, ci si sa fie pregatiti sa lucreze intr-un mediu multicultural", correct: false },
    ],
  },
  {
    question: "Conturarea sistemului informational al logisticii, ca si componenta a strategiei de logistica, se refera la: (I 335)",
    answers: [
      { text: "a) faptul ca toate comenzil trebuie onorate la timp, indiferent de distantele parcurse (de exemplu exista si situatia trecerii granitelor altor state)", correct: false },
      { text: "b) operatiunile necesare transferului fizic de bunuri de la locul de productie pana la consumatorul final (inventar, numarul de depozite, mijloace de transport utilizate, s.a.)", correct: false },
      { text: "c) totalitatea informatiilor vitale desfasurarii operatiunilor logistice si anume planificarea tuturor tipurilor de resurse necesare logisticii", correct: true },
      { text: "d) optimizarea operatiunilor de transport, precum si la alegerea unor manager competenti in vederea luarii celor mai bune decizii; de asemnea, acestia trebuie sa posede nu doar cunostinte de specialitate, ci si sa fie pregatiti sa lucreze intr-un mediu multicultural", correct: false },
    ],
  },
  {
    question: "Structura organizationala a logisticii, ca si componenta a strategiei de logistica, se refera la: (I 336)",
    answers: [
      { text: "a) faptul ca toate comenzil trebuie onorate la timp, indiferent de distantele parcurse (de exemplu exista si situatia trecerii granitelor altor state)", correct: false },
      { text: "b) operatiunile necesare transferului fizic de bunuri de la locul de productie pana la consumatorul final (inventar, numarul de depozite, mijloace de transport utilizate, s.a.)", correct: false },
      { text: "c) totalitatea informatiilor vitale desfasurarii operatiunilor logistice si anume planificarea tuturor tipurilor de resurse necesare logisticii", correct: false },
      { text: "d) optimizarea operatiunilor de transport, precum si la alegerea unor manager competenti in vederea luarii celor mai bune decizii; de asemnea, acestia trebuie sa posede nu doar cunostinte de specialitate, ci si sa fie pregatiti sa lucreze intr-un mediu multicultural", correct: true },
    ],
  },
  {
    question: "Etapa de lansare, ca si ciclu de viata al produselor are urmatorul impact asupra logisticii: (I 337)",
    answers: [
      { text: "a) presupune o cerere in crestere si de aceea este necesara crearea unor stocuri pentru a raspunde imediat eventualelor comenzi", correct: true },
      { text: "b) cererea devine predictibila, iar sistemul logistic este eficient", correct: false },
      { text: "c) apar produse concurente si incepe o competitie in special in domeniul serviciilor cu clienti, o logistica eficienta devenind vitala in aceasta etapa", correct: false },
      { text: "d) logistica trebuie sa asigure un minim de produse in conditii de eficienta a activitatii", correct: false },
    ],
  },
  {
    question: "Etapa de crestere, ca si ciclu de viata al produselor are urmatorul impact asupra logisticii: (I 338)",
    answers: [
      { text: "a) presupune o cerere in crestere si de aceea este necesara crearea unor stocuri pentru a raspunde imediat eventualelor comenzi", correct: false },
      { text: "b) cererea devine predictibila, iar sistemul logistic este eficient", correct: true },
      { text: "c) apar produse concurente si incepe o competitie in special in domeniul serviciilor cu clienti, o logistica eficienta devenind vitala in aceasta etapa", correct: false },
      { text: "d) logistica trebuie sa asigure un minim de produse in conditii de eficienta a activitatii", correct: false },
    ],
  },
  {
    question: "Etapa de maturitate, ca si ciclu de viata al produselor are urmatorul impact asupra logisticii: (I 339)",
    answers: [
      { text: "a) presupune o cerere in crestere si de aceea este necesara crearea unor stocuri pentru a raspunde imediat eventualelor comenzi", correct: false },
      { text: "b) cererea devine predictibila, iar sistemul logistic este eficient", correct: false },
      { text: "c) apar produse concurente si incepe o competitie in special in domeniul serviciilor cu clienti, o logistica eficienta devenind vitala in aceasta etapa", correct: true },
      { text: "d) logistica trebuie sa asigure un minim de produse in conditii de eficienta a activitatii", correct: false },
    ],
  },
  {
    question: "Etapa de declin, ca si ciclu de viata al produselor are urmatorul impact asupra logisticii: (I 340)?",
    answers: [
      { text: "a) presupune o cerere in crestere si de aceea este necesara crearea unor stocuri pentru a raspunde imediat eventualelor comenzi", correct: false },
      { text: "b) cererea devine predictibila, iar sistemul logistic este eficient", correct: false },
      { text: "c) apar produse concurente si incepe o competitie in special in domeniul serviciilor cu clienti, o logistica eficienta devenind vitala in aceasta etapa", correct: false },
      { text: "d) logistica trebuie sa asigure un minim de produse in conditii de eficienta a activitatii", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta una din caracteristicile produsului, ce stau la baza planificarii logisticii? (I 341)",
    answers: [
      { text: "a) dimensiunea produsului", correct: false },
      { text: "b) regimul de temperatura", correct: false },
      { text: "c) gradul de disponibilitate", correct: true },
      { text: "d) valoarea bunurilor", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii cu privire la segmentarea produselor nu este adevarata? (I 342)",
    answers: [
      { text: "a) in functie de natura produselor, poate fi necesara utilizarea mai multor tipuri de canale de distributie", correct: false },
      { text: "b) toate categoriile de produse pot fi transportate in containere", correct: true },
      { text: "c) exista trei regimuri de temperatura pentru produse alimentare: congelate (-18/-25 g C), racite (+2/+8 g C) si ambientale (temperatura de afara)", correct: false },
      { text: "d) o comanda intamplatoare necesita un lant de distributie separat, pentru ca sa fie luate toate masurile de siguranta necesare", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii cu privire la segmentarea produselor nu este adevarata? (I 343)",
    answers: [
      { text: "a) unele bunuri pot contamina alte bunuri (trebuie separate de alte bunuri si daca au un miros special)", correct: false },
      { text: "b) unele bunuri, cum ar fi bancnotele de la banca, sunt transportabile in vehicule blindate, pentru a fi protejate de eventuale tentative de furt", correct: false },
      { text: "c) bunurile cu pret scazut sunt disponibile in multe locatii, pentru a fi cat mai aproape de consumator, pe cand pentru cele cu pret ridicat se vor utiliza locatii centralizate", correct: false },
      { text: "d) in special produsele de imbracaminte pot avea masuri, culori, lungimea manecilor s.a. diferite astfel incat este usor de aproximat cate produse ar trebui livrate intr-un magazin pentru a nu crea stocuri pe o perioada mare de timp", correct: true },
    ],
  },
  {
    question: "In cazul in care cererea este imprevizibila, conform segmentarii cererii si a ofertei, se caracterizeaza prin urmatorul element: (I 344)",
    answers: [
      { text: "a) daca produce in exces, vor exista costuri generate de existenta stocurilor, iar daca oferta este sub nivelul cererii, comenzile nu vor putea fi onorate", correct: true },
      { text: "b) usurinta in inventariere, cu pierderi limitate; logistica se bazeaza pe principiul 'exact la timp'", correct: false },
      { text: "c) canalul de distributie utilizat trebuie sa fie lung, pentru a oferi flexibilitate", correct: false },
      { text: "d) oferta trebuie sa fie fixa pentru a satisface comenzi spontane", correct: false },
    ],
  },
  {
    question: "Nu reprezinta unul dintre considerentele de crestere a cererii produselor unei companii: (I 345)",
    answers: [
      { text: "a) promovarea ofertei companiei", correct: false },
      { text: "b) retragerea de pe piata a unui produs similar invechit", correct: false },
      { text: "c) stabilirea unui nivel maxim al comenzii", correct: true },
      { text: "d) posibilitatea cumpararii en-gros", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta o activitate specifica logisticii internationale? (I 346)",
    answers: [
      { text: "a) mediul de afaceri reprezinta numroase provocari, legate in special de cultura si limbaj", correct: false },
      { text: "b) deciziile cu provire la transportul international trebuie sa tina cont de distantele de parcurs, categorii de mijloace de transport, documente de transport, timpi mari de tranzit", correct: false },
      { text: "c) riscuri mici cu provire la siguranta marfii", correct: true },
      { text: "d) numarul organismelor implicate este foarte mare (banci, companii de asigurari, transportatori navali, guverne, s.a. pentru fiecare, compania avand nevoie de documentatie specifica)", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta o activitate specifica logisticii internationale? (I 347)",
    answers: [
      { text: "a) asigurarile internationale pot cuprinde capcane datorita unor exprimari ambigue si diferentelor de semnificatie da la un limbaj la altul", correct: false },
      { text: "b) stabilitate monetara", correct: true },
      { text: "c) trecerea granitelor implica de multe ori control vamal", correct: false },
      { text: "d) metode diferite de inventariere si risc de intarziere", correct: false },
    ],
  },
  {
    question: "Segmentarea pietei, in functie de consumatori, nu cuprinde urmatoarea forma: (I 348)",
    answers: [
      { text: "a) segmentare geografica", correct: false },
      { text: "b) segmentare demografica", correct: false },
      { text: "c) segmentare in functie de cifra de afaceri", correct: true },
      { text: "d) segmentare comportamentala", correct: false },
    ],
  },
  {
    question: "Segmentarea comportamentala pietei are in vedere: (I 349)",
    answers: [
      { text: "a) localizarea consumatorilor si anume: pe ce continent, in ce tara, regiune, mediul rural sau urban", correct: false },
      { text: "b) segmentarea populatiei pe diverse categorii in functie de varsta, sex, venit, religie, s.a.", correct: false },
      { text: "c) domenii de interes, activitati, stil de viata", correct: false },
      { text: "d) frecventa de cumparare a unui anumit produs de catre consumatori si de gradul de loialitate fata de marca", correct: true },
    ],
  },
  {
    question: "Nu reprezinta unul dintre elementele cheie ale segmentarii, in functie de care compania va elabora o strategie logistica: (I 350)",
    answers: [
      { text: "a) durata de viata a produselor", correct: false },
      { text: "b) varietatea produselor", correct: false },
      { text: "c) fluctuatia monetara", correct: true },
      { text: "d) perioada de timp necesara pentru livrare", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta unul dintre motivele pentru care depozitele sunt necesare pentru logistica: (I 351)",
    answers: [
      { text: "a) permite realizarea inventarierii produselor, in special in cazul unui volum mare de produse standardizate", correct: false },
      { text: "b) se poate raspunde in cel mai scurt timp posibil la orice comanda", correct: false },
      { text: "c) ajuta in activitatea de servicii cu clientii(ex: inlocuirea rapida a unor produse s.a.)", correct: false },
      { text: "d) permite anticiparea necesarului de materii prime", correct: true },
    ],
  },
  {
    question: "Dintre factorii care tin de produs, utilizati pentru estimarea costurilor implicate de logistica, nu face parte: (I 352)",
    answers: [
      { text: "a) densitatea produsului", correct: false },
      { text: "b) densitatea ambalarii", correct: false },
      { text: "c) periodicitatea mutarii produselor", correct: true },
      { text: "d) spatiul disponibil incarcarii produselor", correct: false },
    ],
  },
  {
    question: "Dintre componentele logisticii, cea mai mare contributie la cheltuielile totale o are: (I 353)",
    answers: [
      { text: "a) depozitarea", correct: false },
      { text: "b) transportul", correct: true },
      { text: "c) inventarierea", correct: false },
      { text: "d) activitatea de servicii cu clientii", correct: false },
    ],
  },
  {
    question: "Dintre caracteristicile costurilor operationale, ca forma reflectata in contabilitate a costurilor cu logistica, nu face parte: (I 354)",
    answers: [
      { text: "a) periodicitatea acestora", correct: false },
      { text: "b) costurile variaza in functie de fluctuatiile activitatii", correct: false },
      { text: "c) apar, de obicei, o singura data si sunt fixe", correct: true },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Cea mai importanta componenta a rentabilitatii activelor logistice (ROLA - Return of Logistic Assets), care asigura supravietuirea si dezvoltarea pe termen lung a companiei, o reprezinta: (I 355)",
    answers: [
      { text: "a) contributia la venituri", correct: false },
      { text: "b) costurile operationale cu logistica", correct: false },
      { text: "c) maximizarea permanenta a profitului companiei", correct: true },
      { text: "d) activele logistice", correct: false },
    ],
  },
  {
    question: "Etapa de identificare a datelor relevante pentru companie, in vederea colectarii si analizarii datelor necesare elaborarii planului de afaceri al companiei se refera la: (I 356)",
    answers: [
      { text: "a) identificarea costurilor ce tin de logistica in general (costuri de incarcare-descarcare a marfurilor s.a.)", correct: false },
      { text: "b) identificarea unor posibilitati de grupare a produselor", correct: false },
      { text: "c) obtinerea unor informatii cu privire la asteptarile consumatorilor, ce permit segmentarea acestora", correct: false },
      { text: "d) cunoasterea legislatiei in vigoare", correct: true },
    ],
  },
  {
    question: "Dintre factorii externi studiati in vederea planificarii procesului de logistica pentru elaborarea planului de afaceri al companiei, nu face parte urmatorul element: (I 357)",
    answers: [
      { text: "a) identificarea pozitiei fata de principalul competitor", correct: true },
      { text: "b) disponibilitatea mijloacelor de transport", correct: false },
      { text: "c) legislatia in vigoare", correct: false },
      { text: "d) impactul asupra mediului inconjurator", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta unul dintre factorii de productie care influenteaza logistica in satisfacerea clientilor? (I 358)",
    answers: [
      { text: "a) respectarea unui orar", correct: false },
      { text: "b) controlul productiei", correct: false },
      { text: "c) stabilirea materiilor prime necesare", correct: false },
      { text: "d) determinarea costurilor cu salariile", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta unul dintre factorii de marketing care influenteaza logistica in satisfacerea clientilor? (I 359)",
    answers: [
      { text: "a) stabilirea materiilor prime necesare", correct: true },
      { text: "b) activitatea de servicii cu clientii", correct: false },
      { text: "c) ambalarea", correct: false },
      { text: "d) procesarea comenzilor", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu reprezinta unul dintre factorii financiari care influenteaza logistica in satisfacerea clientilor? (I 360)",
    answers: [
      { text: "a) costuri de depozitare", correct: false },
      { text: "b) respectarea unui orar", correct: true },
      { text: "c) costul echipamentelor", correct: false },
      { text: "d) cheltuieli de salarizare", correct: false },
    ],
  },
  {
    question: "Dintre responsabilitatile directorului de productie nu face parte urmatorul element: (I 361)",
    answers: [
      { text: "a) procesarea comenzilor", correct: true },
      { text: "b) inventarierea productiei", correct: false },
      { text: "c) transport materii prime", correct: false },
      { text: "d) stabilirea locatiei pentru depozitare", correct: false },
    ],
  },
  {
    question: "Dintre responsibilitatile directorului de vanzari/marketing nu face parte urmatorul element: (I 362)",
    answers: [
      { text: "a) infrastructura de depozite", correct: false },
      { text: "b) sistemul de livrari", correct: false },
      { text: "c) inventarierea productiei", correct: true },
      { text: "d) supravegherea canalelor de distributie", correct: false },
    ],
  },
  {
    question: "Dintre responsabilitatile directorului financiare nu face parte urmatorul element: (I 363)",
    answers: [
      { text: "a) stabilirea locatiei pentru depozite", correct: true },
      { text: "b) activitatea de cercetare a pietei", correct: false },
      { text: "c) procesarea comenzilor", correct: false },
      { text: "d) proceduri de control", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele afirmatii legate de responsabilitatile managerului de logistica nu este adevarata? (I 364)",
    answers: [
      { text: "a) centrul activitatii de logistica il reprezinta consumatorul, iar orice decizie a managerilor trebuie sa se armonizeze cu dorintele acestuia", correct: false },
      { text: "b) o prioritate o reprezinta diminuarea la maxim a timpului de livrare", correct: false },
      { text: "c) principalele functii ale logisticii (productie, vanzare si financiara), trebuie sa fie corelate", correct: false },
      { text: "d) abordarea relatiei vanzator-cumparator, avand in vedere ca acestia au interese distincte", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu apartine integrarii logisticii in strategia de ansamblu a companiei? (I 365)",
    answers: [
      { text: "a) stabilirea logisticii necesare fiecarui produs in parte", correct: false },
      { text: "b) analiza competitorilor", correct: false },
      { text: "c) familiarizarea cu necesitatile consumatorilor", correct: false },
      { text: "d) imbunatatirea abilitatilor de comunicare ale managerului", correct: true },
    ],
  },
  {
    question: "Nu reprezinta unul dintre obiectivele urmarite de pregatirea continua a managerului de logistica: (I 366)",
    answers: [
      { text: "a) cunoasterea mediului de afaceri", correct: false },
      { text: "b) stabilirea de parteneriate", correct: false },
      { text: "c) imbunatatirea abilitatilor de comunicare", correct: false },
      { text: "d) niciun raspuns corect", correct: true },
    ],
  },
  {
    question: "Nu reprezinta una dintre atributiile cheie ale managerului cu logistica: (I 367)",
    answers: [
      { text: "a) obinerea de performanta financiara", correct: false },
      { text: "b) configureaza intregul sistem logistic in functie de necesitati", correct: false },
      { text: "c) sistem computerizat de monitorizare a activitatilor", correct: false },
      { text: "d) prezentarea problemelor, aparute in livrare, managerului general si implementarea deciziilor acestuia", correct: true },,
    ],
  },
  {
    question: "Nu reprezinta una dintre preocuparile managerului de logistica, in cazul angajarii personalului temporar: (I 368)",
    answers: [
      { text: "a) alocarea unui fond de timp suficient pentru recrutarea acestora, ce se va realiza, de obicei prin agentii specializate", correct: false },
      { text: "b) verificarea referintelor agentiei de recrutare (sa fie o agentie care prezinta incredere si competenta)", correct: false },
      { text: "c) alcatuirea si inmanarea unei liste catre agentia de recrutare cu privire la conditiile pe care trebuie sa le indeplineasca un potential candidat", correct: false },
      { text: "d) formularea unei cereri pentru agentie in vederea organizarii unor cursuri finalizate cu obtinerea unui certificat, pentru angajatii care preiau comenzile ", correct: true },
    ],
  },
  {
    question: "Nu reprezinta una din preocuparile managerului de logistica, in cazul angajarii personalului temporar: (I 369)",
    answers: [
      { text: "a) invitarea personalului agentiei de recrutare sa viziteze compania, pentru a se familiariza cu specificul activitatii de logistica si a recomanda persoana potrivita pentru postul liber", correct: false },
      { text: "b) stabilirea unui nivel de salarizare pentru postul respectiv, dupa angajarea potentialului candidat", correct: true },
      { text: "c) sa se asigure de faptul ca agentia va verifica starea de sanatate a potentialului candidat", correct: false },
      { text: "d) verificarea referintelor agentiei de recrutare (sa fie o agentie care prezinta incredere si competenta)", correct: false },
    ],
  },
  {
    question: "Plata unei sume de bani, peste un nivel minim fix al salariului se refera la urmatoarea forma a sistemului de plata a salariilor: (I 370)",
    answers: [
      { text: "a) zi de munca", correct: false },
      { text: "b) ore suplimentare", correct: false },
      { text: "c) plata in functie de rezultate", correct: true },
      { text: "d) beneficii marginale", correct: false },
    ],
  },
  {
    question: "Care dintre sistemele de management al productiei se caracterizeaza prin indeplinirea asteptarilor clientilor in cel mai scurt timp posibil, o calitate perfecta a produselor si eliminarea costurilor inutile? (I 371)",
    answers: [
      { text: "a) sistemul de impinge si trage (eng. push and pull)", correct: false },
      { text: "b) sistemul cererii dependente si a cererii independente (eng. dependent and independent demand)", correct: false },
      { text: "c) productia pe unitati (engl. cellular manufacturing)", correct: false },
      { text: "d) sistemul exact la timp (eng. just in time)", correct: true },
    ],
  },
  {
    question: "Obiectivul principal al sistemlui M.R.P. (eng. Material Requirements Planning) este acela: (I 372)",
    answers: [
      { text: "a) de livrare la timp a bunurilor", correct: false },
      { text: "b) de a mentine la un nivel cat mai redus posibil stocurile de resurse materiale din unitatea economica", correct: true },
      { text: "c) de clasificare a marfurilor in vederea facilitarii procesului de inventariere", correct: false },
      { text: "d) de a livra bunurile la locul potrivit", correct: false },
    ],
  },
  {
    question: "Care dintre sistemele generice de gestiune a stocurilor de resurse materiale pleaca de la premisa ca reaprovizionarile pentru refacerea stocului curent se fac in loturi egale din punct de vedere cantitativ si la intervale de timp egale, iar cantitatea comandata va corespunde lotului optim? (I 373)",
    answers: [
      { text: "a) gestiunea cu cerere constanta la intervale de timp egale", correct: true },
      { text: "b) gestiunea cu cerere constanta la intervale de timp inegale", correct: false },
      { text: "c) gestiunea cu cerere variabila si la intervale de timp inegale", correct: false },
      { text: "d) gestiunea cu doua depozite", correct: false },
    ],
  },
  {
    question: "Care dintre elementele luate in calcul pentru dimensionarea stocurilor de materiale sta la baza dimensionarii nivelului, ritmului si frecventei iesirii resurselor materiale din stoc? (I 374)",
    answers: [
      { text: "a) cererea de resurse materiale pentru consum", correct: true },
      { text: "b) necesarul de aprovizionat", correct: false },
      { text: "c) lotul pentru livrare", correct: false },
      { text: "d) parametrii de timp", correct: false },
    ],
  },
  {
    question: "Dintre motivele pentru care compania creeaza stocuri nu se numara: (I 375)",
    answers: [
      { text: "a) reducerea costurilor de productie", correct: false },
      { text: "b) pentru protejarea impotriva scaderii bruste a comenzilor", correct: true },
      { text: "c) costul scazut de achizitie a materiilor prime", correct: false },
      { text: "d) pentru a usura distributia", correct: false },
    ],
  },
  {
    question: "Metoda supravegherii stucurilor pe fise se refera la: (I 376)",
    answers: [
      { text: "a) stabilirea momentului comenzii prin separarea unei fractiuni din stocul respectiv printr-un bon de comanda de reasigurare", correct: false },
      { text: "b) construirea pe acelasi grafic a curbelor cumulate de la inceputul exercitiului a consumurilor si a intrarilor pentru fiecare articol", correct: false },
      { text: "c) existenta unor fise de stoc pentru fiecare articol, ce contin numele articolului si descrierea sa, nivelul de comanda, cantitatea care se comanda, intrarile si iesirile in ordine cronologica, stocul curent, cantitatea deja comandata", correct: true },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente, nu reprezinta una dintre etapele prevazute de tehnica ABC, in vederea gestiunii eficiente a stocurilor de resurse materiale: (I 377)",
    answers: [
      { text: "a) livrarea la timp a marfurilor catre consumatorul final", correct: true },
      { text: "b) determinarea consumurilor de materiale pentru perioada de la analiza care poate fi, de exemplu, jumatate de an", correct: false },
      { text: "c) ordonarea resurselor materiale in functie de valoarea acelor resurse care sunt mai des utilizate", correct: false },
      { text: "d) analiza si gruparea structurii stocurilor de resurse materiale din nomenclator pe cele trei zone sau grupe de importanta in functie de criteriile alese", correct: false },
    ],
  },
  {
    question: "Dintre principalele probleme care pot genera costuri ridicate asociate gestiunii resurselor materiale din grupa C, conform tehnicii ABC, nu face parte: (I 378)",
    answers: [
      { text: "a) complexitatea si varietatea proceselor de aprovizionare", correct: false },
      { text: "b) organizarea centralizata a proceselor de aprovizionare", correct: false },
      { text: "c) procesul de comanda-reaprovizionare se prelungeste ca urmare a birocratiei", correct: false },
      { text: "d) numarul scazut de furnizori", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele categorii de produse, conform clasificarilor managerilor pentru facilitarea inventarului, se caracterizeaza prin mentinerea unui nivel ridicat al stocurilor si necesitatea inventarierii lunare: (I 379)",
    answers: [
      { text: "a) vitale si costisitoare (eng. vital and expensive)", correct: false },
      { text: "b) dorite si necostisitoare (eng. desirable and inexpensive)", correct: true },
      { text: "c) produse de rezerva (eng. common spares)", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Nu reprezinta una dintre cauzele apritiei unor probleme, ce fac necesara inventarierea: (I 380)",
    answers: [
      { text: "a) nesiguranta cu privire la cantitatea si calitatea materiilor prime achizitonate", correct: false },
      { text: "b) previziuni neadecvate realitatii cu privire la cerere", correct: false },
      { text: "c) activitatea de publicitate", correct: true },
      { text: "d) probleme in asigurarea calitatii produselor", correct: false },
    ],
  },
  {
    question: "Stocurile reprezinta: (I 381)",
    answers: [
      { text: "a) cantitati de resurse materiale care se acumuleaza in depozitele si magaziile unitatilor economice, intr-un anumit volum si o anumita structura, pe o perioada de timp determinata cu un anumit scop", correct: true },
      { text: "b) totalitatea obiectelor obtinute in urma unui proces de productie", correct: false },
      { text: "c) transferul bunurilor de la producator la consumatorul final", correct: false },
      { text: "d) bunuri de valoare ridicata destinate comercializarii", correct: false },
    ],
  },
  {
    question: "Functia de reglare a proceselor economice in timp, in vederea optimizarii nivelului stocurilor, presupune: (I 382)",
    answers: [
      { text: "a) satisfacerea continua a cererii de resurce materiale la nivelul unitatii economice chiar si in cazul aparitiei unor disfunctionalitati generate de perturbatii la nivelul transportului resurselor materiale, posibile greve, intarzieri la livrarea unor resurse materiale, oscilatiile consumui de resurse materiale din cadrul intreprinderii, s.a.", correct: false },
      { text: "b) armonizarea fluxului de resurse materiale, format din urmatoarele faze: achizitionarea, transportul, pregatirea pentru consum, utilizarea materialelor in procesul de productie de la prelucrare pana la faza de produs finit, precum si livrarea acestuia catre consumatorul final", correct: true },
      { text: "c) luarea de masuri pentru a conctracara modificarile preturilor si a calitatii la nivelul pietei", correct: false },
      { text: "d) asigurarea unei anumite calitati pentru resursele materiale necesare proceselor de productie si chiar imbunatatirea calitatii stocurilor, de exemplu prin procedee de uscare sau conditionare", correct: false },
    ],
  },
  {
    question: "Clasificarea depozitelor ca fiind depozite de materii prime, componente sau produse finale, se realizeaza in functie de:  (I 383)",
    answers: [
      { text: "a) stadiul in lantul de distributie", correct: true },
      { text: "b) aria geografica", correct: false },
      { text: "c) caracteristicle produselor comercializate", correct: false },
      { text: "d) cine detine proprietatea", correct: false },
    ],
  },
  {
    question: "Principalul rol al depozitelor este acela de a: (I 384)",
    answers: [
      { text: "a) efectua inventarierea", correct: false },
      { text: "b) facilita promovarea", correct: false },
      { text: "c) usura calculul costurilor", correct: false },
      { text: "d) facilita transferul de bunuri de la producator la consumatorul final", correct: true },
    ],
  },
  {
    question: "Alegerea de catre management a unui tip de depozit trebuie sa tina cont de urmatoarele criterii: (I 385)",
    answers: [
      { text: "a) roul depozitelor", correct: true },
      { text: "b) capacitatea de stocare necesara", correct: false },
      { text: "c) nivele ale activitatii de servicii cu clientii", correct: false },
      { text: "d) activitati specifice, cum ar fi amanarea productiei", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente nu apartine datelor necesare managementului depozitelor cu privire la produse? (I 386)",
    answers: [
      { text: "a) posibilitati de grupare a produselor", correct: false },
      { text: "b) valoarea bunurilor", correct: false },
      { text: "c) tip de vehicule necesare", correct: true },
      { text: "d) sezonalitatea bunurilor", correct: false },
    ],
  },
  {
    question: "Implementarea unui sistem informational performant in vederea asigurarii unei gestiuni eficiente a stocurilor de resurse materiale NU se caracterizeaza prin urmatorul element: (I 387)",
    answers: [
      { text: "a) o capacitate mica de culegere, prelucrare si transmitere a informatiilor", correct: true },
      { text: "b) controlul in timp real a informatiilor, permitand identificarea si semnalarea imediata a dereglarilor din cadrul sistemului", correct: false },
      { text: "c) adaptarea la modificarile care apar si care pot influenta gestiunea resurselor materiale din unitatea economica", correct: false },
      { text: "d) monitorizarea in timp real al stocurilor de resurse materiale din unitatea economica", correct: false },
    ],
  },
  {
    question: "Sistemul exact la timp (eng. just in time) clasic NU se bazeaza pe urmatorul principiu: (I 388)",
    answers: [
      { text: "a) producerea unei cantitati care este mai mare decat cea necesara", correct: true },
      { text: "b) produsele trebuie finalizate la momentul planificat, nici mai devreme, nici mai tarziu", correct: false },
      { text: "c) un furnizor trebuie sa livreze exact cantitatea comandata si exact la momentul planificat", correct: false },
      { text: "d) niciun raspuns corect", correct: false },
    ],
  },
  {
    question: "Care dintre elementele de mai jos nu se aplica principiului Kanban de conducere a fabricatiei: (I 389)",
    answers: [
      { text: "a) o buna posibilitate de prognoza a consumului", correct: false },
      { text: "b) armonizarea programului de productie prin formarea unor loturi si prin standardizarea componentelor", correct: false },
      { text: "c) disponibilitate scazuta a echipamentelor de pregatire a fabricatiei", correct: true },
      { text: "d) motivarea resursei umane", correct: false },
    ],
  },
  {
    question: "Printre avantajele de implementare a sistemului Kanban NU se numara: (I 390)",
    answers: [
      { text: "a) incetinirea fluxului de materiale", correct: true },
      { text: "b) reducerea nivelului stocurilor", correct: false },
      { text: "c) reducerea costurilor asociate transportului intern al resurselor materiale", correct: false },
      { text: "d) cresterea standardelor de calitate asociate procesului de productie", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente NU reprezinta una dintre caracteristicile transportului in general, ce afecteaza satisfactia clientului: (I 391)",
    answers: [
      { text: "a) perioada de tranzit", correct: false },
      { text: "b) reteaua distribuitorului", correct: false },
      { text: "c) inflexibilitatea modalitatilor de transport", correct: true },
      { text: "d) riscul de pierdere sau deteriorare a produselor", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele modalitati de transport se caracterizeaza prin costuri ridicate? (I 392)",
    answers: [
      { text: "a) rutier", correct: false },
      { text: "b) feroviar", correct: false },
      { text: "c) aerian", correct: true },
      { text: "d) naval", correct: false },
    ],
  },
  {
    question: "Dintre avantajele apelarii la arbitraj fata de tribunal NU face parte urmatorul aspect: (I 393)",
    answers: [
      { text: "a) arbitrajul este subiectiv", correct: true },
      { text: "b) desi este costisitor, arbitrajul este mai rapid in solutionare decat tribunalul", correct: false },
      { text: "c) procedurile sunt simplifacate in cazul arbitrajului", correct: false },
      { text: "d) pastrarea confidentialitatii", correct: false },
    ],
  },
  {
    question: "Medierea fata de arbitraj NU reprezinta urmatoarea caracteristica: (I 394)",
    answers: [
      { text: "a) medierea dureaza mai putin decat arbitrajul", correct: true },
      { text: "b) medierea este indicata in dispute mici", correct: false },
      { text: "c) medierea cauta angajarea la un compromis, nu sa impuna o rezolvare", correct: false },
      { text: "d) medierea este mai putin formala si are ca scop reluarea legaturilor de afaceri dintre parteneri", correct: false },
    ],
  },
  {
    question: "Documentul specific transportului maritim, ce atesta cantitatea marfii expediate il reprezinta: (I 395)",
    answers: [
      { text: "a) scrisoarea de trasura internationala", correct: false },
      { text: "b) chitante postale", correct: false },
      { text: "c) conosamentul", correct: true },
      { text: "d) certificat de depozitare", correct: false },
    ],
  },
  {
    question: "Care dintre metodele de atestare a calitatii produselor se caracterizeaza prin faptul ca vanzatorul se obliga sa livreze marfa de calitate medie, conform cu standardele din tara sa? (I 396)",
    answers: [
      { text: "a) determinarea calitatii prin vizionare", correct: false },
      { text: "b) metoda 'tel quel'", correct: false },
      { text: "c) clauza marfa sanatoasa la desfacere", correct: false },
      { text: "d) pe baza de descriere", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente NU face parte din continutul minim al unei reclamatii? (I 397)",
    answers: [
      { text: "a) numarul contractului", correct: false },
      { text: "b) specificarea bunurilor care fac obiectul reclamatiei", correct: false },
      { text: "c) precizarea categoriei de mijloc de transport utilizata", correct: true },
      { text: "d) cauzele reclamatiei (livrare incompleta, calitate necorspunatoare, livrarea altui produs decat cel comandat s.a.)", correct: false },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente NU reprezinta una dintre obligatiile vanzatorului in cadrul conditiei de livrare Ex Works? (I 398)",
    answers: [
      { text: "a) livrarea bunurilor la poarta fabricii", correct: false },
      { text: "b) ambalarea bunurilor", correct: false },
      { text: "c) intocmirea facturii comerciale", correct: false },
      { text: "d) preluarea bunurilor, cheltuielilor si riscurilor pana la destinatie", correct: true },
    ],
  },
  {
    question: "Care dintre urmatoarele elemente NU reprezinta una dintre obligatiile cumparatorului in cadrul conditiei de livrare Free on Bord? (I 399)",
    answers: [
      { text: "a) incheierea contractului de transport", correct: false },
      { text: "b) efectuarea operatiunii de vamuire la export", correct: true },
      { text: "c) plata navalului", correct: false },
      { text: "d) suporta taxele si preia riscurile din momentul trecerii marfurilor peste balustrada navei in port", correct: false },
    ],
  },
  {
    question: "Dintre elementele definitorii pentru ecologia industriala nu face parte: (I 400)",
    answers: [
      { text: "a) maximizarea consumurilor de resurse materiale si energie", correct: true },
      { text: "b) valorificarea resurselor regenerabile", correct: false },
      { text: "c) minimizarea deseurilor", correct: false },
      { text: "d) reciclarea materialelor", correct: false },
    ],
  },
  {
    question: "Comportamentul de cumparare al consumatorului se refera la: (I 401)",
    answers: [
      { text: "a) comportamentul consumatorilor finali si comportamentul companiilor multinationale", correct: false },
      { text: "b) comportamentul organizatiilor neguvernamentale", correct: false },
      { text: "c) comportamentul consumatorilor finali si comportamentul consumatorilor organizationali", correct: true },
      { text: "d) comporatamentul companiilor multinationale", correct: false },
    ],
  },
  {
    question: "Cea mai importanta trasatura a perceptiei este faptul ca aceasta este: (I 402)",
    answers: [
      { text: "a) restrictiva", correct: false },
      { text: "b) selectiva", correct: true },
      { text: "c) activa", correct: false },
      { text: "d) derivata din nevoie", correct: false },
    ],
  },
  {
    question: "Wertheimer, care a studiat legaturile dintre perceptie si invatare, distinge si urmatoarea clasa de invatare: (I 403)",
    answers: [
      { text: "a) prin observarea celorlalti", correct: false },
      { text: "b) prin introspectie", correct: true },
      { text: "c) prin copiere", correct: false },
      { text: "d) prin schimbarea atitudinii", correct: false },
    ],
  },
  {
    question: "Care model de comportament al consumatorului porneste de la descrieri ale lui Adam Smith si Jeremy Bentham si de la conceptul de utilitate marginala? (I 404)",
    answers: [
      { text: "a) modelul Marshallian", correct: true },
      { text: "b) modelul Pavlovian", correct: false },
      { text: "c) modelul Veblanian", correct: false },
      { text: "d) modelul Hobbesian", correct: false },
    ],
  },
  {
    question: "Modelul Veblenian al comportamentului consumatorului se bazeaza pe: (I 405)",
    answers: [
      { text: "a) teoria utilitatii marginale", correct: false },
      { text: "b) teoria atitudinilor", correct: false },
      { text: "c) teoria consumului ostentativ", correct: true },
      { text: "d) teoria convorbirii", correct: false },
    ],
  },
  {
    question: "Modelul Freudian al comportamentului consumatorului explica acest proces prin: (I 406)",
    answers: [
      { text: "a) cercetare motivationala", correct: false },
      { text: "b) studierea atitudinilor", correct: true },
      { text: "c) elemente biologice si culturale", correct: false },
      { text: "d) studierea intentiilor de cumparare", correct: false },
    ],
  },
  {
    question: "Modelul Pavlovian al comportamentului consumatorului sugereaza studierea unor aspecte ale acestui proces, cum sunt: (I 407)",
    answers: [
      { text: "a) perceptia", correct: false },
      { text: "b) subconstientul", correct: false },
      { text: "c) influenta intre persoane", correct: false },
      { text: "d) descoperitorul reflexelor conditionate", correct: true },
    ],
  },
  {
    question: "Clasele sociale si grupurile de apartenenta sunt concepte cu care opereaza printre altele: (I 408)",
    answers: [
      { text: "a) modelul Marshallian", correct: false },
      { text: "b) modelul Freudian", correct: false },
      { text: "c) modelul Pavlovian", correct: false },
      { text: "d) modelul Hobbesian", correct: true },
    ],
  },
  {
    question: "Precizati care dintre variantele constituie obiective calitative ale studiilor comportamentale legate de politica de produs: (I 409)",
    answers: [
      { text: "a) motivele de acceptare ale unui produs nou", correct: true },
      { text: "b) frecventa consumului unui produs nou", correct: false },
      { text: "c) gradul de cunoastere de catre consumatori a marcii noului produs", correct: false },
      { text: "d) cantitatea din produsul nou cumparata de catre consumatori", correct: false },
    ],
  },
  {
    question: "Metoda clientului misterios (Mystery Shopping) este: (I 410)",
    answers: [
      { text: "a) o metoda de masurare a calitatii serviciilor percepute de clienti de catre organizatie", correct: true },
      { text: "b) o metoda de masurare a perceptiei calitatii serviciilor de catre clienti bazata pe asociatii libere intre atributele unui vanzator", correct: false },
      { text: "c) o metoda de masurare a perceptiei calitatii serviciilor de catre clienti bazata pe focus grup", correct: false },
      { text: "d) o metoda de masurare a perceptiei calitatii serviciilor de catre clienti de catre organizatie bazata pe observare si pe sondaj", correct: false },
    ],
  },
  {
    question: "In general, in cazul serviciilor, disonanta cognitiva este: (I 411)",
    answers: [
      { text: "a) mai mica", correct: false },
      { text: "b) mai mare", correct: true },
      { text: "c) inexistenta", correct: false },
      { text: "d) la fel", correct: false },
    ],
  },
  {
    question: "Serviciol dorit este determinat de: (I 412)",
    answers: [
      { text: "a) rolul clientului in prestatie", correct: false },
      { text: "b) o nevoie personala", correct: true },
      { text: "c) nivelul previzionat al serviciului", correct: false },
      { text: "d) factori situationali", correct: false },
    ],
  },
  {
    question: "Cumpararea care presupune sa se consume serviciul frecvent, consumatorul fiind dispus la un efort suplimentar pentru o alta versiune de serviciu face parte din: (I 413)",
    answers: [
      { text: "a) cumparaturi familiare", correct: true },
      { text: "b) cumparaturi de rutina", correct: false },
      { text: "c) cumparaturi de impuls", correct: false },
      { text: "d) cumparaturi critice", correct: false },
    ],
  },
  {
    question: "Cumparaturile care implica un risc mare si un efort deosebit pentru a obtine informatiile si a compara variantele reprezinta: (I 414)",
    answers: [
      { text: "a) cumparaturi familiare", correct: false },
      { text: "b) cumparaturi de rutina", correct: false },
      { text: "c) cumparaturi de impuls", correct: false },
      { text: "d) cumparaturi critice", correct: true },
    ],
  },
  {
    question: "In manifestarea comportamentului consumatorului care dintre variantele de mai jos presupune cl mai mare numar de variante care se pot manifesta concomitent fata de un anumit produs: (I 415)",
    answers: [
      { text: "a) motivele", correct: true },
      { text: "b) nevoile", correct: false },
      { text: "c) atitudini", correct: false },
      { text: "d) deciziile", correct: false },
    ],
  },
  {
    question: "Care este legatura dintre motiv si motivatie: (I 416)",
    answers: [
      { text: "a) sunt cuvinte sinonime", correct: false },
      { text: "b) motivatia este parte a unui motiv", correct: false },
      { text: "c) mai multe motive determina o motivatie", correct: false },
      { text: "d) motivatia reprezinta totalitatea motivelor si rezultanta insasi procesul motivarii", correct: true },
    ],
  },
  {
    question: "De cele mai multe ori, punctul de plecare in cercetarile de tip motivational il constituie: (I 417)",
    answers: [
      { text: "a) nevoia", correct: true },
      { text: "b) atitudinea", correct: false },
      { text: "c) invatarea", correct: false },
      { text: "d) perceptia", correct: false },
    ],
  },
  {
    question: "Perceptia subliminala are loc atunci cand: (I 418)",
    answers: [
      { text: "a) reprimam cuvinte tabu", correct: false },
      { text: "b) constientizam ceea ce am perceput", correct: false },
      { text: "c) percepem ceva fara sa fim constienti", correct: true },
      { text: "d) suntem pacaliti de situatii neclare si iluzii optice", correct: false },
    ],
  },
  {
    question: "Care este ordinea in care au loc fazele perceptiei? (I 419)",
    answers: [
      { text: "a) atentie, expunere, interpretare, memorie", correct: false },
      { text: "b) expunere, atentie, interpretare, memorie", correct: true },
      { text: "c) atentie, expunere, memorie, interpretare", correct: false },
      { text: "d) expunere, interpretare, atentie, memorie", correct: false },
    ],
  },
  {
    question: "Invatarea latenta se refera la:  (I 420)",
    answers: [
      { text: "a) invatarea care exista dar nu modifica comportamentul cat timp nu este necesar", correct: true },
      { text: "b) invatarea care poate fi observata imediat in comportament", correct: false },
      { text: "c) invatarea care este fixata intr-un timp indelungat", correct: false },
      { text: "d) invatarea care dureaza doar o perioada scurta de timp", correct: false },
    ],
  },
  {
    question: "Cand doua atitudini importante par sa se contrazica intre ele, aceasta duce la: (I 421)",
    answers: [
      { text: "a) aprehensiune", correct: false },
      { text: "b) disonanta cognitiva", correct: true },
      { text: "c) consonanta", correct: false },
      { text: "d) cognitie", correct: false },
    ],
  },
  {
    question: "Conform functiei ego-defensive a atitudinilor: (I 422)",
    answers: [
      { text: "a) oamenii recurg la atitudini care ii ajuta sa se protejeze", correct: true },
      { text: "b) oamenii adopta atitudini concordante cu valorile si cu imaginea lor despre ei insisi", correct: false },
      { text: "c) oamenii au o inclinatie spre coerenta si ordine", correct: false },
      { text: "d) oamenii au tendinta de a adopta atitudini pe care le percep ca fiind utile in atingerea unor scopuri", correct: false },
    ],
  },
  {
    question: "Studierea aspectelor legate de personalitate sprijina specialistii de marketing: (I 423)",
    answers: [
      { text: "a) in realizarea segmentarii psihografice", correct: true },
      { text: "b) in realizarea segmentarii demografice", correct: false },
      { text: "c) in eficientizarea activitatii de distributie", correct: false },
      { text: "d) in stabilirea unei legaturi intre imaginea de sine si produs", correct: false },
    ],
  },
  {
    question: "Teoria privind abordarea psihanalitica a personalitatii a fost conceputa de: (I 424)",
    answers: [
      { text: "a) Hans Eysenck", correct: false },
      { text: "b) Sigmund Freud", correct: true },
      { text: "c) Carl Rogers", correct: false },
      { text: "d) Abraham Maslow", correct: false },
    ],
  },
  {
    question: "Conform lui Freud, cele trei parti componente ale personalitatii umane sunt: (I 425)",
    answers: [
      { text: "a) constientul, preconstientul, inconstientul", correct: false },
      { text: "b) sinele, eul, supraeul", correct: true },
      { text: "c) constientul, sinele, supraeul", correct: false },
      { text: "d) sinele, constientul, inconstientul", correct: false },
    ],
  },
  {
    question: "Cu privire la trasaturile care reflecta stilul de viata se poate spune: (I 426)",
    answers: [
      { text: "a) sunt in totalitate selectate in mod constient, voluntar", correct: false },
      { text: "b) nu in totalitate, sunt selectate in mod constient, voluntar", correct: true },
      { text: "c) sunt in totalitate selectat in mod inconstient, involuntar", correct: false },
      { text: "d) sunt in totalitate selectate in mod constient, involuntar", correct: false },
    ],
  },
  {
    question: "Prin stilul de viata adoptat, oamenii: (I 427)",
    answers: [
      { text: "a) transmit celorlatli aspecte cu privire la imaginea de sine", correct: true },
      { text: "b) se pun in concordanta cu identitatea personala", correct: false },
      { text: "c) isi formeaza trasaturi ale personalitatii", correct: false },
      { text: "d) nu se transmite nimic", correct: false },
    ],
  },
  {
    question: "Segmentarea psihografica are in vedere identificarea unor segmente de consumatori pe baza trasaturilor precum: (I 428)",
    answers: [
      { text: "a) varsta, venit, etapa din cadrul ciclului de viata si alte caracteristici demografice", correct: false },
      { text: "b) valori, atitudini, interese, preferinte si o serie de caracteristici demografice", correct: true },
      { text: "c) domiciliu, vecinitati, venituri si alte caracteristici demografice", correct: false },
      { text: "d) varsta, venit, domiciliu", correct: false },
    ],
  },
  {
    question: "Geo-gruparea sau gruparea geografica are la baza ideea conform careia: (I 429)",
    answers: [
      { text: "a) locuitorii din cadrul aceleiasi categorii de locuinte tind sa aiba acelasi stil de viata", correct: true },
      { text: "b) locuitorii din cadrul aceleiasi culturi sau subculturi tind sa aiba acelasi stil de viata", correct: false },
      { text: "c) locuitorii din cadrul aceleiasi regiuni tind sa aiba acelasi stil de viata", correct: false },
      { text: "d) locuitorii din regiuni diferite tind sa aiba acelasi stil de viata", correct: false },
    ],
  },
  {
    question: "Cu privire la stabilitate, despre stilurile de viata se poate spune: (I 430)",
    answers: [
      { text: "a) se schimba lent dar continuu pe parcursul vietii", correct: true },
      { text: "b) raman constante pe tot parcursul vietii", correct: false },
      { text: "c) se schimba pe parcursul vietii mai lent decat personalitatea", correct: false },
      { text: "d) se schimba rapid pe parcursul vietii", correct: false },
    ],
  },
  {
    question: "Liderii de opinie sunt cei care: (I 431)",
    answers: [
      { text: "a) efectueaza actul cumpararii in locul membrilor grupului", correct: false },
      { text: "b) au capacitate de influenta asupra grupului mai importanta decat a celorlalti", correct: true },
      { text: "c) vin cu ideea de a cumpara un anumit produs", correct: false },
      { text: "d) nu detin o pozitie privilegiata in cadrul grupului", correct: false },
    ],
  },
  {
    question: "In cadrul vamiliei, cel care influenteaza opiniile celorlalti membri cu privire la alegerea tipului de produs este: (I 432)",
    answers: [
      { text: "a) inspiratorul", correct: false },
      { text: "b) incitatorul", correct: true },
      { text: "c) decidentul", correct: false },
      { text: "d) cumparatorul", correct: false },
    ],
  },
  {
    question: "In ceea ce priveste decizia de cumparare, se poate constata ca aceasta depinde de doi factori si anume: (I 433)",
    answers: [
      { text: "a) puterea de cumparare si vointa de a cumpara", correct: true },
      { text: "b) atitudinea consumatorului si factorii situationali surpriza", correct: false },
      { text: "c) vointa de cumparare si disonanta conginitiva", correct: false },
      { text: "d) retentia selectiva si puterea de cumparare", correct: false },
    ],
  },
  {
    question: "Fata de cumparatorii - persoane fizice, cumparatorii - persoane juridice se confrunta de obicei cu decizii de cumparare: (I 434)",
    answers: [
      { text: "a) mai complexe", correct: true },
      { text: "b) mai rapide", correct: false },
      { text: "c) mai directe", correct: false },
      { text: "d) mai lente", correct: false },
    ],
  },
  {
    question: "In cadrul procesului decizional de cumparare, cea de-a treia faza se refera la: (I 435)",
    answers: [
      { text: "a) evaluarea post-cumparare", correct: false },
      { text: "b) cautarea de informatii si identificarea alternativelor", correct: true },
      { text: "c) evaluarea mentala a variantelor considerate", correct: false },
      { text: "d) formularea intentiei de cumparare", correct: false },
    ],
  },
  {
    question: "Modalitatile ce au dobandit constanta in timp referitoare la anumite produse/servicii reprezinta: (I 436)",
    answers: [
      { text: "a) atitudinile", correct: false },
      { text: "b) intentiile de cumparare", correct: false },
      { text: "c) preferintele de cumparare", correct: false },
      { text: "d) obiceiurile de consum", correct: true },
    ],
  },
  {
    question: "Schimbarea observabila/neobservabila in comportamentul unui consumator, datorita efectelor experientei care conduce la cresteera probabilitatii ca un act comportamentul sa fie repetat reprezinta: (I 437)",
    answers: [
      { text: "a) perceptia", correct: false },
      { text: "b) motivatia", correct: false },
      { text: "c) invatarea", correct: true },
      { text: "d) personalitatea", correct: false },
    ],
  },
  {
    question: "Dispozitia favorabila/nefavorabila fata de un anumit obiect social reprezinta: (I 438)",
    answers: [
      { text: "a) dimensiunea cognitiva a atitudinii", correct: false },
      { text: "b) dimensiunea conativa a atitudinii", correct: false },
      { text: "c) dimensiunea afectiva a atitudinii", correct: true },
      { text: "d) niciuna din variantele de mai sus", correct: false },
    ],
  },
  {
    question: "Procesul prin care consumatorul receptioneaza, selecteaza, organizeaza si interpreteaza stimuli din mediul inconjurator, dandu-le o anumita semnificatie reprezinta: (I 439)",
    answers: [
      { text: "a) atitudinea", correct: false },
      { text: "b) invatarea", correct: false },
      { text: "c) motivatia", correct: false },
      { text: "d) perceptia", correct: true },
    ],
  },
  {
    question: "In conformitate cu Philip Kotler, comportamentul consumatorului: (I 440)",
    answers: [
      { text: "a) apare ca o 'iesire' respectiv ca un rezultat al unor 'intrari' receptionate si prelucrate de mintea umana", correct: true },
      { text: "b) este un comportament strict rational, prin care consumatorul urmareste maximizarea utilitatii", correct: false },
      { text: "c) se bazeaza pe un consumator pasiv, un consumator care este obiectul manipularii mediului extern", correct: false },
      { text: "d) niciuna din variantele de mai sus", correct: false },
    ],
  },
  {
    question: "Atitudinea - predispozitia invatata a consumatorului de a reactiona cu consecventa fata de un anumit obiect - este considerata o constructie multidimensionala formata din urmatoarele dimensiuni: (I 441)",
    answers: [
      { text: "a) dimensiunea cognitiva, afectiva si conativa", correct: true },
      { text: "b) dimensiunea cognitiva, afectiva si rationala", correct: false },
      { text: "c) dimensiunea afectiva, rationala si emotionala", correct: false },
      { text: "d) dimensiunea afectiva, emotionala si conativa", correct: false },
    ],
  },
  {
    question: "Dimensiunea cognitiva a atitudinii consumatorului presupune: (I 442)",
    answers: [
      { text: "a) dispozitia favorabila sau nefavorabila fata de un anumit obiect", correct: false },
      { text: "b) cunoasterea sau ignorarea obiectului in cazua", correct: true },
      { text: "c) intentia ferma de a actiona sau de a se comporta intr-un anumit mod fata de obiectul considerat", correct: false },
      { text: "d) niciuna din variantele de mai sus", correct: false },
    ],
  },
  {
    question: "Pe masura ce experienta de cumparare si consum a consumatorului creste, cautarea sa de informatii: (I 443)",
    answers: [
      { text: "a) creste", correct: false },
      { text: "b) scade", correct: true },
      { text: "c) ramane la fel", correct: false },
      { text: "d) niciuna din variantele de mai sus", correct: false },
    ],
  },
  {
    question: "A treia etapa a procesului decizional de cumparare este: (I 444)",
    answers: [
      { text: "a) identificarea alternativelor de consum", correct: true },
      { text: "b) decizia de cumparare", correct: false },
      { text: "c) identificarea problemei de consum", correct: false },
      { text: "d) cautarea de informatii", correct: false },
    ],
  },
  {
    question: "Regulile de decizie cu privire la alegerea unei marci (denumite si reguli euristice) se clasifica in: (I 445)",
    answers: [
      { text: "a) regula lexicografica si regula conjunctiva", correct: false },
      { text: "b) regula conjunctiva si regula disjunctiva", correct: false },
      { text: "c) reguli bazate pe un model compensator si reguli bazate pe un model necompensator", correct: true },
      { text: "d) regula lexicografica si reguala disjunctiva", correct: false },
    ],
  },
  {
    question: "Motivatia este definita ca: (I 446)",
    answers: [
      { text: "a) un model subiectiv al cauzalitatii obiective, cauzalitate reprodusa psihic, acumulata in timp, transformata si transferata prin invatare in spatiul interior al consumatorului", correct: true },
      { text: "b) un model obiectiv al cauzalitatii obiective, cauzalitate reprodusa psihc, acumulata in timp, transformata si transferata prin invatare in spatiul interilor al consumatorului", correct: false },
      { text: "c) un model subiectiv al cauzalitatii obiective, cauzalitate reprodusa psihc, acumulata in timp, transformata si transferata prin atitudine in spatiul interilor al consumatorului", correct: false },
      { text: "d) niciuna din variantele de mai sus", correct: false },
    ],
  },
  {
    question: "Nevoile psihogenice difera de nevoile biogenice prin faptul ca primele: (I 447)",
    answers: [
      { text: "a) sunt rezultatul unor impulsuri de natura fiziologica", correct: false },
      { text: "b) sunt rezultatul subconstientului uman", correct: false },
      { text: "c) sunt expresia unor tensiuni de natura psihologica", correct: true },
      { text: "d) niciuna din variantele de mai sus", correct: false },
    ],
  },
  {
    question: "Grupurile de apartenenta ale consumatorilor pot fi: (I 448)",
    answers: [
      { text: "a) formale si informale", correct: true },
      { text: "b) doar formale", correct: false },
      { text: "c) doar informale", correct: false },
      { text: "d) niciuna din variantele de mai sus", correct: false },
    ],
  },
  {
    question: "O posibila sursa de informare utilizata de consumator in cadrul cautarii interne de informatii este reprezentata de: (I 449)",
    answers: [
      { text: "a) memorie", correct: true },
      { text: "b) grupul de referinta", correct: false },
      { text: "c) grupul social", correct: false },
      { text: "d) familie", correct: false },
    ],
  },
  {
    question: "Care din urmatoarele surse nu reprezinta o sursa de informare utilizata de consumator in cadrul cautarii externe de informatii: (I 450)",
    answers: [
      { text: "a) memoria", correct: true },
      { text: "b) grupul social", correct: false },
      { text: "c) grupul de referinta", correct: false },
      { text: "d) clasa sociala", correct: false },
    ],
  },
  {
    question: "Atenuarea efectelor sezonalitatii asupra vanzarilor produsului reprezinta un obiectiv specific interventiei publicitatii la nivel: (I 451)",
    answers: [
      { text: "a) afectiv", correct: false },
      { text: "b) cognitiv", correct: false },
      { text: "c) conativ", correct: true },
      { text: "d) rational", correct: false },
    ],
  },
  {
    question: "Ansamblul activitatilor promotionale realizate sub forma unor programe si campanii specifice corespunde: (I 452)",
    answers: [
      { text: "a) comunicatiei directe", correct: false },
      { text: "b) comunicatiei formale", correct: true },
      { text: "c) comunicatiei informale", correct: false },
      { text: "d) comunicatiei indirecte", correct: false },
    ],
  },
  {
    question: "Semnificatia atribuita mesajului de catre receptor reprezinta: (I 453)",
    answers: [
      { text: "a) codificarea", correct: false },
      { text: "b) decodificarea", correct: true },
      { text: "c) elementul perturbator", correct: false },
      { text: "d) feedback-ul", correct: false },
    ],
  },
  {
    question: "Mecanismul de traducere a ideilor in simboluri sau semne reprezinta: (I 454)",
    answers: [
      { text: "a) codificarea", correct: true },
      { text: "b) decodificarea", correct: false },
      { text: "c) feedback-ul", correct: false },
      { text: "d) raspunsul", correct: false },
    ],
  },
  {
    question: "Din perspectiva definirii tintei de comunicatie, mediul de resedinta reprezinta un criteriu: (I 455)",
    answers: [
      { text: "a) comportamental", correct: false },
      { text: "b) psihologic", correct: false },
      { text: "c) geografic", correct: true },
      { text: "d) demografic", correct: false },
    ],
  },
  {
    question: "Unul dintre obiectivele vizate prin intermediul publicitatii de informare il reperzinta: (I 456)",
    answers: [
      { text: "a) evidentierea condiilor de prezentare ale produsului", correct: false },
      { text: "b) prezentarea comparativa a unor produse sau servicii", correct: false },
      { text: "c) stimularea cererii potentiale pentru un produs", correct: true },
      { text: "d) cultivarea unei atitudini favorabile fata de produs", correct: false },
    ],
  },
  {
    question: "La editarea unui catalog, o importanta deosebita trebuie sa se acorde unuia dintre urmatoarele elemente: (I 457)",
    answers: [
      { text: "a) ilustratiei", correct: true },
      { text: "b) numarului de pagini", correct: false },
      { text: "c) tirajului", correct: false },
      { text: "d) costurilor de realizare", correct: false },
    ],
  },
  {
    question: "Publicitatea factuala accentueaza: (I 458)",
    answers: [
      { text: "a) resorturile psihologice ale consumatorilor", correct: false },
      { text: "b) stimularea cererii selective pentru un produs", correct: false },
      { text: "c) prelungirea efectului temporal al publicitatii", correct: false },
      { text: "d) caracteristicle evidente ale produsului", correct: true },
    ],
  },
  {
    question: "Rolul promovarii vanzarilor in faza de maturitate a ciclului de viata a produsului este: (I 459)",
    answers: [
      { text: "a) castigarea fidelitatii consumatorilor", correct: false },
      { text: "b) crearea unei imagini favorabile produsului", correct: false },
      { text: "c) informarea consumatorilor", correct: false },
      { text: "d) sustinerea vanzarilor", correct: true },,
    ],
  },
  {
    question: "Demonstratiile reprezinta o tehnica de promovare a vanzarilor eficienta cand produsul se afla in faza ciclului de viata de: (I 460)",
    answers: [
      { text: "a) lansare", correct: true },
      { text: "b) crestere", correct: false },
      { text: "c) maturitate", correct: false },
      { text: "d) declin", correct: false },
    ],
  },
  {
    question: "Concursurile promotionale reprezinta o tehnica de promovare a vanzarilor in care: (I 461)",
    answers: [
      { text: "a) hazardul intervine partial", correct: false },
      { text: "b) interventia hazardului este exclusa", correct: true },
      { text: "c) hazardul intervine in mod exclusiv", correct: false },
      { text: "d) accentul cade pe generarea unor efecte cantitative pe termen lung", correct: false },
    ],
  },
  {
    question: "Rolul promovarii vanzarilor in faza de crestere a ciclului de viata a produsului este: (I 462)",
    answers: [
      { text: "a) castigarea fidelitatii consumatorilor", correct: true },
      { text: "b) cresterea notorietatii produsului", correct: false },
      { text: "c) pastrarea fidelitatii consumatorilor", correct: false },
      { text: "d) sustinerea vanzarilor produsului", correct: false },
    ],
  },
  {
    question: "Reducerile de pret reprezinta instrumentul tactic adecvat fazei ciclului de viata al produsului de: (I 463)",
    answers: [
      { text: "a) lansare", correct: false },
      { text: "b) crestere", correct: false },
      { text: "c) maturitate", correct: false },
      { text: "d) declin", correct: true },
    ],
  },
  {
    question: "Cel care organizeaza o operatiune de promovare a vanzarilor, avand ca tinta consumatorii si urmarind crearea de trafic la punctul de vanzare este: (I 464)",
    answers: [
      { text: "a) producatorul", correct: false },
      { text: "b) comerciantul", correct: true },
      { text: "c) prescriptorul", correct: false },
      { text: "d) vanzatorul-consultant", correct: false },
    ],
  },
  {
    question: "Ofertele de rambursare fac parte din categoria: (I 465)",
    answers: [
      { text: "a) ofertelor speciale", correct: false },
      { text: "b) ofertelor 'produs in plus'", correct: false },
      { text: "c) primelor promotionale", correct: false },
      { text: "d) reducerilor temporare de pret", correct: true },
    ],
  },
  {
    question: "Tehnica reducerii directe a pretului de vanzare catre consumator practicata la initiativa producatorului, care indica pe ambalaj nivelul reducerii, in marime absoluta sau procentual, poarta denumirea de: (I 466)",
    answers: [
      { text: "a) oferta speciala", correct: false },
      { text: "b) oferta gratuita", correct: false },
      { text: "c) reducere imediata", correct: true },
      { text: "d) oferta produs in plus", correct: false },
    ],
  },
  {
    question: "Tehnica ce presupune comercializarea grupata a doua, trei sau mai multor produse diferite ale aceluiasi fabricant, la un pret promotional, poarta denumirea de: (I 467)",
    answers: [
      { text: "a) tehnical lotului omogen", correct: false },
      { text: "b) tehnica vanzarea grupata", correct: true },
      { text: "c) tehnica lotului cu prima", correct: false },
      { text: "d) tehnica lotului cu gratuitate", correct: false },
    ],
  },
  {
    question: "Obiectul oferit gratuit de catre organizatorul unei operatiuni promotionale cu scopul realizarii anumitor obiective de comunicatie, in conditiile in care primirea sa nu este conditionata de achizitionarea produsului promovat, poarta denumirea de: (I 468)",
    answers: [
      { text: "a) prima ulterioara", correct: false },
      { text: "b) prima autoplatitoare", correct: false },
      { text: "c) prima directa", correct: false },
      { text: "d) cadou promotional", correct: true },
    ],
  },
  {
    question: "Bazandu-se pe experienta distribuitorilor si pe rezultatele studiilor efectuate de-a lungul anilor in marile magazine, specialistii in merchandising au formulat o serie de reguli ce se recomanda a fi respectate. Precizati care dintre recomandarile de mai jos enunta corect una dintre aceste reguli: (I 469)",
    answers: [
      { text: "a) este bine ca raioanele pe care clientii le viziteaza foarte frecvent sa fie aplasate alaturat", correct: false },
      { text: "b) este bine ca raioanele pe care clientii le viziteaza mai rar sa fie amplasate alaturat", correct: false },
      { text: "c) este bine ca implantarea raioanelor sa se faca in functie de sensul de circulatie dominant", correct: true },
      { text: "d) este bine ca raioanele vizitate frecvent sa fie amplasate primele in sensul de circulatie in cadrul magazinului", correct: false },
    ],
  },
  {
    question: "Semnul distinctiv adoptat de catre producator pentru a deosebi produsele sale de restul produselor similare este: (I 470)",
    answers: [
      { text: "a) marca de comert", correct: false },
      { text: "b) marca de fabrica", correct: false },
      { text: "c) marca de productie", correct: true },
      { text: "d) marca de serviciu", correct: false },
    ],
  },
  {
    question: "Marca indeplineste functia de garantare a calitatii pentru: (I 471)",
    answers: [
      { text: "a) producator", correct: false },
      { text: "b) distribuitor", correct: false },
      { text: "c) consumator", correct: true },
      { text: "d) exportator", correct: false },
    ],
  },
  {
    question: "Orice actiune de sponsorizare presupune existenta a trei elemente si anume: (I 472)",
    answers: [
      { text: "a) anuntatorul, tinta si mediile de comunicare", correct: false },
      { text: "b) sponsorul, mediile de comunicare si mesajul", correct: false },
      { text: "c) anuntatorul, tinta si evenimentul", correct: true },
      { text: "d) evenimentul, tinta si comunicatia", correct: false },
    ],
  },
  {
    question: "Punctul de vedere potrivit caruia promovarea vanzarilor reprezinta o modalitate de actiune ce permite realizarea unor obiective de marketing stabilite cu precizie pe termen scurt, mediu si lung, corespunde: (I 473)",
    answers: [
      { text: "a) abordarii comunicationale", correct: false },
      { text: "b) abordarii de marketing", correct: true },
      { text: "c) abordarii tehnice", correct: false },
      { text: "d) abordarii comerciale", correct: false },
    ],
  },
  {
    question: "Distribuirea de esantioane reprezinta o tehnica de promovare a vanzarilor ce poate avea efecte considerabile in cazul in care marca promovata se afla in stadiul de: (I 474)",
    answers: [
      { text: "a) lansare", correct: true },
      { text: "b) crestere", correct: false },
      { text: "c) maturitate", correct: false },
      { text: "d) declin", correct: false },
    ],
  },
  {
    question: "Functia marcii de semn de proprietate si de diferentiere este evidenta mai ales atunci cand este vorba de: (I 475)",
    answers: [
      { text: "a) marca produs", correct: false },
      { text: "b) marca gama", correct: false },
      { text: "c) marca umbrela", correct: true },
      { text: "d) marca garantie", correct: false },
    ],
  },
  {
    question: "Reprezentarea vizuala a numelui de marca prin intermediul unor elemente figurative reprezinta: (I 476)",
    answers: [
      { text: "a) logotipul", correct: true },
      { text: "b) emblema", correct: false },
      { text: "c) designul", correct: false },
      { text: "d) sigla", correct: false },
    ],
  },
  {
    question: "Reprezentarea vizuala a marcii prin intermediul unor figuri geometrice reprezinta: (I 477)",
    answers: [
      { text: "a) logotipul", correct: false },
      { text: "b) emblema", correct: true },
      { text: "c) designul", correct: false },
      { text: "d) sigla", correct: false },
    ],
  },
  {
    question: "Atragerea atentiei publicului-tinta asupra caracteristicilor unui produs existent pe piata reprezinta un obiectiv al demersurilor comunicationale a carei realizare presupune interventii la nivel: (I 478)",
    answers: [
      { text: "a) cognitiv", correct: true },
      { text: "b) afectiv", correct: false },
      { text: "c) conativ", correct: false },
      { text: "d) psihologic", correct: false },
    ],
  },
  {
    question: "Redresarea imaginii unei marci reprezinta un obiectiv al demersurilor comunicationale, a carui realizare presupune interventii la nivel: (I 479)",
    answers: [
      { text: "a) cognitiv", correct: false },
      { text: "b) afectiv", correct: true },
      { text: "c) conativ", correct: false },
      { text: "d) psihologic", correct: false },
    ],
  },
  {
    question: "Cresterea cantitatilor consumate reprezinta un obiectiv al demersurilor comunicationale, a carui realiare presupune interventii la nivel: (I 480)",
    answers: [
      { text: "a) cognitiv", correct: false },
      { text: "b) afectiv", correct: false },
      { text: "c) conativ", correct: true },
      { text: "d) psihologic", correct: false },
    ],
  },
  {
    question: "Coordonarea intregului proces de realizare a unei campanii promotionale, asigurarea unei bune corelari a activitatilor din cadrul tuturor compartimentelor agentiei de publicitate, reprezinta atributii ce revin specialistilor din cadrul compartimentului: (I 481)",
    answers: [
      { text: "a) relatii cu clientii", correct: true },
      { text: "b) creatie", correct: false },
      { text: "c) trafic", correct: false },
      { text: "d) media", correct: false },
    ],
  },
  {
    question: "Inscrierea mesajului in memoria permanenta a receptorului este un obiectiv al actiunii de comunicatie conform fenomenului: (I 482)",
    answers: [
      { text: "a) distorsiunii selective", correct: false },
      { text: "b) orientarii comunicarii", correct: false },
      { text: "c) pozitionarii psihologice", correct: false },
      { text: "d) retinerii selective", correct: true },
    ],
  },
  {
    question: "Reactica destinatarului mesajului transmisa emitatorului acestuia reprezinta: (I 483)",
    answers: [
      { text: "a) codificarea", correct: false },
      { text: "b) elementul perturbator", correct: false },
      { text: "c) feedback-ul", correct: true },
      { text: "d) raspunsul", correct: false },
    ],
  },
  {
    question: "Semnificatia atribuita mesajului de catre receptor reprezinta: (I 484)",
    answers: [
      { text: "a) codificarea", correct: false },
      { text: "b) decodificarea", correct: true },
      { text: "c) elementul perturbator", correct: false },
      { text: "d) feedback-ul", correct: false },
    ],
  },
  {
    question: "Din perspectiva definirii tintei de comunicatie, stilul de viata reprezinta un criteriu: (I 485)",
    answers: [
      { text: "a) comportamental", correct: false },
      { text: "b) psihografic", correct: true },
      { text: "c) geografic", correct: false },
      { text: "d) socioeconomic", correct: false },
    ],
  },
  {
    question: "Catalogul ce se caracterizeaza printr-o descriere detaliata, strict comerciala, a marfurilor oferite spre vanzare, a dimensiunilor si performantelor acestora, poarta denumirea de: (I 486)",
    answers: [
      { text: "a) catalog de prospectare", correct: false },
      { text: "b) catalog de prestigiu", correct: false },
      { text: "c) catalog de lucru", correct: true },
      { text: "d) catalog exceptional", correct: false },
    ],
  },
  {
    question: "Oferirea de agende si calendare reprezinta un instrument promotional specific: (I 487)",
    answers: [
      { text: "a) publicitatii prin tiparituri", correct: true },
      { text: "b) relatiilor publice", correct: false },
      { text: "c) promovarii vanzarilor", correct: false },
      { text: "d) fortelor de vanzare", correct: false },
    ],
  },
  {
    question: "Publicitatea emotionala accentueaza: (I 488)",
    answers: [
      { text: "a) obtinirea unui efect imediat in urma campaniei publicitare", correct: false },
      { text: "b) inluentarea cererii selective pentru produsul promovat", correct: false },
      { text: "c) exploatarea resorturilor psihologice", correct: true },
      { text: "d) consolidarea imaginii de marca", correct: false },
    ],
  },
  {
    question: "Cea mai eficienta componenta a activitatii promotionale in cazul promovarii unui bun industrial o reprezinta: (I 489)",
    answers: [
      { text: "a) publicitatea", correct: false },
      { text: "b) fortele de vanzare", correct: true },
      { text: "c) relatiile publice", correct: false },
      { text: "d) sponsorizarea", correct: false },
    ],
  },
  {
    question: "In cazul in care modalitatea de utilizare a produsului este esentiala, tehnica de promovare a vanzarilor adaptata acestei situatii este: (I 490)",
    answers: [
      { text: "a) reducerea temporara a pretului", correct: false },
      { text: "b) oferirea unui cadou promotional", correct: false },
      { text: "c) organizarea unei loterii promotionale", correct: false },
      { text: "d) organizarea unei demonstratii promotionale", correct: true },
    ],
  },
  {
    question: "Tipul de expunere care prezinta avantajul ca, in functie de nivelul de amplasare a marfii, permite doua sau trei contacte vizuale cu produsul poarta denumirea de: (I 491)",
    answers: [
      { text: "a) prezentare verticala", correct: false },
      { text: "b) prezentare orizontala", correct: false },
      { text: "c) prezentare in 'W'", correct: true },
      { text: "d) prezentare in fereastra", correct: false },
    ],
  },
  {
    question: "Punerea in valoare a marcii la locul vanzarii, prin obtinerea unor pozitii preferentiale - in capatul gondolei, de pilda - este unul dintre obiectivele avute in vedere de un producator care organizeaza o operatiune de promovare a vanzarilor, vizand: (I 492)",
    answers: [
      { text: "a) consumatorii", correct: false },
      { text: "b) prescriptorii", correct: false },
      { text: "c) distribuitorii", correct: true },
      { text: "d) forta de vanzare", correct: false },
    ],
  },
  {
    question: "Fidelizarea clientilor atrasi prin utilizarea acelor tehnici de promovare a vanzarilor care se bazeaza pe principalul acumularii sau a acelora care permit crearea unei relatii pozitive intre marca si consumator, reprezinta un obiectiv ce poate fi avut in vedere in cazul in care marca promovata se gaseste in etapa de: (I 493)",
    answers: [
      { text: "a) lansare a ciclului sau de viata", correct: false },
      { text: "b) crestere a ciclului sau de viata", correct: true },
      { text: "c) declin al ciclului sau de viata", correct: false },
      { text: "d) relansare a ciclului sau de viata", correct: false },
    ],
  },
  {
    question: "Functia marcii de autentificare a produsului permite firemi sa revendice crearea unui produs, acest fiind rolul esential al: (I 494)",
    answers: [
      { text: "a) marcii-produs", correct: false },
      { text: "b) marcii-umbrela", correct: false },
      { text: "c) marcii-gama", correct: false },
      { text: "d) marcii-garantie", correct: true },
    ],
  },
  {
    question: "Exprimarea personalitatii marcii, prin evidentierea conceptului si a identitatii acesteia, reprezinta obiectivul: (I 495)",
    answers: [
      { text: "a) comunicatiei de produs", correct: false },
      { text: "b) comunicatiei de intreprindere", correct: true },
      { text: "c) comunicatiei de marca", correct: false },
      { text: "d) comunicatiei institutionale", correct: false },
    ],
  },
  {
    question: "Reunirea sub un nume comun a mai multor produse formand uzual o gama unica este o caracteristica a: (I 496)",
    answers: [
      { text: "a) marcii-gama", correct: true },
      { text: "b) marcii-sursa", correct: false },
      { text: "c) marcii-umbrela", correct: false },
      { text: "d) marcii-linie", correct: false },
    ],
  },
  {
    question: "Pretul de incercare face parte din categoria: (I 497)",
    answers: [
      { text: "a) oferterlor speciale", correct: false },
      { text: "b) ofertelor de rambursare", correct: false },
      { text: "c) operatiunilor vizand incercarea gratuita a produselor", correct: false },
      { text: "d) reduceri temporare de preturi", correct: true },
    ],
  },
  {
    question: "Bonul de reducere incrucisata reprezinta o tehnica de promovare a vanzarilor utilizata atunci cand sunt avute in vedere obiective precum: (I 498)",
    answers: [
      { text: "a) prima cumparare si incercarea unor noi variante de produs", correct: true },
      { text: "b) fidelizarea consumatorilor si cresterea cantitatilor cumparate", correct: false },
      { text: "c) pastrarea clientilor si cresterea cantitatilor consumate", correct: false },
      { text: "d) cresterea cantitatilor cumparate si cresterea frecventei de cumparare", correct: false },
    ],
  },
  {
    question: "Apeland la marca distribuitorului, producatorul urmareste: (I 499)",
    answers: [
      { text: "a) sa asigure o anumita regularitate a aprovizionarii", correct: false },
      { text: "b) sa imparta riscurile cu distribuitorul", correct: true },
      { text: "c) sa emita un mesaj de natura promotionala", correct: false },
      { text: "d) sa atenueze efectele sezonalitatii", correct: false },
    ],
  },
  {
    question: "Pornind de la ideea ca, inainte de toate, consumatorul doreste o garantare a rezultatelor pe care le poate obtine in urma utilizarii/consumului produsului care face obiectul comunicarii, unii specialisti recurg, in conceperea mesajelor, la explicatii, demonstratii, sfaturi sau recomandari. Aceasta abordare a demersurilor comunicationale are la baza: (I 500)",
    answers: [
      { text: "a) modelul marshallian", correct: true },
      { text: "b) analiza tranzactionala", correct: false },
      { text: "c) modelul freudian", correct: false },
      { text: "d) teoria motivatiilor", correct: false },
    ],
  },
  {
    question: "Asociatia Americana de Marketing (AMA) a formulat o definitie la inceputul anilor 60, conform careia cercetarea de marketing este: (I 501)",
    answers: [
      { text: "a) culegerea, masurarea si inregistrarea datelor referitoare privind marketingul bunurilor", correct: false },
      { text: "b) culegerea si interpretarea sistematica a datelor referitoare la orice aspecte de marketing", correct: false },
      { text: "c) culegerea, inregistrarea si analiza sistematica a datelor referitoare la marketingul bunurilor si serviciilor", correct: true },
      { text: "d) specificarea, masurarea si diseminarea informatiilor legate de marketingul bunurilor, serviciilor si euristicii", correct: false },
    ],
  },
  {
    question: "In functie de scopul functional al cercetarii, cercetarile de marketing pot fi: (I 502)",
    answers: [
      { text: "a) cercetari primare, cercetari secundare", correct: false },
      { text: "b) cercetari transversale, cercetari longitudinale", correct: false },
      { text: "c) cercetari exploratorii, cercetari concluzive", correct: true },
      { text: "d) cercetari cantitative, cercetari calitative", correct: false },
    ],
  },
  {
    question: "In functie de tipul informatiilor din cercetare, cercetarile de marketing pot fi: (I 503)",
    answers: [
      { text: "a) cercetari cantitative, cercetari calitative", correct: false },
      { text: "b) cercetari exploratorii, cercetari cauzale", correct: false },
      { text: "c) cercetari ad-hoc, cercetari bazate pe paneluri, cercetari descriptive", correct: false },
      { text: "d) cercetari primare, cercetari secundare", correct: true },
    ],
  },
  {
    question: "Cand scopul principal este clarificarea si intelegerea coordonatelor unei probleme, cercetarea de marketing este de tip: (I 504)",
    answers: [
      { text: "a) exploratoriu", correct: true },
      { text: "b) instrumental", correct: false },
      { text: "c) descriptiv", correct: false },
      { text: "d) predictiv", correct: false },
    ],
  },
  {
    question: "Cercetarea exploratorie se caracterizeaza prin: (I 505)",
    answers: [
      { text: "a) formularea de concluzii empirice, utilizarea de esantioane reprezentative statistic", correct: false },
      { text: "b) definirea vaga a nevoilor de informatii, abordarea in general nestructurata, flexibila", correct: true },
      { text: "c) importanta extrem de mica a creativitatii cercetatorului, caracterul nestructurat", correct: false },
      { text: "d) definirea precisa a nevoilor de informatii", correct: false },
    ],
  },
  {
    question: "Urmatoarele etape fac parte din faza preliminara a cercatarii de marketing: (I 506)",
    answers: [
      { text: "a) alegerea surselor de informatii, stabilirea bugetului cercetarii, definirea problemei decizionale", correct: false },
      { text: "b) stabilirea scopului cercetarii, definirea obiectivelor cercetarii, elaborarea ipotezelor", correct: true },
      { text: "c) programarea in timp a cercetarii, estimarea prealabila a valorii informatiilor, stabilirea bugetului", correct: false },
      { text: "d) definirea problemei decizionale, selectarea modalitatii de culegere si sistematizarii a informatiilor", correct: false },
    ],
  },
  {
    question: "In faza de priectare a cercetarii de marketing este inclusa urmatoarea etapa: (I 507)",
    answers: [
      { text: "a) selectarea modalitatii de culegere si sistematizare a informatiilor", correct: true },
      { text: "b) elaborarea cererii de cercetare de marketing", correct: false },
      { text: "c) recoltarea informatiilor", correct: false },
      { text: "d) estimarea prealabila a valorii informatiilor", correct: false },
    ],
  },
  {
    question: "Urmatoarea etapa dupa identificarea obiectivelor cercetarii este: (I 508)",
    answers: [
      { text: "a) definirea scopului cercetarii", correct: false },
      { text: "b) elaborarea ipotezelor", correct: true },
      { text: "c) estimarea prealabila a valorii informatiilor obtinute din cercetare", correct: false },
      { text: "d) recoltarea informatiilor", correct: false },
    ],
  },
  {
    question: "Care din urmatoarele variante de mai jos poate fi considerata o variabila categoriala? (I 509)",
    answers: [
      { text: "a) cifra de afaceri", correct: false },
      { text: "b) mediul de resedinta (urban/rural)", correct: true },
      { text: "c) atitudinea respondentilor fata de un produs/serviciu", correct: false },
      { text: "d) preferintele respondetilor pentru un produs", correct: false },
    ],
  },
  {
    question: "Procesul de scalare reprezinta un: (I 510)",
    answers: [
      { text: "a) proces de comparatii intre doua categorii", correct: false },
      { text: "b) proces de construire a scalelor", correct: false },
      { text: "c) proces de masurare a informatiilor", correct: false },
      { text: "d) instrument prin intermediul caruia se face masurarea", correct: true },
    ],
  },
  {
    question: "Alegeti din variantele de mai jos, conditiile de construire a scalelor: 1. sa fie inteligivila pentru grupul tinta de la care se recolteaza informatiile; 2.sa diferentieze nivelele de intensitate ale variabilei cercetate; 3. nivelele scalei sa constituia o reprezentare numerica sau nenumerica a intensitatii variabilei masurate; 4. sa existe obligatoriu un instrument fizic care sa permita masurarea (I 511)",
    answers: [
      { text: "a) 1, 3", correct: false },
      { text: "b) 1, 4", correct: false },
      { text: "c) 1, 2", correct: true },
      { text: "d) 2, 4", correct: false },
    ],
  },
  {
    question: " Cercetare selectiva realizata pe un esantion de 2000 de persoane a furnizat urmatoarele distributii ale aprecierilor referitoare la trei variabile (gust, pret, ambalaj) ale produselor de ciocolata de 'Lindt','Toblerone' si 'Frey': (vezi carte pentru tabel). Care este pozitia Toblerone in raport cu celelalte doua marci concurente? (I 512)",
    answers: [
      { text: "a) 1", correct: false },
      { text: "b) 2", correct: true },
      { text: "c) 3", correct: false },
      { text: "d) 4", correct: false },
    ],
  },
  {
    question: "Intr-o cercetare selectiva efectuata in randurile a 2000 de respondenti prezenti in cadrul unei degustari, un producator de ciocolata a incercat sa identifice atitudinea fata de cele trei marci de conceptie proprie, prin ierarhizarea preferintelor in ordine descrescatoare. Din rezultatele obtinute, s-a constatat ca: (vezi carte pentru tabel). Care este ierarhia preferintelor pentru cele trei marci? (I 513)",
    answers: [
      { text: "a) A, B, C", correct: false },
      { text: "b) B, C, A", correct: false },
      { text: "c) B, A, C", correct: true },
      { text: "d) A, C, B", correct: false },
    ],
  },
  {
    question: "Diferentiala semantica este o scala de tip: (I 514)",
    answers: [
      { text: "a) nominala", correct: false },
      { text: "b) ordinala", correct: false },
      { text: "c) interval", correct: true },
      { text: "d) proportionala", correct: false },
    ],
  },
  {
    question: "Un sondaj realizat pe un esantion de 2000 de persoane, privind preferintele subiectilor cercetati pentru produsul cafea 'Carte Noire', masurata cu ajutorul unei scale, a inregistrat: (vezi carte pentru tabel). Care este scorul mediu realizat la nivelul estantionului si scala utilizata? (I 515)",
    answers: [
      { text: "a) 0.1, scala lui Likert", correct: true },
      { text: "b) 0.125, diferentiala semantica", correct: false },
      { text: "c) 1.325, diferentiala semantica", correct: false },
      { text: "d) 0.176, scala lui Likert", correct: false },
    ],
  },
  {
    question: "Din randul surselor interne de informatii nu fac parte: (I 516)",
    answers: [
      { text: "a) publicatii editate de organisme specializate", correct: false },
      { text: "b) evidente statistice", correct: false },
      { text: "c) evidente contabile", correct: false },
      { text: "d) angajatii", correct: true },
    ],
  },
  {
    question: "Scala interval este reprezentata de faptul ca: (I 517)",
    answers: [
      { text: "a) nu permite ordonari", correct: false },
      { text: "b) nu permite clasificari", correct: false },
      { text: "c) nu are intervale egale", correct: false },
      { text: "d) nu are o origine unica", correct: true },
    ],
  },
  {
    question: "Sunt metode comparative de scalare: 1. diferentiala semantica; 2. scala Likert; 3. scala Stapel; 4. metoda ordonarii rangurilor; 5. scala interval; 6. scala proportionala; 7. scala cu suma constanta; 8. metoda comparatiilor perechi (I 518)",
    answers: [
      { text: "a) 1,3,8", correct: false },
      { text: "b) 4,7,9", correct: true },
      { text: "c) 3,4,5", correct: false },
      { text: "d) 5,7,8", correct: false },
    ],
  },
  {
    question: "Modelul Fishbein-Rosenberg este o metoda scalara specifica: (I 519)",
    answers: [
      { text: "a) evaluarii factorilor psihologici", correct: false },
      { text: "b) evaluarii motivatiilor", correct: false },
      { text: "c) evaluarii perceptiilor", correct: false },
      { text: "d) evaluarii atitudinii", correct: true },
    ],
  },
  {
    question: "In cazul unei erori medii admise de 4% la o valoare p de 0.5, iar probabilitatea ca valorile din esantion sa se regaseasca in intervalul de incredere dorit la nivelul populatiei investigate este de 99% (coeficientul asociat probabilitatii de garantare a rezultatelor este de 2.58), dimensiunea aporximativa a esantionului conform formulei, este: (I 520)",
    answers: [
      { text: "a) 1054", correct: false },
      { text: "b) 1041", correct: true },
      { text: "c) 1036", correct: false },
      { text: "d) 1073", correct: false },
    ],
  },
  {
    question: "Scala lui Likert conduce la obtinerea informatiilor specifice scalei: (I 521)",
    answers: [
      { text: "a) ordinale", correct: true },
      { text: "b) interval", correct: false },
      { text: "c) proportionale", correct: false },
      { text: "d) parametrice", correct: false },
    ],
  },
  {
    question: "O scala detipul urmator: Foarte favorabil... Foarte nefavorabil, este denumita: (I 522)",
    answers: [
      { text: "a) Scala cu suma constanta", correct: false },
      { text: "b) Scala comparativa", correct: false },
      { text: "c) Diferentiala semantica", correct: true },
      { text: "d) Scala Likert", correct: false },
    ],
  },
  {
    question: "In privinta cercetarilor calitative putem afirma: (I 523)",
    answers: [
      { text: "a) costul mai mare, comparativ cu cercetarea cantitativa", correct: false },
      { text: "b) imposibilitatea de a identifica motivatiile si sentimentele profunde a respondentilor", correct: false },
      { text: "c) utilizarea de esantioane de dimensiuni mari, reprezentative, pentru populatia tinta", correct: false },
      { text: "d) permite obtinerea informatiilor 'sensibile' de la respondenti, in cazul in care aspectele cercetate sunt stanjenitoare, fiu au un impact negativ asupra propriului statut", correct: true },
    ],
  },
  {
    question: "Cel mai mare dezavantaj al cercetarii calitative este: (I 524)",
    answers: [
      { text: "a) costul relativ ridicat", correct: false },
      { text: "b) subiectivitatea", correct: true },
      { text: "c) perioada mare de realizare", correct: false },
      { text: "d) cercetarea calitativa nu are niciun avantaj", correct: false },
    ],
  },
  {
    question: "Interpretarea de roluri face parte din categoria tehnicilor: (I 525)",
    answers: [
      { text: "a) de asociere", correct: false },
      { text: "b) de constructie", correct: false },
      { text: "c) de complementare", correct: false },
      { text: "d) de exprimare", correct: true },
    ],
  },
  {
    question: "Brainstormingul face parte din categoria: (I 526)",
    answers: [
      { text: "a) metodelor de studiere a mutatiilor", correct: false },
      { text: "b) metodelor intuitive de creativitate", correct: true },
      { text: "c) metodelor rationale de creativitate", correct: false },
      { text: "d) metodelor proiective", correct: false },
    ],
  },
  {
    question: "Care din urmatoarele aspecte pot constitui scopul unei cercetari de tip interviu in profunzime: (I 527)",
    answers: [
      { text: "a) identificarea motivatiilor de utilizare a unui anumit produs", correct: true },
      { text: "b) estimarea cererii totale pentru un anumit produs pe piata romaneasca", correct: false },
      { text: "c) cunoasterea structurii demografice a populatiei Bucurestiului", correct: false },
      { text: "d) determinarea cotelor de piata ale producatorilor", correct: false },
    ],
  },
  {
    question: "Testul aperceptiei tematice face parte din: (I 528)",
    answers: [
      { text: "a) tehnicile de asociere", correct: false },
      { text: "b) tehnicile de constructie", correct: true },
      { text: "c) tehnicile de complementare", correct: false },
      { text: "d) tehnicile de exprimare", correct: false },
    ],
  },
  {
    question: "Tehnica asocierilor de cuvinte presupune: (I 529)",
    answers: [
      { text: "a) prezentarea unor fraze", correct: false },
      { text: "b) prezentarea tuturor cuvintelor din lista simultan", correct: false },
      { text: "c) chestionarea subiectilor privind primul cuvant care le trece prin minte, cand aud un cuvant din lista", correct: true },
      { text: "d) ignorarea raspunsurilor nonverbale", correct: false },
    ],
  },
  {
    question: "Sinectica face parte din categoria: (I 530)",
    answers: [
      { text: "a) metodelor de studiere a motivatiilor", correct: false },
      { text: "b) metodelor rationale de creativitate", correct: false },
      { text: "c) metodelor intuitive de creativitate", correct: true },
      { text: "d) metodelor proiective", correct: false },
    ],
  },
  {
    question: "Metoda calitativa ce reprezinta o serie de imagini vagi, cu o semnificatie ambigua, pornind de la care subiectul trebuie sa inventeze o 'poveste' poarta denumirea de: (I 531)",
    answers: [
      { text: "a) testul frustrarii", correct: false },
      { text: "b) testul Y", correct: false },
      { text: "c) testul aperceptiei tematice", correct: true },
      { text: "d) sinectica", correct: false },
    ],
  },
  {
    question: "In medie, focus grpul are o durata de: (I 532)",
    answers: [
      { text: "a) aproximativ 15 minute", correct: false },
      { text: "b) aproximativ 20-30 minute", correct: false },
      { text: "c) aproximativ 2-3 ore", correct: true },
      { text: "d) aproximativ 60 minute", correct: false },
    ],
  },
  {
    question: "Observarea este o metoda de cercetare tip: (I 533)",
    answers: [
      { text: "a) exploratoriu sau descriptiva", correct: true },
      { text: "b) descriptiv sau cauzal", correct: false },
      { text: "c) explicativ", correct: false },
      { text: "d) cauzal", correct: false },
    ],
  },
  {
    question: "In functie de natura cercetarii, putem clasifica observarile in: (I 534)",
    answers: [
      { text: "a) observari umane si mecanice", correct: true },
      { text: "b) observari nedisimulate si observari disimulate", correct: false },
      { text: "c) observari directe si observari indirecte", correct: false },
      { text: "d) observari structurate si observari nestructurate", correct: false },
    ],
  },
  {
    question: "Dupa gradul de disimulare, putem clasifica observarile in: (I 535)",
    answers: [
      { text: "a) observari umane si observari mecanice", correct: false },
      { text: "b) observari nedisimulate si observari disimulate", correct: true },
      { text: "c) observari directe si observari indirecte", correct: false },
      { text: "d) observari structurate si observari nestructurate", correct: false },
    ],
  },
  {
    question: "Dupa modalitatea de masurare se pot distinge urmatoarele tipuri de observari: (I 536)",
    answers: [
      { text: "a) observari umane si observari mecanice", correct: false },
      { text: "b) observari nedisimulate si observari disimulate", correct: false },
      { text: "c) observari directe si observari indirecte", correct: true },
      { text: "d) observari structurate si observari nestructurate", correct: false },
    ],
  },
  {
    question: "Psihogalvanometru reprezinta: (I 537)",
    answers: [
      { text: "a) un instrument ce inregistreaza reactia respondentilor la vizualizarea anumitor stimuli", correct: false },
      { text: "b) un instrument ce masoara gradul de dilatare a pupilei individului", correct: false },
      { text: "c) un instrument ce masoara reactia galvanica a pielii, ca urmare a expunerii la un anumit stimul", correct: true },
      { text: "d) un tip de cercetare", correct: false },
    ],
  },
  {
    question: "Printre limitele observarii regasim: (I 538)",
    answers: [
      { text: "a) eroarea de reamintire", correct: false },
      { text: "b) existenta erorilor sistematice datorate operatorului de interviu", correct: false },
      { text: "c) eroarea datorita modului incorect de a formula intrebarile", correct: false },
      { text: "d) imposibilitatea de a observa procesele de ordin cognitiv precum atitudinile, motivatiile si preferintele oamenilor", correct: true },
    ],
  },
  {
    question: "In cazul unei observari de tipul 'clientul misterios', prima etapa a cercetarii o reprezinta: (I 539)",
    answers: [
      { text: "a) identificarea clientului misterios", correct: false },
      { text: "b) construirea programului", correct: false },
      { text: "c) stabilirea scopului si obiectivelor", correct: true },
      { text: "d) culegerea datelor", correct: false },
    ],
  },
  {
    question: "In general pentru masurarea frecventelor de trafic se utilizeaza instrumentele: (I 540)",
    answers: [
      { text: "a) controale de trafic", correct: false },
      { text: "b) camerelor video", correct: true },
      { text: "c) analizator perceptiv", correct: false },
      { text: "d) scannerele", correct: false },
    ],
  },
  {
    question: "Instrumentul cu ajutorul caruia se masoara gradul de dilatare a pupilei individului in prezenta actiunii diversilor stimuli se numeste: (I 541)",
    answers: [
      { text: "a) psihogalvanometru", correct: false },
      { text: "b) pupilometru", correct: true },
      { text: "c) ochiometru", correct: false },
      { text: "d) viziometru", correct: false },
    ],
  },
  {
    question: "Obervarea de tipul 'clientul misterios' este o cercetare de tipul: (I 542)",
    answers: [
      { text: "a) observare personala", correct: false },
      { text: "b) obervare bazata pe echipamente", correct: true },
      { text: "c) observare on-line", correct: false },
      { text: "d) toate cele de mai sus", correct: false },
    ],
  },
  {
    question: "In functie de gradul de cunoastere a scopului cercetarii de catre respondent, sondajul se poate clasifica in: (I 543)",
    answers: [
      { text: "a) nedisimulat si disimulat", correct: true },
      { text: "b) transversale si sondaje", correct: false },
      { text: "c) sondaje clasice; sondaje asistate pe calculator; sondaje online", correct: false },
      { text: "d) transversale si personale", correct: false },
    ],
  },
  {
    question: "In functie de criteriul temporal se disting sondaje: (I 544)",
    answers: [
      { text: "a) nedisimulat si disimulat", correct: false },
      { text: "b) transversale si sondaje", correct: true },
      { text: "c) sondaje clasice; sondaje asistate pe calculator; sondaje online", correct: false },
      { text: "d) transversale si personale", correct: false },
    ],
  },
  {
    question: "Printre caracteristicile sondajului postal, se regaseste: (I 545)",
    answers: [
      { text: "a) absenta asistentei din partea operatorului", correct: true },
      { text: "b) posibilitatea clarificarii si detalierii de catre operator", correct: false },
      { text: "c) absenta erorilor datorate identitatii persoanei care raspunde", correct: false },
      { text: "d) rata de raspuns mare", correct: false },
    ],
  },
  {
    question: "Printre avantajele oferite de sondajele clasice telefonice regasim: (I 546)",
    answers: [
      { text: "a) durata foarte scurta de obtinere a informatiilor", correct: true },
      { text: "b) subiectul poate raspunde in 'ritmul' lui la intrebari", correct: false },
      { text: "c) uneori chestionarului nu i se acorda nicio atentie si este aruncat", correct: false },
      { text: "d) cu instructiuni adecvate pot fi completate chestionare", correct: false },
    ],
  },
  {
    question: "Printre avantajele sondajului regasim: (I 547)",
    answers: [
      { text: "a) flexibilitatea comunicarii verbale si scrise cu respondentii", correct: true },
      { text: "b) obtinerea informatiilor 'sensibile' de la respondenti", correct: false },
      { text: "c) utilizeaza instrumente calitative", correct: false },
      { text: "d) nu are avantaje", correct: false },
    ],
  },
  {
    question: "Printre avantajele utilizarii panelurilor regasim: (I 548)",
    answers: [
      { text: "a) cunoasterea evolutiei in timp a comportamentului consumatorului", correct: true },
      { text: "b) schimbarea in permanenta a membrilor esantionului", correct: false },
      { text: "c) caracterul anonim al cercetarii", correct: false },
      { text: "d) durata foarte scurta de obtinere a informatiilor", correct: false },
    ],
  },
  {
    question: "Sondaje bazate pe paneluri fac parte din categoria sondajelor: (I 549)",
    answers: [
      { text: "a) personale", correct: false },
      { text: "b) asistate de calculator", correct: false },
      { text: "c) speciale", correct: true },
      { text: "d) publice", correct: false },
    ],
  },
  {
    question: "Intr-un chestionar atunci cand fluxul intrebarilor merge de la intrebari introductive spre intrebari specifice cercetarii se spune ca acesta are la baza: (I 550)",
    answers: [
      { text: "a) principiul 'palniei'", correct: true },
      { text: "b) pricipiul sarcinii respondentului", correct: false },
      { text: "c) principiul sectionarii chestionarului", correct: false },
      { text: "d) principiul 'palniei rasturnate'", correct: false },
    ],
  },
];

// Shuffle the questions
const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

// Select only the first 2 questions (for testing purposes)
const selectedQuestions = shuffledQuestions.slice(0, 45);

// Get references to the HTML elements
const questionsContainer = document.getElementById("questions");
const submitButton = document.querySelector(".submit");
const resultsContainer = document.getElementById("results");
const correctAnswersContainer = document.getElementById("correct");
const incorrectAnswersContainer = document.getElementById("incorrect");

// Render the questions
selectedQuestions.forEach((question, index) => {
  // Create the question element
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `${index + 1}. ${question.question}`;

  // Create the answers element
  const answersElement = document.createElement("div")
  answersElement.classList.add("answer");
  question.answers.forEach((answer) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question${index}`;
    radio.value = answer.correct;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(answer.text));
    answersElement.appendChild(label);
    answersElement.appendChild(document.createElement("br"));
  });

  // Add the question and answers to the container
  questionsContainer.appendChild(questionElement);
  questionsContainer.appendChild(answersElement);
});

// Handle the form submission
submitButton.addEventListener("click", () => {
  // Get the selected answers
  const selectedAnswers = selectedQuestions.map((question, index) => {
    const radios = document.getElementsByName(`question${index}`);
    const selectedRadio = Array.from(radios).find((radio) => radio.checked);
    return selectedRadio ? selectedRadio.value === "true" : false;
  });

  // Calculate the number of correct answers
  const numCorrect = selectedAnswers.filter((answer) => answer).length;

  // Calculate the number of incorrect answers
  const numIncorrect = selectedAnswers.length - numCorrect;

  // Highlight the correct answers
  selectedQuestions.forEach((question, index) => {
    const radios = document.getElementsByName(`question${index}`);
    question.answers.forEach((answer, answerIndex) => {
      const label = radios[answerIndex].parentElement;
      if (answer.correct) {
        label.classList.add("correct");
      }
      else {
        label.classList.remove("correct");
      }
    });
  });

  // Display the results
  resultsContainer.style.display = "block";
  correctAnswersContainer.textContent = numCorrect;
  incorrectAnswersContainer.textContent = numIncorrect;
});

// Raspunsuri Corecte
const showAnswersButton = document.querySelector(".show-answers");

showAnswersButton.addEventListener("click", () => {
  // Create a new page
  const newPage = window.open();

  // Generate HTML for the new page
  const newPageContent = `
    <html>
      <head>
        <title>Raspunsuri Corecte</title>
        <style>
          .correct {
            background-color: #cfc;
          }
        </style>
      </head>
      <body>
        <h1>Raspunsuri corecte</h1>
        <div id="answers"></div>
      </body>
    </html>
  `;

  // Write the HTML to the new page
  newPage.document.write(newPageContent);

  // Get references to the HTML elements
  const answersContainer = newPage.document.getElementById("answers");

  // Render the questions with correct answers highlighted
  questions.forEach((question) => {
    // Create the question element
    const questionElement = newPage.document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `${question.question}`;

    // Create the answers element
    const answersElement = newPage.document.createElement("div");
    question.answers.forEach((answer) => {
      const label = newPage.document.createElement("label");
      const radio = newPage.document.createElement("input");
      radio.type = "radio";
      radio.disabled = true;
      if (answer.correct) {
        radio.checked = true;
        label.classList.add("correct");
      }
      label.appendChild(radio);
      label.appendChild(newPage.document.createTextNode(answer.text));
      answersElement.appendChild(label);
      answersElement.appendChild(newPage.document.createElement("br"));
    });

    // Add the question and answers to the container
    answersContainer.appendChild(questionElement);
    answersContainer.appendChild(answersElement);
  });
});
