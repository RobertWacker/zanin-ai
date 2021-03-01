// Уведомляет о дне рожденье участника чата

export interface Birthdays {
    username: string;
    date: string;
}
export const birthdaysList: Birthdays[] = [
    {
        username: 'Константин Каланчин',
        date: '20.05.1992'
    },
];

export class BirthdayService {

}