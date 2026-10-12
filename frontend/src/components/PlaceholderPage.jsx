import PageHeader from './PageHeader'
import Card from './Card'

export default function PlaceholderPage({ title, owner }) {
  return (
    <div>
      <PageHeader title={title} subtitle={`Owner: ${owner}`} />
      <Card>
        <p className="text-slate-500 text-sm">This page is a placeholder. {owner}: replace it with your real page.</p>
      </Card>
    </div>
  )
}
