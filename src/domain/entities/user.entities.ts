export type UserProps = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date
}

export class User {
    public readonly id: string
    public readonly props: Omit<UserProps, 'id' | 'createdAt'>
    public readonly createdAt: Date

    private constructor(props: UserProps) {
        this.id = props.id

        this.props = Object.freeze({
            name: props.name,
            email: props.email,
            passwordHash: props.passwordHash,
        })
        this.createdAt = props.createdAt || new Date()
    }

    public static create(props: UserProps): User {
        return new User(props)
    }


    public changePassword(newPasswordHash: string): User {
        if (newPasswordHash === this.props.passwordHash) {
            throw new Error("New password cannot be the same as the old one.")
        }

        return new User({
            ...this.props,
            id: this.id,
            createdAt: this.createdAt,
            passwordHash: newPasswordHash,
        })
    }
}