class Utils {

    static canvas(width = 100, height = 100, fill = "white") {
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        Utils.fill(context, fill);
        return canvas;
    }

    static fill(canvasOrContext, color) {
        let context = Utils.getContext(canvasOrContext);
        context.fillStyle = color;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }

    static toData(canvasOrContext, { type = "image/png", quality = 1, asRaw = false } = {}) {
        let context = Utils.getContext(canvasOrContext);
        let base64 = context.canvas.toDataURL(type, quality);
        if (asRaw) {
            base64 = base64.split(';base64,')[1];
        }
        return base64;
    }

    static getContext(canvasOrContext) {
        return canvasOrContext instanceof HTMLCanvasElement
            ? canvasOrContext.getContext("2d")
            : canvasOrContext;
    }

}