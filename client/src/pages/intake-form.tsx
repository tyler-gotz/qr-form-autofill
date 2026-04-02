import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import { useForm } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Field, FieldLabel } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { getPatientByToken } from '@/api/patientApi';
import Loader from '@/components/loader';

const IntakeForm: React.FC = () => {
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['patient', token],
        queryFn: () => getPatientByToken(token!),
        enabled: !!token,
    })

    const {
        register,
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = useForm()

    useEffect(() => {
        if (isSuccess && data) {
            setValue('firstName', data.firstName)
            setValue('lastName', data.lastName)
            setValue('email', data.email)
            setValue('dob', data.dob)
        }
    }, [isSuccess, data, setValue])

    const onSubmit = handleSubmit((formData) => {
        alert('Form submitted! Data: ' + JSON.stringify(formData))
    })

    if (isLoading) {
        return <Loader message='Loading patient data...' />
    }

    if (isError) {
        return (
            <div className='flex justify-center items-center min-h-screen bg-background'>
                <div className='w-full max-w-md space-y-6 p-6 border rounded-2xl bg-card shadow-sm text-center'>
                    <h1 className='text-xl font-semibold'>Error</h1>
                    <p>Failed to load patient data. Please check your token and try again.</p>
                </div>
            </div>
        )
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-background'>
            <form
                className='w-full max-w-md space-y-6 p-6 border rounded-2xl bg-card shadow-sm'
                onSubmit={onSubmit}
            >
                <h1 className='text-xl font-semibold text-center'>Patient Intake Form</h1>
                <Field className="space-y-2">
                    <FieldLabel htmlFor='firstName'>First Name</FieldLabel>
                    <Input
                        id="firstName"
                        placeholder='John'
                        {...register("firstName")}
                    />
                </Field>
                <Field className="space-y-2">
                    <FieldLabel htmlFor='lastName'>Last Name</FieldLabel>
                    <Input
                        id="lastName"
                        placeholder='Doe'
                        {...register("lastName")}
                    />
                </Field>
                <Field className="space-y-2">
                    <FieldLabel htmlFor='email'>Email</FieldLabel>
                    <Input
                        id="email"
                        placeholder='example@email.com'
                        {...register("email")}
                    />
                </Field>
                <Field className="space-y-2">
                    <FieldLabel htmlFor='dob'>Date of Birth</FieldLabel>
                    <Input
                        id="dob"
                        placeholder="YYYY-MM-DD"
                        {...register("dob")}
                    />
                </Field>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default IntakeForm