// JavaScript Document
// auteur: Sanne 't Hooft

/* JE KEY (SLEUTEL) */
// Google vraagt om een KEY (sleutel/code) als je een eigen kaart aan je site wilt toevoegen
// Je kunt jouw KEY aanvragen op https://developers.google.com/maps/documentation/javascript/
// Nb. Je hebt een google account nodig om een KEY aan te vragen
// Vervang vervolgens onderstaande KEY door jouw eigen KEY
var myMapKey = '';

/* JE EIGEN MARKER */
// Je kunt een eigen marker gebruiken voor de locaties op je kaart
// De marker is het plaatje dat naar de locatie wijst
// Voeg jouw plaatje toe aan de folder myMapsJS/images
// Vervang vervolgens hieronder 'marker.svg' door de naam van jouw plaatje

// Nb. Als je geen eigen marker wilt, kun je de hele onderstaande regel deleten.
var myMapImage = 'marker.svg';

/* DE STARTLOCATIE */
// Je kunt kiezen of het middelpunt van de kaart in het midden is van alle markers of dat het midden van de kaart de huidige locatie is.
// Om voor het midden van de markers te keizen - vul 'center in'.
// Om voor de huidige locatie te kiezen - vul onderstaand 'gps in'.
// Nb. Het bepalen van de huidige locatie lukt niet altijd - dan wordt toch voor het midden van de markers gekozen.
var myMapStartLocation = 'gps';

/* DE LOCATIES OP JE KAART */
// Onderstaand de lijst met locaties die op de kaart getoond worden.
// Elke locatie bestaat uit 4 delen:
// de titel/naam van de locatie
// de GPS positie van de locatie
// een korte omschrijving van de locatie (optioneel)
// een link naar een pagina van de locatie (optioneel)
// Je kunt de voorbeeld-info in de lijst vervangen door de info van jouw locaties
// Als je meer locaties hebt, kun je extra blokken kopieren.
// Als je minder locaties hebt, kun je de overbodige blokken verwijderen

/* De titel/naam van de locatie */
// De naam van je locatie - pas op met speciale tekens als ' en /

/* De GPS positie van de locatie */
// De GPS positie kun je als volgt vinden:
// Ga naar https://www.google.nl/maps
// Zoek de locatie die je op jouw kaart wilt opnemen - die wordt dan op de kaart getoond.
// Rechtermuisklik op de marker van de locatie.
// Kies in het menu voor 'What's here?'.
// Er verschijnt nu een klein window met daarin o.a. de GPS positie - die kun je kopieren en in de lijst opnemen.

/* Een korte omschrijving van de locatie (optioneel) */
// De omschrijving je locatie - pas op met speciale tekens als ' en /
// De omschrijving is optioneel. Je mag hem leeglaten - laat de komma op het einde wel staan.

/* Een link naar een pagina van de locatie (optioneel) */
// De url waar meer info over de locatie te vinden is.
// De url kan zowel naar een pagina binnen je eigen site verwijzen als naar een externe website.
// Voor een interne link kun je een relatief path gebruiken.
// De url is optioneel. Je mag hem leeglaten.
