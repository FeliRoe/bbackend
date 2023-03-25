const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const Anzeige = require('./datenstruktur/show')

const sequelize = require('./util/database');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

app.use('/show', require('./routes/show'));
app.use('/benutzer', require('./routes/benutzer'));
app.use('/interessenten', require('./routes/interessenten'));
app.use('/bilder', require('./routes/bilder'));


(async () =>{
  try {
    await sequelize.sync();
    const count = await Anzeige.count();
    if (count === 0) {
          //Beispiel 1:
          Anzeige.create({
            createdOn: 1667400075,
            createdBy: "Max Musterman",
            softwareVersion: "2022-1.3.2",
            customer: "Gut & Unbezahlbar GmbH",
            type: "house",
            address: "Beispielstraße 56",
            postal: 89522,
            city: "Heidenheim an der Brenz",
            size: 246,
            comment: "Ruhige Lage, mitten im Zentrum",
            shortHand: "Objekt AB-246"
          });
            //Beispiel 2:
            await Anzeige.create({
              createdOn: 1667400075,
              createdBy: "Frieda Fröhlich",
              softwareVersion: "3.4.2.6",
              customer: "Studentenbuden AG",
              type: "apartment",
              address: "Am bekannten Platz 28",
              postal: 89522,
              city: "Heidenheim an der Brenz",
              size: 34,
              comment: "Kleine Wohnung für Studenten, Möbiliert, Gute lage, Preiswert",
              shortHand: "Studenten Wohnung am bekannten Platz 28"
            });
            ////Beispiel 3:
            await Anzeige.create({
              createdOn: 1667400075,
              createdBy: "Manfred Stein",
              softwareVersion: null,
              customer: "Stein Bauexperte GmbH",
              type: "construction-site",
              address: "Straße am Fluss 1",
              postal: 89522,
              city: "Heidenheim an der Brenz",
              size: 600,
              comment: "Neues Baugebiet, Platz für Wohnungen oder Einfamilienhäuser, Fertigstellung 2076, Preis 750.000",
              shortHand: "Bauplatz BP-2022-01"
            });
            //Eigenes Beispiel:
            await Anzeige.create({
              createdOn: 1667400075,
              createdBy: "Felicitas Rösch",
              softwareVersion: null,
              customer: "ADAC e.V.",
              type: "apartment",
              address: "Schmellerstraße 17",
              postal: 80337,
              city: "München",
              size: 70,
              comment: "Schöne Wohnung mitten in der Isarvorstadt",
              shortHand: "Theresienwiese ums Eck"
            });

          console.log("Erfolg! 4 Inserate wurden angelegt!");
        } else {
          console.log("Error: Tabelle ist nicht leer! Container in Docker zuerst löschen.");
        }
      } catch (err) {
        console.error('Bitte stellen Sie eine Verbindung zur Datenbank her:', err);
      }
      console.log("Backend ist bereit! Frontend starten nicht vergessen :) (Neue Konsole: cd frontend/npm start)");
      app.listen(process.env.EXTERNAL_PORT || 6969);
    })()