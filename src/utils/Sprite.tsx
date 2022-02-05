import React from "react";

const Sprite = ({
                    filename,
                    x,
                    y,
                    width,
                    height
                }: { filename: string, x: number, y: number, width: number, height: number }) => {
    if (!filename) {
        return null;
    }

    const style = {
        backgroundImage: `url(${filename})`,
        backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
        backgroundRepeat: 'no-repeat',
        width,
        height
    };

    return <div style={style} className="mb-6 mx-auto"/>;
}

export default Sprite;