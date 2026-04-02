import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import type { Patient } from '@/types/patient'
import { formatDate } from '@/utils/formatDate'
import StatusBadge from './status-badge'
import QRDialog from './qr-dialog'

type PatientTableProps = {
    patients: Patient[]
}

const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>DOB</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>QR</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        patients.map((patient) => (
                            <TableRow key={`patient-${patient.id}`}>
                                <TableCell>{patient.firstName} {patient.lastName}</TableCell>
                                <TableCell>{formatDate(patient.dob)}</TableCell>
                                <TableCell>{patient.email}</TableCell>
                                <TableCell>
                                    <StatusBadge
                                        status={patient.status}
                                    />
                                </TableCell>
                                <TableCell>
                                    <QRDialog
                                        patient={patient}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default PatientTable