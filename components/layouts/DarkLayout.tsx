import { FC } from "react"

interface P {
    children: React.ReactNode
}

export const DarkLayout: FC<P> = ( {children} ) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px'
        }}>

            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}