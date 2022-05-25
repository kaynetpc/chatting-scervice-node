export interface IMessageData {
    contents: string;
    read_at?: Date | string;
    from_user: string;
    to_user: string;
    read_status?: boolean
    conversationId: string
}
export interface IMassageAction {
    user_id: string;
    adversary_id: string;
}
