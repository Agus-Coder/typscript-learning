import { subDays, format} from 'date-fns';

const date = new Date(1998, 1, 28); //0 enero, 1 febrero

const rta = subDays(date, 30) // sub Days resta dias a una fecha puntual
const str = format(rta, 'yyyy/dd/MM')

console.log(rta);
console.log(str);
