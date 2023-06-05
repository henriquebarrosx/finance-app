import Image from "next/image"

interface Props {
    onClick(): void
    picture: string
}

export function AvatarSide({ onClick, picture }: Props) {
    return (
        <button onClick={() => onClick()}>
            <Image
                width={40}
                height={40}
                src={picture}
                loading='lazy'
                alt='Foto do perfil'
                className='rounded-full w-10 h-10'
            />
        </button>
    )
}