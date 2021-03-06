
var SONG = 0;
var SongType = 0;
var SongList = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

}

function getStaveNotesForBar(attributes) {

    var notes = [];

    var keys = attributes.songs[attributes.songNumber].keys[attributes.bar];
    var pattern = attributes.songs[attributes.songNumber].pattern[attributes.bar];


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
        else if (n[1] == ("n")) {
            if (pattern[i].endsWith("d")) {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }).addAccidental(0, new VF.Accidental("n")).addDotToAll());
            }
            else {
                notes.push(new VF.StaveNote({ clef: "treble", keys: [n], duration: pattern[i] }).addAccidental(0, new VF.Accidental("n")));
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



function renderBar(context, attributes) {

    var topbar = 40;
    var leftbar = ((attributes.bar) * 400) + 10;
    var stave;

    if (attributes.barCount > 0) {
        stave = new VF.Stave(leftbar, topbar, 400);
    } else {
        stave = new VF.Stave(leftbar, topbar, 800);
    }

    var notes = getStaveNotesForBar(attributes);

    if (attributes.bar == 0) {

        stave.addClef("treble");

        if (attributes.songs[attributes.songNumber].timeSignature != "") {
            stave.addTimeSignature(attributes.songs[attributes.songNumber].timeSignature);
        }
        stave.addKeySignature(attributes.songs[attributes.songNumber].keySignature);
    }

    stave.setContext(context).draw();

    var beams = VF.Beam.generateBeams(notes);
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach(function (b) { b.setContext(context).draw() })

}


function drawExercise() {

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
    attributes.songNumber = SONG - 1;


    var div = document.getElementById("boo");
    var title = document.getElementById("title");

    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }

    VF = Vex.Flow;
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    renderer.resize(1650, 200);
    var context = renderer.getContext();

    attributes.bar = 0;

    attributes.barCount = attributes.songs[attributes.songNumber].keys.length - 1;


    for (var i = 0; i <= attributes.barCount; i++) {
        attributes.bar = i;
        renderBar(context, attributes);
    }

    title.innerHTML = attributes.songs[attributes.songNumber].title;

}



window.onload = function () {
    drawExercise();
}

