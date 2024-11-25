export interface ChatComment 
{
    id: number;
    createdAt: Date;
    //createdAt: string;
    body: string;
    username: string;
    displayName: string;
    image: string;

}