
var SONG = 0;

var SongList = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

}

function getBarNotes(attributes) {

    var notes = [];

    var keys = attributes.songs[SONG - 1].keys[attributes.bar - 1];
    var pattern = attributes.songs[SONG - 1].pattern[attributes.bar - 1];


    for (var i = 0; i < pattern.length; i++) {

        var n = keys[i];

        if (pattern[i].includes("r")) {
            n = "b/4";
        }

        if (n[1] == ("#")) {
            if (pattern[i].endsWith("d")) {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }).addAccidental(0, new VF.Accidental("#")).addDotToAll());
            } else {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }).addAccidental(0, new VF.Accidental("#")));
            }
        }
        else if (n[1] == ("b")) {
            if (pattern[i].endsWith("d")) {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }).addAccidental(0, new VF.Accidental("b")).addDotToAll());
            }
            else {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }).addAccidental(0, new VF.Accidental("b")));
            }
        }
        else {
            if (pattern[i].endsWith("d")) {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }).addDotToAll());
            }
            else {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }));
            }
        }
    }

    return notes;
}



function createBar(context, attributes) {
    var topbar = (0 * 120) + 40;
    var leftbar = ((attributes.bar - 1) * 400) + 10;
    var stave = new VF.Stave(leftbar, topbar, 400);

    var notes = getBarNotes(attributes);

    if (attributes.count == 1) {
        stave.addClef("treble").addTimeSignature(attributes.songs[SONG - 1].timeSignature);
        stave.addKeySignature(attributes.songs[SONG - 1].keySignature);
    }

    stave.setContext(context).draw();

    var beams = VF.Beam.generateBeams(notes);
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach(function (b) { b.setContext(context).draw() })

}


function drawNotes() {

    SONG++;
    var attributes = {};

    loadSongs(attributes);

    document.getElementById("info").innerHTML = "Exercise " + SONG + " of " + attributes.songs.length;

    if (SONG > attributes.songs.length) {
        SONG = 1;
        document.getElementById("info").innerHTML = "Exercises reshuffled - Exercise " + SONG + " of " + attributes.songs.length;;
    }

    if (SONG == 1) {
        shuffle(attributes.songs);
        SongList = attributes.songs;
    }
    attributes.songs = SongList;

    var div = document.getElementById("boo");
    var title = document.getElementById("title");

    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }

    // if (localStorage.getItem( attributes.songs[SONG -1].id =)

    if (false) {
        title.innerHTML = "No exercises to play";
        document.getElementById("buttons").style.display = "none";
        return;
    }

    VF = Vex.Flow;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    renderer.resize(1650, 200);
    var context = renderer.getContext();


    attributes.count = 1;

    attributes.bar = 1;
    createBar(context, attributes);

    attributes.count++;

    attributes.bar = 2;
    createBar(context, attributes);

    title.innerHTML = attributes.songs[SONG - 1].title;

}


window.onload = function () {
    drawNotes();
}

