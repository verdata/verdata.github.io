function loadSongs(attributes) {

    attributes.songs = [];

    attributes.songs.push({
        title: "Haydn: Poco adagio (bars 14/15)",
        timeSignature: "4/4",
        keySignature: "C",
        keys: [["b/4", "e/5", "d/5", "e/5", "f/5"], ["g/5", "a/5", "f/5", "d/5", "c/5", "b/4"]],
        pattern: [["qr", "q", "qd", "16", "16"], ["8", "8", "8", "8", "q", "qr"]]
    });
    attributes.songs.push({
        title: "Haydn: Poco adagio (bars 11/12)",
        timeSignature: "4/4",
        keySignature: "C",
        keys: [["e/5", "e/5", "f#/5", "f#/5", "g/5"], ["g/5", "b/4"]],
        pattern: [["qd", "8", "q", "8", "8"], ["h", "hr"]]
    });
    attributes.songs.push({
        title: "Schubert: Entr'acte (bars 29/30)",
        timeSignature: "2/4",
        keySignature: "F",
        keys: [["a/5", "e/5", "e/5"], ["f/5", "c/6", "a/5", "f/5"]],
        pattern: [["q", "8", "8"], ["8", "8", "8", "8"]]
    });
    attributes.songs.push({
        title: "Schubert: Entr'acte (bars 7/8)",
        timeSignature: "2/4",
        keySignature: "F",
        keys: [["d/5", "g/5", "f#/5"], ["g/5", "a/5", "b/5"]],
        pattern: [["8", "q", "8"], ["q", "8", "8"]]
    });

   

    attributes.songs.push({
        title: "van Eyke: Doen Daphne (bars 19/20)",
        timeSignature: "3/4",
        keySignature: "C",
        keys: [["c/5", "d/5", "e/5", "f/5"], ["g/5", "e/5", "c/5"]],
        pattern: [["qd", "8", "8", "8"], ["q", "q", "q"]]
    });
    attributes.songs.push({
        title: "van Eyke: Doen Daphne (bars 27/28)",
        timeSignature: "3/4",
        keySignature: "C",
        keys: [["d/4", "e/4", "f/4", "g/4", "e/4"], ["d/4"]],
        pattern: [["8", "8", "8", "8", "q"], ["hd"]]
    });
    attributes.songs.push({
        title: "van Eyke: Onder de Linde groene (bars 11/12)",
        timeSignature: "4/4",
        keySignature: "C",
        keys: [["d/5", "e/5", "f/5", "d/5", "e/5", "e/5"], ["d/5", "e/5", "f/5", "d/5", "e/5", "f/5", "g/5"]],
        pattern: [["8", "8", "8", "8", "q", "q"], ["8", "8", "8", "8", "8", "8", "q"]]
    });
    attributes.songs.push({
        title: "van Eyke: Onder de Linde groene (modo 2 bars 9/10)",
        timeSignature: "4/4",
        keySignature: "C",
        keys: [["g/4", "a/4", "b/4", "g/4", "c/5", "c/5"], ["e/4", "d/4", "e/4", "f/4", "g/4", "a/4", "b/4"]],
        pattern: [["8", "8", "8", "8", "q", "q"], ["8", "8", "8", "8", "q", "8", "8"]]
    });
    attributes.songs.push({
        title: "van Eyke: Onder de Linde groene (modo 2 bars 14/15)",
        timeSignature: "4/4",
        keySignature: "C",
        keys: [["g/4", "f/4", "g/4", "a/4", "b/4", "c/5", "d/5"], ["f/4", "e/4", "f/4", "g/4", "a/4", "b/4", "c/5"]],
        pattern: [["8", "8", "8", "8", "8", "8", "q"], ["8", "8", "8", "8", "8", "8", "q"]]
    });

    /*
    attributes.songs.push({
        title: "van Eyke: Al hebben (modo 2 bars 1/2)",
        timeSignature: "4/4",
        keySignature: "F",
        keys: [["g/4", "a/4", "b/4", "c/5", "a/4", "f/4", "g/4", "a/4"], ["b/4", "a/4", "b/4", "c/5", "d/5"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8"], ["8", "8", "8", "8", "h"]]
    });


    attributes.songs.push({
        title: "van Eyke: Al hebben (modo 2 bars 3/4)",
        timeSignature: "4/4",
        keySignature: "F",
        keys: [["d/5", "c/5", "d/5", "e/5", "f/5", "b/4", "c/5"], ["d/5", "b/4", "c/5", "f/4", "b/4", "b/4"]],
        pattern: [["8", "8", "8", "8", "q", "8", "8"], ["8", "8", "8", "8", "q", "qr"]]
    });

    attributes.songs.push({
        title: "van Eyke: Al hebben (modo 2 bars 5/6)",
        timeSignature: "4/4",
        keySignature: "F",
        keys: [["d/5", "b/4", "g/4", "d/5", "c/5", "a/4", "f/4", "c/5"], ["b/4", "d/5", "g/4", "b/4", "a/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8"], ["8", "8", "8", "8", "h"]]
    });

    attributes.songs.push({
        title: "van Eyke: Al hebben (modo 2 bars 7/8)",
        timeSignature: "4/4",
        keySignature: "F",
        keys: [["g/4", "a/4", "b/4", "c/5", "d/5", "b/4", "c/5", "a/4"], ["b/4", "g/4", "d/5", "d/4", "g/4", "b/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8"], ["8", "8", "8", "8", "q", "qr"]]
    });

    attributes.songs.push({
        title: "van Eyke: Janneman en Alemoer (bars 13/14)",
        timeSignature: "4/4",
        keySignature: "F",
        keys: [["g/4", "f#/4", "g/4", "a/4", "b/4", "a/4", "b/4", "c/5"], ["d/5", "c/5", "d/5", "eb/5", "d/5", "g/5"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8"], ["8", "8", "8", "8", "q", "q"]]
    });

    attributes.songs.push({
        title: "van Eyke: Janneman en Alemoer (bars 18/19)",
        timeSignature: "4/4",
        keySignature: "F",
        keys: [["f/5", "g/5", "f/5", "e/5", "d/5", "c/5", "d/5", "e/5"], ["f/5", "g/5", "f/5", "eb/5", "d/5", "b/4", "c/5", "a/4"]],
        pattern: [["8d", "16", "8", "8", "8", "8", "8", "8"], ["8d", "16", "8", "8", "8", "8", "8", "8"]]
    });

*/

    attributes.songs.push({
        title: "G Major Apreggio",
        timeSignature: "",
        keySignature: "G",
        keys: [["d/6", "b/5", "g/5", "d/6", "b/5", "g/5", "d/5", "b/4", "g/4", "d/5", "b/4", "g/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]]
    });

    attributes.songs.push({
        title: "F Major Apreggio",
        timeSignature: "",
        keySignature: "F",
        keys: [["c/6", "a/5", "f/5", "c/6", "a/5", "f/5", "c/5", "a/4", "f/4", "c/5", "a/4", "f/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]]
    });

    attributes.songs.push({
        title: "Bb Major Apreggio",
        timeSignature: "",
        keySignature: "Bb",
        keys: [["b/4", "d/5", "f/5", "b/5", "f/5", "d/5", "b/4", "f/4", "d/5", "b/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "qd"]]
    });

/*
    attributes.songs.push({
        title: "C Major Apreggio",
        timeSignature: "",
        keySignature: "C",
        keys: [["c/5", "e/5", "g/5", "c/6", "g/5", "e/5", "c/5", "g/4", "e/5", "c/5"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "qd"]]
    });
    attributes.songs.push({
        title: "D Minor Apreggio",
        timeSignature: "",
        keySignature: "Dm",
        keys: [["d/5", "f/5", "a/5", "d/6", "a/5", "f/5", "d/5", "a/4", "f/5", "d/5"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "qd"]]
    });
    attributes.songs.push({
        title: "F Major Apreggio",
        timeSignature: "",
        keySignature: "F",
        keys: [["f/4", "a/4", "c/5", "f/5", "a/5", "c/6", "c/6", "a/5", "f/5", "c/5", "a/4", "f/4", "f/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "qd"]]
    });
    attributes.songs.push({
        title: "G Major Apreggio",
        timeSignature: "",
        keySignature: "G",
        keys: [["g/4", "b/4", "d/5", "g/5", "b/5", "d/6", "d/6", "b/5", "g/5", "d/5", "b/4", "g/4", "g/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "qd"]]
    });


    attributes.songs.push({
        title: "G Minor Apreggio",
        timeSignature: "",
        keySignature: "Gm",
        keys: [["g/4", "b/4", "d/5", "g/5", "b/5", "d/6", "d/6", "b/5", "g/5", "d/5", "b/4", "g/4", "g/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "qd"]]
    });
    attributes.songs.push({
        title: "A Minor Apreggio",
        timeSignature: "",
        keySignature: "Am",
        keys: [["a/4", "c/5", "e/5", "a/5", "c/6", "e/6", "e/6", "c/6", "a/5", "e/5", "c/5", "a/4", "a/4"]],
        pattern: [["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "qd"]]
    });
*/
}

