import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { getPatients } from '@/api/patientApi'
import Loader from '@/components/loader'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import PatientTable from '@/components/patient-table'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

const Dashboard: React.FC = () => {
    const navigate = useNavigate()

    const { data: patients, isLoading } = useQuery({
        queryKey: ["patients"],
        queryFn: getPatients,
    })

    if (isLoading) {
        return <Loader message='Preparing dashboard...' />
    }

    return (
        <div className="p-6 grid gap-6">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Patient Dashboard</h1>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate("/patients/new")}
                    >
                        + New Patient
                    </Button>
                    <Avatar>
                        <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-semibold">Tyler Gotz</h2>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <Card>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Total Patients</p>
                        <p className="text-2xl font-bold">{patients?.length || 0}</p>
                    </CardContent>
                </Card>
                {/* <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Admitted Today</p>
            <p className="text-2xl font-bold">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Appointments</p>
            <p className="text-2xl font-bold">17</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Critical</p>
            <p className="text-2xl font-bold text-red-500">2</p>
          </CardContent>
        </Card> */}
            </div>
            <PatientTable
                patients={patients || []}
            />
        </div>
    )
}

export default Dashboard