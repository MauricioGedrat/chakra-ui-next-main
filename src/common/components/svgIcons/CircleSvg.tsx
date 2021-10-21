import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const CircleSvg = (props: svgProps): JSX.Element => {
    const { size = 24, color = 'currentColor' } = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={size}
                height={size}
                stroke={color}
            >
                <circle cx="12" cy="12" r="10"></circle>
            </svg>
        </>
    )
}

export default CircleSvg
