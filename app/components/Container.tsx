
type ContainerProps = {
    wrapperClasses?: string;
    classes?: string;
    children: React.ReactNode
}


function Container(props: ContainerProps) {

    const { children, wrapperClasses, classes } = props

    return (
        <div className={`wrapper ${wrapperClasses ? `${wrapperClasses}` : ''}`}>
            <div className={`container ${classes ? `${classes}` : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Container