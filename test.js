process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', function (chunk) {
    input += chunk;
});

process.stdin.on('end', function () {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);
    let output = [];
    let lineIndex = 1;

    for (let i = 0; i < T; i++) {
        if (lineIndex >= lines.length) {
            output.push('-1');
            continue;
        }

        const X = parseInt(lines[lineIndex]);
        lineIndex++;

        if (lineIndex >= lines.length) {
            output.push('-1');
            continue;
        }

        const Yn = lines[lineIndex].trim().split(/\s+/).map(Number);
        lineIndex++;

        if (Yn.length !== X) {
            output.push('-1');
            continue;
        }

        let sum = 0;
        for (let y of Yn) {
            if (y <= 0) {
                sum += Math.pow(y, 4);
            }
        }

        output.push(sum.toString());
    }

    console.log(output.join('\n'));
});
