
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_+';
const colorNames = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']

export function getRandom(type: 'text' | 'tw-color') {
    switch (type) {
        case 'tw-color':
            let rand = Math.random()
            let colorIndex = Math.floor(rand * (colorNames.length - 1))
            let colorName = colorNames[colorIndex];
            let colorTemp = Math.floor(rand * 8 + 1) * 100;
            return colorName + '-' + colorTemp;

        case 'text':
        default:
            const s = [];
            while (s.length < 8) {
                let charIndex = Math.floor(Math.random() * (chars.length - 1));
                s.push(chars.charAt(charIndex))
            }
            return s.join('');
    }
}