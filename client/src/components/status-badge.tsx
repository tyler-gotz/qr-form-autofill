import React from 'react'
import { Badge } from './ui/badge'
import type { PatientStatus } from '@/types/patient'

type StatusBadgeProps = {
    status: PatientStatus
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const statusColors: Record<PatientStatus, string> = {
        "Stable": "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
        "Monitoring": "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
        "Critical": "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
        "Admitted": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    }
    return (
        <Badge className={statusColors[status]}>
            {status}
        </Badge>
    )
}

export default StatusBadge