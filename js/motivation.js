// Array con 100 frasi motivazionali
const motivationalQuotes = [
    "Non smettere mai di sognare.",
    "Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno.",
    "Credi in te stesso e in tutto ciò che sei.",
    "Il dolore che senti oggi è la forza che sentirai domani.",
    "La forza non viene da ciò che puoi fare. Viene dal superare ciò che pensavi di non poter fare.",
    "Il segreto del successo è la costanza nei propositi.",
    "Oggi è un buon giorno per iniziare qualcosa di nuovo.",
    "Le grandi cose non vengono mai da zone di comfort.",
    "Sii più forte delle tue scuse.",
    "Non è mai troppo tardi per essere ciò che avresti potuto essere.",
    "Fai oggi qualcosa per cui il tuo futuro ti ringrazierà.",
    "Il successo non è definitivo, il fallimento non è fatale: è il coraggio di continuare che conta.",
    "Continua a muoverti in avanti.",
    "Credi che puoi e sei già a metà strada.",
    "La strada per il successo è in costruzione continua.",
    "Ogni grande impresa inizia con la decisione di provarci.",
    "Non cercare la perfezione, cerca il miglioramento.",
    "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.",
    "La disciplina è il ponte tra obiettivi e risultati.",
    "Il cambiamento inizia alla fine della tua zona di comfort.",
    "Non aspettare. Il momento non sarà mai quello giusto.",
    "Le sfide sono ciò che rendono la vita interessante.",
    "Il coraggio è resistenza alla paura, dominio della paura, non assenza di paura.",
    "Sii il cambiamento che vuoi vedere nel mondo.",
    "Non arrenderti, il dolore che provi oggi è la forza che sentirai domani.",
    "Il tempo che sprechi oggi è il tempo che rimpiangerai domani.",
    "Non lasciare che i tuoi sogni siano sogni.",
    "La vita è breve, vivi i tuoi sogni.",
    "Ogni passo in avanti è un passo verso il successo.",
    "Le difficoltà spesso preparano le persone ordinarie a un destino straordinario.",
    "Se puoi sognarlo, puoi farlo.",
    "Sii coraggioso abbastanza da vivere la vita dei tuoi sogni.",
    "La vita inizia alla fine della tua zona di comfort.",
    "Il segreto per andare avanti è iniziare.",
    "Tu sei più forte di quanto pensi.",
    "Non smettere mai di credere in te stesso.",
    "Non aspettare l'opportunità, creala.",
    "Il successo è una scala, non un ascensore.",
    "La tua vita è il risultato delle scelte che fai.",
    "Non fermarti finché non sei fiero di te stesso.",
    "Le grandi cose richiedono tempo.",
    "Cambia i tuoi pensieri e cambierai il tuo mondo.",
    "Dai sempre il tuo meglio.",
    "La perseveranza è la chiave del successo.",
    "Non aver paura di fallire, abbi paura di non provarci.",
    "Non puoi cambiare il passato, ma puoi iniziare oggi a cambiare il futuro.",
    "Non è mai troppo tardi per diventare quello che vuoi essere.",
    "Il tuo futuro è creato da ciò che fai oggi, non domani.",
    "Le cose buone arrivano a coloro che aspettano, ma le cose migliori arrivano a coloro che agiscono.",
    "La vera motivazione viene dall'interno.",
    "Tu sei l'artefice del tuo destino.",
    "Il duro lavoro batte il talento, quando il talento non lavora duramente.",
    "I sogni non funzionano a meno che tu non lavori per realizzarli.",
    "Credi in te stesso e tutto è possibile.",
    "Non guardare indietro, stai andando nella direzione giusta.",
    "Ogni giorno è un'opportunità per migliorare.",
    "Non arrenderti mai, perché è solo il primo passo verso il successo.",
    "Non permettere che le paure ti trattengano dal fare ciò che sai essere giusto.",
    "Il successo non arriva dall'oggi al domani, ma con il tempo e la dedizione.",
    "Non c'è successo senza sacrificio.",
    "Vivi la vita che hai sempre immaginato.",
    "Non smettere mai di cercare, non smettere mai di crescere.",
    "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno.",
    "La motivazione ti porta a iniziare. L'abitudine ti porta avanti.",
    "Non è mai troppo tardi per ricominciare.",
    "Ogni mattina è un'opportunità per ricominciare.",
    "La vita è breve. Fai ciò che ami.",
    "Non smettere mai di imparare, perché la vita non smette mai di insegnare.",
    "Il cambiamento inizia con una sola decisione.",
    "Le scuse non bruciano calorie.",
    "Non temere il fallimento. Temi di non provarci mai.",
    "Le grandi cose richiedono tempo e pazienza.",
    "La vera forza viene dal superare gli ostacoli.",
    "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.",
    "Non smettere mai di sognare, non smettere mai di credere.",
    "Il successo non è per chi corre veloce, ma per chi non si ferma mai.",
    "Non aspettare che le cose accadano. Fai che accadano.",
    "Credi in te stesso e sarai inarrestabile.",
    "Sii positivo, sii paziente, sii persistente.",
    "Non c'è ascensore per il successo, devi fare le scale.",
    "Il successo inizia nella tua mente.",
    "Non mollare mai, perché non sai mai quanto sei vicino al successo.",
    "La vita è troppo breve per rimandare i tuoi sogni.",
    "Sei capace di cose straordinarie.",
    "Ogni giorno è una nuova opportunità per cambiare la tua vita.",
    "Il tempo migliore per piantare un albero era 20 anni fa. Il secondo momento migliore è adesso.",
    "Il fallimento è solo l'opportunità di ricominciare con più esperienza.",
    "Non smettere finché non sei fiero di te stesso.",
    "Non c'è niente di più potente di una mente determinata.",
    "Tu sei l'unico limite delle tue capacità.",
    "La vita è un'avventura, vivi ogni giorno come se fosse l'ultimo.",
    "Sii la migliore versione di te stesso.",
    "Non guardare indietro, stai andando nella direzione giusta.",
    "Non smettere mai di imparare, perché la vita non smette mai di insegnare.",
    "La motivazione ti porta a iniziare. L'abitudine ti porta avanti.",
    "Tu sei l'artefice del tuo destino."
];

// Funzione per mescolare un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Seleziona 24 frasi casuali ogni giorno
function selectDailyQuotes() {
    shuffleArray(motivationalQuotes);
    return motivationalQuotes.slice(0, 24);
}

// Mostra la frase motivazionale corrispondente all'ora corrente
function showMotivationalQuote(quotes) {
    const currentHour = new Date().getHours(); // Ottiene l'ora corrente (0-23)
    document.getElementById('motivation').textContent = quotes[currentHour];
}

// Inizializzazione
function initMotivation() {
    const dailyQuotes = selectDailyQuotes(); // Seleziona 24 frasi per oggi
    showMotivationalQuote(dailyQuotes); // Mostra la frase dell'ora corrente

    // Aggiorna la frase ogni ora
    setInterval(() => {
        showMotivationalQuote(dailyQuotes);
    }, 3600000); // 3600000 ms = 1 ora
}

// Avvia la funzione di motivazione quando la pagina è caricata
document.addEventListener("DOMContentLoaded", initMotivation);