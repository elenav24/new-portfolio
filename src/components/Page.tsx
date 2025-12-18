import './Page.css'

interface PageProps {
    color: string;
    children: React.ReactNode;
}

export default function Page({ color, children }: PageProps) {
    return (
        <div className='page' style={{ backgroundColor: color }}>
            {children}
        </div>
    )
}
