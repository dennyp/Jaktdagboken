# Jaktdagboken
**Författare:** Denny Petersson  
**Datum:** 2019-06-08  

## Abstrakt
Denna rapport behandlar utvecklingsförfarandet gällande webbapplikationen Jaktdagboken, ett projekt som pågått under tio veckor. Projektets syfte, arbetssätt samt teknik tas upp. Positiva erfarenheter så som kravlista och det iterativa arbetssättet diskuteras, men även negativa erfarenheter så som den uteblivna automatiska testningen tas upp. Till sist avslutas rapporten med en sammanfattning som innehåller utvecklingspotentialen för applikationen samt en diskussion över vad som skulle kunna göras annorlunda.  


## Inledning och bakgrund
### Slutprodukt
Jaktdagboken riktar sig till jägare som vill föra dagbok över sina äventyr. Jägaren skapar ett konto för att kunna skriva sina dagboksinlägg. Till inläggen kan bilder och händelser läggas till från dagen som rapporteras. Alla jägarens dagboksinlägg listas och händelserna från dagboken visas på en karta så att en överblick över var vilt ofta befinner sig skapas.

### Syfte
Syftet med projektet var att leverera en implementerad och testad produkt för att få erfarenhet av hur ett projekt i arbetslivet kan gå till väga. Alla områden i ett verkligt projekt berörs genom kontinuerlig dokumentation, planering, implementation, testning och produktionssättning. Dessutom fick man möjlighet att inhämta ny kunskap i ett område man själv fick välja.

### Arbetssätt
Under projektet har en iterativ arbetsprocess följts med sprintar på en vecka. Detta fungerar genom att man, till sin sprint backlog, väljer ut de krav eller uppgifter som ska göras under veckan och uppskattar tiden det tar att göra dessa. En analys av föregående vecka görs också i sprinten där man skrev en kort text om vad som gick bra och vad som gick mindre bra. Veckan inleddes med ett handledarmöte där vi gick igenom vad var och en i gruppen hade gjort under föregående iteration och vad vi skulle göra under nuvarande iteration.  

Projektet var uppdelat i fyra faser; inception, elaboration, construction och transition. I inception skrevs en vision, en risklista skapades och  product backlog började skrivas. Under elaboration utökades product backlog, riskerna började hanteras och en testplan skrevs. Implementation påbörjades. I delen för construction låg fokus på fortsatt implementation. Till sist, i transition, hårdtestades applikationen och kvalitén säkerställdes. All dokumentation skrevs också klart.

200 timmar under tio veckor har avsatts till projektet. 

### Tekniker
All utveckling har skett i Visual Studio Code. I backend har jag använt mig utav Node.js med Express.js som serverramverk. För att lagra data användes MongoDB. React används i klienten tillsammans med React-bootstrap som är motsvarigheten till bootstrap fast allt är byggt i komponenter. För att produktionssätta applikationen valde jag att använda mig av Heroku. Nedan listas alla tekniker.

#### Frontend
- React
- React-bootstrap
- Javascript
- CSS
- HTML
#### Backend
- Node.js
- Express.js
- MongoDB med mongoose
#### Produktionssättning
- Heroku
#### Utvecklingsmiljö
- Visual Studio Code

## Positiva erfarenheter
Risklistan som jag skapade i början av projektet var till stor hjälp då jag fick sätta mig ned och tänka igenom vad som kunde gå fel. Detta gjorde att jag tidigt fokuserade på att produktionssätta applikationen för att eliminera risken det var att ha kvar det till slutet av projektet. Risklistan hjälpte mig också att komma igång med implementation tidigt då jag kom fram till att det var bättre att ha fungerande ful kod och förbättra den i efterhand allt eftersom man lär sig.  

En annan positiv erfarenhet var att skapa en kravlista och prioritera denna. Prioriteringen har varit viktig så att jag inte fokuserar på fel saker utan har nedskrivet vad som är viktigast att få med. 

Det iterativa arbetssättet där man planerar veckan i förväg och hela tiden fokuserar på de viktigaste punkterna är en annan stor positiv erfarenhet. Det kändes bra att tänka igenom veckan grundligt med hjälp av product backlog och det blev inte svårt att planera mina sprintar då jag hela tiden visste vad som måste göras.

React som ramverk tyckte jag var väldigt bra och jag har sett potentialen det har. Jag hade lite svårt att greppa tankesättet till en början men det klarnade allt eftersom. React kommer jag definitivt använda mig av framöver och fördjupa mig mer i.

## Negativa erfarenheter
Efter mycket om och men så valde jag att helt skippa de automatiska testerna som jag hade tänkt att utveckla för backend. Jag hade fått ont om tid till att få en fungerande applikation om jag hade lagt mer tid på det. De manuella testerna skulle jag kunnat skrivit tidigare i projektet. Jag skulle också kunnat avvarat tid i sprintarna för code inspection och exploratory testing för nu syns det inte att jag har gjort det kontinuerligt under projektets gång.

I product backlog skulle jag kunnat brutit ner vissa krav till ännu mindre bitar. Detta hade gjort att jag varit tvungen att undersöka vad som behöver göras mer i detalj vilket hade lett till att tidsuppskattningarna blivit enklare i och med att jag hade haft mer underlag för dem. Nu fanns det vissa punkter så som ladda upp en bild till databasen som tog fem gånger så lång tid än vad jag uppskattat. Detta för att jag inte visste tillräckligt om hur man går tillväga för att ladda upp bilder i mongoDB innan jag uppskattade tiden.

En annan sak jag haft svårt med är att ofta när jag upptäcker en bugg så vill jag åtgärda den omgående. Det hade varit bättre om jag skrivit upp den som en issue och tagit hand om den när det var nödvändigt hellre än att försöka lösa den direkt.

## Sammanfattning
I det stora hela tycker jag att projektet har gått bra. Att ha gruppmötena varje vecka har varit till hjälp genom att man har kunnat diskutera om man fastnat på något. De har också pushat en att ha något att leverera varje vecka och därigenom förbättrat disciplinen. Tidsmässigt så tycker jag att jag legat bra till under större delen av projektet. Det var i början jag hade svårt att avsätta tillräcklig tid men det har jag tagit igen under projektets gång. 

Jag har med detta projektet haft möjlighet att öka min förståelse för hela stacken. Det har varit bra att repetera det jag lärt mig från föregående kurser så att den kunskapen verkligen sätter sig. Ny kunskap i form av React är också mycket bra att ha med sig framöver.

Alla krav med prio 1 har implementerats sånär som på möjligheten att redigera inlägg som jag fick prioritera ner i slutet av projektet. Det har dock påbörjats och är det första som kommer att implementeras vid fortsatt utveckling av projektet.

Det finns mycket ytterligare funktionalitet som kan implementeras framöver. T. ex. pagination för inläggen, möjlighet att ange väderförhållanden, statistik, användarprofil, markörer på kartan kan innehålla mer information, ha andra symboler samt länkar till dagboksinlägget som innehåller händelsen med mera.

I det stora hela är jag nöjd med projektet. Dock hade jag fokuserat mer på att få till automatisk testning för backend tidigt i projektet och kontinuerligt skrivit fler tester. Jag hade också tänkt lite mer på användarvänligheten genom att implementera någon form av alert så att användaren får feedback genom denna t. ex. då inlägg sparas eller då något går fel. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzQyODgwMSw2MjkyMzU4NTYsLTEwODc5Nz
U5OTIsLTE3NDg1MzQ5MTEsLTE0MTY5MzA1OTIsMTE3NjM0MTQy
NiwxMTMyODA2MTA1LDYxNzUyNDMzMiwxMzYxOTMwMjQyLDE5OD
QzNjgyODMsMTExNzc3OTY2Myw3MzMzNjAzNywtMjAyNDc5ODQw
NywtNTE3NTM0NzE0LC0xMjgzMzIyODc3LC03NTU4NTYyOTksLT
YwMTU0OTkzMSwtMTkzNzM4MzQ4OSwyMDUxNTI5NzkwXX0=
-->