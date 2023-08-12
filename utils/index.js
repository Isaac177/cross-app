export const checkImageUrl = (url) => {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(jpe?g|png|gif|bmp|webp)$', 'i');
        return pattern.test(url);
    }
};