export default function Button({
    children,
    variant="primary",
    className="",
    type="submit",
    disabled=false,
    ...props
    //using props allow me to add more properties . 
}) {
    return(
        <button
        //trim remove extra space before and after the text, not between multiple words .
        className={`button button-${variant} ${className}`.trim()}
        type={type}
        disabled={disabled}
        //if i want more property then it will come as props over here
        {...props}
        
        >
            {children}
        </button>

    );
    
}