import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import './Achievement.css'
import { FaCrown } from 'react-icons/fa'
import defaultImage from '../../assets/svg/projects/default_project.svg' // fallback image

function AchievementCard({ id, title, details, date, field, image }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div
            key={id}
            className="achievement-card"
            style={{ backgroundColor: theme.primary30 }}
        >
            <div className="achievecard-imgcontainer">
                <img
                    src={image || defaultImage}
                    alt={title}
                    onError={(e) => {
                        e.target.onerror = null
                        e.target.src = defaultImage
                    }}
                />
            </div>

            <div className="achievecard-content">
                <div className="achievecard-details1">
                    <h2 style={{ color: theme.primary }}>{title}</h2>
                    <p style={{ color: theme.tertiary }}>{details}</p>
                </div>
                <div className="achievecard-details2" style={{ color: theme.tertiary80 }}>
                    <h5>{date}</h5>
                    <div className="achievecard-field">
                        <FaCrown style={{ color: theme.tertiary80 }} />
                        <h5>{field}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementCard
