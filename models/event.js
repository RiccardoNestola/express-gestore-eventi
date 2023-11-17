const fs = require('fs');
const path = require('path');

class Event {

    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    // funzione che pesca la cartella dove si trova il db
    static get filePath() {
        return path.join(__dirname, '..', 'db', 'events.json');
    }

    // funzione che legge il db tramite la funzione sopra filePath()
    static readData() {
        const fileData = fs.readFileSync(this.filePath);
        return JSON.parse(fileData);
    }

    // funzione che scrive sul db sempre tramite filePath() e lo formatta
    static writeData(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }

    // funzione che fornisce tutto il db tramite readData() - (questa è richiamata dal controller Index)
    static getAll() {
        return this.readData();
    }

    // funzione che aggiunge un evento utilizzando readData e writeData
    static add(event) {
        const data = this.readData();
        data.push(event);
        this.writeData(data);
        return true;
    } 

    /* static add(event) {
        try {
            const data = this.readData();
            data.push(newEvent);
            this.writeData(data);
            return true;
        } catch (error) {
            console.error('Errore durante l\'aggiunta dell\'evento:', error);
            return false;
        }
    } */






    // funzione che trova un evento tramite id (http://localhost:3000/events/1/)
    static findById(id) {
        const data = this.readData();
        return data.find(event => event.id === id);
    }

}

module.exports = Event;
