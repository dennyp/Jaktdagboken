# Jaktdagboken
**Författare:** Denny Petersson  
**Datum:** 2019-06-08  

## Abstrakt
Denna rapport behandlar utvecklingsförfarandet gällande webbapplikationen Jaktdagboken. Projektets mål, arbetssätt, teknik samt positiva och negativa erfarenheter 

-   **Abstrakt:**  Förklara enkelt, kort och koncist vad din rapport handlar om, samt vilka slutsatser du har kommit fram till. Som läsare vill man kunna få en snabb blick för om rapporten är “något för mig”.

## Inledning och bakgrund
### Slutprodukt
Jaktdagboken riktar sig till jägare som vill föra dagbok över sina äventyr. Jägaren skapar ett konto för att kunna skriva sina dagboksinlägg. Till inläggen kan bilder och händelser läggas till från dagen som rapporteras. Alla dagboksinlägg listas och händelserna från dagboken visas på en karta så att jägaren får en överblick över var vilt ofta befinner sig.

### Syfte
Syftet med projektet var att leverera en implementerad och testad produkt för att få erfarenhet av hur ett projekt i arbetslivet kan gå till väga. Alla områden i ett verkligt projekt berörs genom kontinuerlig dokumentation, implementation, testning och produktionssättning.

### Arbetssätt
Under projektet har en iterativ arbetsprocess följts med sprintar på en vecka. Detta fungerar genom att man, till sin sprint backlog, väljer ut de krav eller uppgifter som ska göras under veckan och uppskattar tiden det tar att göra dessa. En analys av föregående vecka görs också i sprinten där man skrev en kort text om vad som gick bra och vad som gick mindre bra. Veckan inleddes med ett handledarmöte där vi gick igenom vad var och en i gruppen hade gjort under föregående iteration och vad vi skulle göra under nuvarande iteration.  

Projektet var uppdelat i fyra faser; inception, elaboration, construction och transition. I inception skrevs en vision, en risklista skapades och  product backlog började skrivas. Under elaboration utökades product backlog, riskerna började hanteras och en testplan skrevs. Implementation påbörjades. I delen för construction låg fokus på fortsatt implementation. Till sist, i transition, hårdtestades applikationen och kvalitén säkerställdes. All dokumentation skrevs också klart.

200 timmar under tio veckor har avsatts till projektet. 

### Tekniker
All utveckling har skett i Visual Studio Code. I min backend har jag använt mig utav Node.js med Express.js som serverramverk. För att lagra min data användes MongoDB. React används i klienten tillsammans med React-bootstrap som är motsvarigheten till bootstrap fast allt är byggt i komponenter. För att produktionssätta applikationen valde jag att använda mig av Heroku. Nedan listas alla tekniker.

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



-   **Sammanfattning:**  Här knyter du ihop din rapport och drar slutsatser av dina erfarenheter och lärdomar. Blicka framåt och se utvecklingspotential hos både dig själv och din produkt.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjE3NTI0MzMyLDEzNjE5MzAyNDIsMTk4ND
M2ODI4MywxMTE3Nzc5NjYzLDczMzM2MDM3LC0yMDI0Nzk4NDA3
LC01MTc1MzQ3MTQsLTEyODMzMjI4NzcsLTc1NTg1NjI5OSwtNj
AxNTQ5OTMxLC0xOTM3MzgzNDg5LDIwNTE1Mjk3OTBdfQ==
-->