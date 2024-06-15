import { IButton } from "../../shared/interfaces/IButton";
import './style.scss';

const Button: React.FC<IButton.props> = ({label,icon}) => {
    return (
        <div>
            <button className="buttonContainer">
                {label}
                <img
                    src={icon}
                    alt="arrow icons"
                    className="buttonImg"
                />
            </button>
        </div>
    )
}

export default Button
