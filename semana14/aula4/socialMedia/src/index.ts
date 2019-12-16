import {NormalPostCreator} from "./normalPostCreator";
import * as moment from 'moment';
import {ErrorPrinter} from "./errorPrinter";


const post1 = new NormalPostCreator("Yoda", "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", "Fear not", "05/04/2019");
console.log(post1.create("Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", "Yoda" ));