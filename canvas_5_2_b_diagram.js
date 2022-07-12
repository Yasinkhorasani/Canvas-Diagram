'use strict';

const diagram = {

    // Diagram zeichnen
    render(c, data, mouseY = -1) {
        let ctx = c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);

        // Balken untereinander
        let barHeight = (c.height + padding) / data.length;

        let maxValue = -Infinity;
        let minValue = Infinity;
        for (let i = 0; i < data.length; i++) {
            maxValue = (data[i] > maxValue) ? data[i] : maxValue;
            minValue = (data[i] < minValue) ? data[i] : minValue;
        }

        for (let i = 0; i < data.length; i++) {

            // Befindet sich die Maus zwischen der Oberkante und der Unterkante des aktuellen Balkens
            let oberKante = barHeight * i;
            let unterkante = oberKante + barHeight;
            let isMouseOver = (mouseY > oberKante) && (mouseY < unterkante);

            // Balkenfarbe abhängig davon bestimmen, ob die Maus sich auf dem Balken befindet
            if (isMouseOver) {
                ctx.fillStyle = `#000`;
            } else {
                // hue: rot ist 0, grün ist 120
                let hue = (data[i] - minValue) / (maxValue - minValue);
                hue = hue ** 5;
                hue *= 120;
                hue = 120 - hue;
                ctx.fillStyle = `hsl(${~~hue},100%,40%)`;
            }


            ctx.fillRect(
                0,
                barHeight * i,
                c.width / maxValue * data[i],
                barHeight - padding
            )

            // Wert in den Balken schreiben
            if (isMouseOver) ctx.fillStyle = '#fff';
            else ctx.fillStyle = '#000';

            ctx.textAlign = 'left';
            ctx.font = `${barHeight * .7}px arial`;
            ctx.fillText(
                data[i],
                3,
                barHeight * i + (barHeight - padding - 3)
            )

        }
    },
    create(data) {
        const c = document.createElement('canvas');
        c.width = 300;
        c.height = 300;
        elements.main.appendChild(c);

        diagram.render(c, data);

        c.addEventListener('mousemove', evt => renderDiagram(c, data, evt.layerY));
        c.addEventListener('mouseleave', evt => renderDiagram(c, data));

    }
}