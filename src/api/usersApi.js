export const login = (name, passwd) => {
    return new Promise((resolve, reject) => {
        //Integrety check....
        localStorage.setItem("userName", name);
        resolve(true);
    });
}

export const getUser = () => {
    return new Promise((resolve, reject) => {
        let name=localStorage.getItem("userName");
        name?resolve({name}):resolve();
    });
}