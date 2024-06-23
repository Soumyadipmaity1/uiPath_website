import React from 'react'
import "./style.css";
export default function Button() {
    return (
        <div>
            <a target='_blank' href="https://youtu.be/flOPpM2Sr4k">
                <button class="cta flex items-center">
                    <span>UiPath Certification Guide Video</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </a>
        </div>

    )
}
