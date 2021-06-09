import './styles.css';

type ButtonProps = {
    size?:     number;
    active?:   boolean,
    onClick?:  Function;
    children?: React.ReactNode;
}