import { Card, CardHeader, Image } from '@fluentui/react-components'

export default function FoodCard({ name, imageUrl }: any) {
  return (
    <Card style={{ width: 160 }}>
      <CardHeader header={name} />
      <Image src={imageUrl} alt={name} />
    </Card>
  )
}
