import React from 'react'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { Button } from './ui/button'
import type { Patient } from '@/types/patient'
import { QRCodeCanvas } from 'qrcode.react'

type QRDialogProps = {
    patient: Patient
}

const QRDialog: React.FC<QRDialogProps> = ({ patient }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">
                    View QR
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Patient Intake Form</AlertDialogTitle>
                    <AlertDialogDescription className="space-y-4">
                        <p>
                            Scan the QR code below to access {" "}
                            <span className="font-medium">
                                {patient.firstName} {patient.lastName}
                            </span>
                            ’s information.
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Scan the QR code below or use the link to open the intake form.
                        </p>
                        <div className="flex justify-center pt-2">
                            <QRCodeCanvas
                                size={256}
                                value={`${window.location}intake-form?token=${patient.token.token}`}
                            />
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default QRDialog