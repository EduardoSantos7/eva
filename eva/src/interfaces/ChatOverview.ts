export interface ChatOverview {
    id: string
    profile_name: string
    profile_image: string
    status?: string
    last_message?: string
}

export const defaultChatOverview = {
    id: "",
    profile_name: "",
    profile_image: "",
    status: "",
    last_message: "",
}