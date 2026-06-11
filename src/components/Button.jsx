import './Button.css';

function Button({label , onClick, disabled , isOn}){
    return (
        <button  className={`btn ${isOn ? 'light-btn' : 'dark-btn'}`} onClick ={onClick} disabled={disabled}>{label}</button>
    )
};
export default Button;  