// Typy
type User = {
    name: string;
    age: number;
    position: ProjectManager;
    seniority: string;
    home: Home;
};
type Home = {
    state: string;
    city: string;
};
type ProjectManager = {
    salary: number;
    startTime: Date;
};

// Kľúče User
type UserKeys = keyof User;

// Scan typ pre voliteľné hodnoty
type Scan<T> = { [K in keyof T]?: T[K] };

// Použitie Conditional Types
type IsNumber<T> = T extends number ? true : false;

type Example1 = IsNumber<number>; // true
type Example2 = IsNumber<string>; // false

// Funkcia s `keyof` a validáciou
function getUserProperty<T, K extends keyof T>(user: T, key: K): T[K] {
    return user[key];
}

const user: User = {
    name: "John",
    age: 30,
    position: { salary: 2560, startTime: new Date() },
    seniority: "Senior",
    home: { state: "California", city: "San Francisco" },
};

// Použitie funkcie getUserProperty
const userName = getUserProperty(user, "name");
console.log(`User name: ${userName}`);

// Použitie typu Scan
const scannedUser: Scan<User> = { name: "John" };

// Užívateľský Type Guard s `typeof`
function isString(value: unknown): value is string {
    return typeof value === "string";
}

// Kontrola a práca s objektom
function processValue(value: unknown) {
    if (isString(value)) {
        console.log(`String má dĺžku: ${value.length}`);
    } else {
        console.log("Hodnota nie je string.");
    }
}

processValue(userName);

// Použitie mapped types na transformáciu typu
type ReadonlyUser = { readonly [K in keyof User]: User[K] };
const readonlyUser: ReadonlyUser = {
    ...user,
};
// readonlyUser.name = "Doe"; // Chyba: Nemôže sa meniť.

// Check Length funkcia
function checkLength<T extends { length: number }>(item: T) {
    console.log("Length of item is: " + item.length);
}
checkLength([1, 2, 3, 4, 5]);

// Funkcia s podmienkami na základe hodnôt kľúčov
function processNumberKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj).filter((key) => {
        const value = obj[key as keyof T];
        return typeof value === "number";
    }) as (keyof T)[];
}

const numberKeys = processNumberKeys(user);
console.log("Number keys in user: ", numberKeys);

const user2: User = {
    name: "Jane",
    age: 28,
    position: { salary: 8888, startTime: new Date() },
    seniority: "Senior",
    home: { state: "California", city: "San Francisco" },
};

const array = [user, user2];
const division = (a: User, b: User) => Math.abs(a.position.salary - b.position.salary);
console.log('The difference in salary is: ' + division(user, user2) + ' EUR');

