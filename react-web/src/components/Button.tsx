import './Button.css';

type ButtonProps = {
	style?: object;
	title: string;
	onClick?:()=>void;
	isFilled?:boolean;
	disabled?:boolean;
};

const Button = ({
	style,
	title,
	onClick,
	isFilled=true,
	disabled=false,
}:ButtonProps)=>{
	if(isFilled) {
		return (
			<button style={style} className='filledContainer' onClick={onClick} disabled={disabled}>
				<p className='filledTitle'>{title}</p>
			</button>
		);
	} else {
		return (
			<button style={style} className='container' onClick={onClick} disabled={disabled}>
				<p className='title'>{title}</p>
			</button>);	

	}
};

export default Button;