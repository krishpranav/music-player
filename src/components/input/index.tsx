import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './styles.css';

type InputProps = {
    type?:        string;
    onChange?:    Function;
    placeholder?: string;
}



export default Input;