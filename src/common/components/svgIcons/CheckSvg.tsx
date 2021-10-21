import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const CheckSvg = (props: svgProps): JSX.Element => {
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
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </>
    )
}

export default CheckSvg
