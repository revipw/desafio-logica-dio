let XP = 6001;
let player_name = "John";

switch(true){
    case XP <= 1000:
        console.log("The hero named as " + player_name + "is on level Iron!");
        break;

    case XP >= 1001 && XP <= 2000:
        console.log("The hero named as " + player_name + "is on level Bronze!");
        break;

    case XP >= 2001 && XP <= 5000:
        console.log("The hero named as " + player_name + "is on level Silver!");
        break;

    case XP >= 5001 && XP <= 7000:
        console.log("The hero named as " + player_name + "is on level Gold!");
        break;

    case XP >= 7001 && XP <= 8000:
        console.log("The hero named as " + player_name + "is on level Platinum!");
        break;

    case XP >= 8001 && XP <= 9000:
        console.log("The hero named as " + player_name + "is on level Ascendent!");
        break;

    case XP >= 9001 && XP <= 10000:
        console.log("The hero named as " + player_name + "is on level Imortal!");
        break;

    case XP >= 10001:
        console.log("The hero named as " + player_name + "is on level Radiant!");
        break;
    
    default:
        console.log("We couldn't find " + player_name + "'s XP data.");
        break;
}

