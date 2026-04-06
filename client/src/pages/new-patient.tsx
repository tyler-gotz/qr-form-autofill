import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

const NewPatient: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
        }
    })

    const onSubmit = handleSubmit((data) => {
        alert('Form submitted! Data: ' + JSON.stringify(data))
    })

    return (
        <div className='flex justify-center items-center min-h-screen bg-background'>
            <form
                className='w-full max-w-md space-y-6 p-6 border rounded-2xl bg-card shadow-sm'
                onSubmit={onSubmit}
                noValidate
            >
                <h1 className='text-xl font-semibold text-center'>New Patient</h1>
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

export default NewPatient