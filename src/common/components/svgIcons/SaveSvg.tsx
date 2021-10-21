import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const SaveSvg = (props: svgProps): JSX.Element => {
    const { size = 24, color = 'currentColor' } = props

    return (
        <svg
            {...defaultProps}
            {...props}
            width={size}
            height={size}
            stroke={color}
        >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
        </svg>
    )
}

export default SaveSvg
