type MenuOptions = ""|"all"|"dog"|"cat"|"fish";

export const createMenuObject = (menu: MenuOptions) => {
    let object = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if (menu !== "") {
        object[menu] = true;
    }
    return object
}