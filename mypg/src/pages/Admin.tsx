import { useForm } from 'react-hook-form'
import { Button, Input } from '@fluentui/react-components'

export default function Admin() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log('Updated food:', data)
  }

  return (
    <>
      <h2>Super Admin</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: 12 }}>
        <Input placeholder="Breakfast" {...register('breakfast')} />
        <Input placeholder="Lunch" {...register('lunch')} />
        <Input placeholder="Dinner" {...register('dinner')} />
        <Input placeholder="Snacks (Weekend)" {...register('snacks')} />

        <Button type="submit">Update Food</Button>
      </form>
    </>
  )
}
