import React from 'react'

type LoaderProps = {
    message?: string
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-background text-foreground">
            <div className="flex flex-col items-center gap-6 p-8 rounded-2xl border bg-card shadow-sm">

                <div className="h-12 w-12 rounded-full border-4 border-muted border-t-primary animate-spin" />

                <div className="text-center space-y-1">
                    <h2 className="text-lg font-semibold">
                        Loading
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {message || "Please wait while we load the data."}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Loader