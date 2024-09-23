import React from 'react';
import './BaseButton.css';

export default function BaseButton({ label, color, onClick }) {
    return (
        <button
            className={`base_btn ${color}`}
            onClick={() => onClick()}
        >
            {label}
        </button>
    )
}
