import React from 'react'
import { useState } from 'react'
import AlertCircleSvg from './AlertCircleSvg'
import AlertTriangleSvg from './AlertTriangleSvg'
import BellSvg from './BellSvg'
import CheckSvg from './CheckSvg'
import CircleSvg from './CircleSvg'
import HelpCircleSvg from './HelpCircleSvg'
import InfoSvg from './InfoSvg'
import MenuSvg from './MenuSvg'
import MoreHorizontalSvg from './MoreHorizontalSvg'
import MoreVerticalSvg from './MoreVerticalSvg'
import PrintSvg from './PrintSvg'
import SaveSvg from './SaveSvg'
import SearchSvg from './SearchSvg'
import TrashSvg from './TrashSvg'
import UserSvg from './UserSvg'
import XSvg from './XSvg'

const ZShowAllIcons = () => {
    const [size, setSize] = useState(24)
    const [color, setColor] = useState('#333')

    return (
        <div style={{ backgroundColor: 'black' }}>
            <h1>
                <input
                    type="color"
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type="decimal"
                    onChange={(e) => setSize(parseInt(e.target.value))}
                />
            </h1>

            <AlertCircleSvg size={size} color={color} />
            <AlertTriangleSvg size={size} color={color} />
            <BellSvg size={size} color={color} />
            <CheckSvg size={size} color={color} />
            <CircleSvg size={size} color={color} />
            <HelpCircleSvg size={size} color={color} />
            <InfoSvg size={size} color={color} />
            <MenuSvg size={size} color={color} />
            <MoreHorizontalSvg size={size} color={color} />
            <MoreVerticalSvg size={size} color={color} />
            <PrintSvg size={size} color={color} />
            <SaveSvg size={size} color={color} />
            <SearchSvg size={size} color={color} />
            <TrashSvg size={size} color={color} />
            <UserSvg size={size} color={color} />

            <XSvg size={size} color={color} />
        </div>
    )
}

export default ZShowAllIcons
