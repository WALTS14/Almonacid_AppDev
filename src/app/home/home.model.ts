export class User{
        id:string;
        nbaPlayer: string;
        playerNumber: number;
        nbaTeam: string[];
        draftDate: Date;
        isActive: boolean = false;
    constructor (id: string = '', nbaPlayer: string = '', playerNumber: number = 0, nbaTeam: string[] = [],
                 draftDate: Date = new Date(), isActive: boolean = false){
       this.id = id;
       this.nbaPlayer = nbaPlayer;
       this.playerNumber = playerNumber;
       this.nbaTeam = nbaTeam;
       this.draftDate = draftDate;
       this.isActive = isActive;
    }
 
 }
 
    
 export interface iUser{
    id:string;
    nbaPlayer: string;
    playerNumber: number;
    nbaTeam: string[];
    draftDate: Date;
    isActive: boolean;
 }
 