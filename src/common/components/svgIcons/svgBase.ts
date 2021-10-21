import { SVGProps } from 'react'

export type svgProps = SVGProps<SVGSVGElement> & {
    size?: number
    color?: string
    onClick?: Function
    className?: string
}

export const defaultProps: svgProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: ' 0 0 24 24',
    fill: 'none',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
}
