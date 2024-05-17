window.open = function (open) {
    return function (url, name, features) {
        window.top.location = url;
        return false;
    };
}(window.open);